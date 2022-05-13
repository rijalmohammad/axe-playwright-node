const express = require("express");
const cors = require("cors");
const AxeBuilder = require("@axe-core/playwright").default;
const playwright = require("playwright");
const criteriaData = require("./data");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.options('*', cors());

app.get("/scan", async (req, res) => {
  const url = req.query.url;

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);

  try {
    const results = await new AxeBuilder({ page }).analyze();
    const basicWebpage = {
      name: "",
      url: results.url,
      scanTime: results.timestamp,
      issues: [],
    };

    let critical = 0;
    let serious = 0;
    let moderate = 0;
    let minor = 0;

    let automatic = 0;

    const allIsues = results.violations;

    for (const issue of allIsues) {
      const issueObj = {
        name: issue.help,
        impact: issue.impact,
        found: "automatic",
        note: "",
        occurences: [],
        criteria: [],
      };

      const nodes = issue.nodes || []

      for (const node of nodes) {
        const occurenceObj = {
          description: issue.description,
          location: node.target[0],
          source: node.html,
          fix: node.failureSummary,
        };
        issueObj.occurences.push(occurenceObj);

        if(node.impact === "serious"){
          serious+=1;
        } else if(node.impact === "moderate"){
          moderate+=1;
        } else if(node.impact === "minor"){
          minor+=1;
        } else if(node.impact === "critical"){
          critical+=1;
        }

        automatic+=1;
      }

      const tags = issue.tags || []

      for (const tag of tags) {
        issueObj.criteria.push({ criteriaId: tag, ...criteriaData[tag] });
      }

      basicWebpage.issues.push(issueObj);
    }

    const impactTotal = critical + serious + moderate + minor;

    const impactStatistics = [
        {
            impact: 'critical',
            count: critical,
        },
        {
            impact: 'serious',
            count: serious,
        },
        {
            impact: 'moderate',
            count: moderate,
        },
        {
            impact: 'minor',
            count: minor,
        },
    ]

    const foundTotal = automatic;

    // const foundStatistics = {
    //   automatic: automatic,
    //   guided: 0,
    //   needsReview: 0,
    //   foundTotal: foundTotal,
    // }

    const foundStatistics = [
        {
            found: 'automatic',
            count: automatic,
        },
        {
            found: 'guided',
            count: 0,
        },
        {
            found: 'needsReview',
            count: 0,
        },
    ];

    basicWebpage.impactStatistics = impactStatistics;
    basicWebpage.foundStatistics = foundStatistics;

    await browser.close();

    res.status(200).send(basicWebpage);
  } catch (e) {
    await browser.close();

    res.status(500).send(e);
    console.log(e);
    // do something with the error
  }
});

const port = process.env.PORT || 8080;

var server = app.listen(port, () => {   
  console.log("Analyze API listening on port", port);
});

server.setTimeout(2147483647);
