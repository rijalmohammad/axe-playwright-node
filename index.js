const express = require("express");
const cors = require("cors");
const AxeBuilder = require("@axe-core/playwright").default;
const playwright = require("playwright");
const criteriaData = require("./data");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.options("*", cors());

app.get("/scan", async (req, res) => {
  const url = req.query.url;

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);

  const title = await page.title();

  try {
    const results = await new AxeBuilder({ page })
      .options({ resultTypes: ["violations", "incomplete"] })
      .analyze();

    const basicWebpage = {
      webpageName: title,
      url: results.url,
      scanTime: results.timestamp,
      issues: [],
    };

    let critical = 0;
    let serious = 0;
    let moderate = 0;
    let minor = 0;

    let automatic = 0;
    let needsReview = 0;

    const allIssues = [...results.incomplete, ...results.violations];

    const incompleteIndex = results.incomplete.length;

    const filteredIssues = allIssues.reduce((obj, item, index) => {
      const occurences = item.nodes.map((node) => {
        if (node.impact === "serious") {
          serious += 1;
        } else if (node.impact === "moderate") {
          moderate += 1;
        } else if (node.impact === "minor") {
          minor += 1;
        } else if (node.impact === "critical") {
          critical += 1;
        }

        if (index < incompleteIndex) {
          needsReview += 1;
        }

        automatic += 1;

        return {
          description: item.description,
          location: node.target[0],
          source: node.html,
          fix: node.failureSummary,
          needsReview: index < incompleteIndex,
        };
      });

      const tags = item.tags.map((tag) => ({
        criteriaId: tag,
        ...criteriaData[tag],
      }));

      obj[item.id]
        ? obj[item.id].occurences.push(...occurences)
        : (obj[item.id] = {
            id: item.id,
            name: item.help,
            impact: item.impact,
            found: "automatic",
            notes: "",
            occurences: occurences,
            criteria: tags,
          });

      return obj;
    }, {});

    basicWebpage.issues = Object.values(filteredIssues);

    basicWebpage.impactStatistics = [
      {
        impact: "critical",
        count: critical,
      },
      {
        impact: "serious",
        count: serious,
      },
      {
        impact: "moderate",
        count: moderate,
      },
      {
        impact: "minor",
        count: minor,
      },
    ];

    basicWebpage.foundStatistics = [
      {
        found: "automatic",
        count: automatic,
      },
      {
        found: "guided",
        count: 0,
      },
      {
        found: "needsReview",
        count: needsReview,
      },
    ];

    await browser.close();
    res.status(200).send(basicWebpage);
  } catch (e) {
    await browser.close();

    const errorMessage = {
      status: "error",
      messages: e,
    };

    res.status(500).send(errorMessage);
    console.log(errorMessage);
  }
});

const port = process.env.PORT || 8080;

var server = app.listen(port, () => {
  console.log("Analyze API listening on port", port);
});

server.setTimeout(2147483647);
