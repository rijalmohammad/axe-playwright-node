const criteriaData = {
  ACT: {
    name: "ACT",
    note: "",
  },
  "best-practice": {
    name: "ACT",
    note: "",
  },
  "cat.aria": {
    name: "Category Aria",
    note: "",
  },
  "cat.color": {
    name: "Category Color",
    note: "",
  },
  "cat.forms": {
    name: "Category Forms",
    note: "",
  },
  "cat.keyboard": {
    name: "Category Keyboard",
    note: "",
  },
  "cat.language": {
    name: "Category Language",
    note: "",
  },
  "cat.name-role-value": {
    name: "Category Name, Role, Value",
    note: "",
  },
  "cat.parsing": {
    name: "Category Parsing",
    note: "",
  },
  "cat.semantics": {
    name: "Category Semantics",
    note: "",
  },
  "cat.sensory-and-visual-cues": {
    name: "Category Sensory and Visual Cues",
    note: "",
  },
  "cat.structure": {
    name: "Category Structure",
    note: "",
  },
  "cat.tables": {
    name: "Category Tables",
    note: "",
  },
  "cat.text-alternatives": {
    name: "Category Text Alternatives",
    note: "",
  },
  "cat.time-and-media": {
    name: "Category Time and Media",
    note: "",
  },
  "review-item": {
    name: "Review Item",
    note: "",
  },
  "section508": {
    name: "Section 508",
    note: "https://www.epa.gov/accessibility/what-section-508",
  },
  "section508.22.a": {
    name: "Section 508 22a (Equivalent Text Descriptions)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.f": {
    name: "Section 508 22f (Client Side Image Maps)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.g": {
    name: "Section 508 22g (Data Table Headers)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.i": {
    name: "Section 508 22i (Descriptive Frame Title)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.j": {
    name: "Section 508 22j (No flickering Interface components)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.n": {
    name: "Section 508 22n (Labels for Forms)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "section508.22.o": {
    name: "Section 508 22o (Method to Skip Repetitive Links)",
    note: "https://www.dhs.gov/sites/default/files/publications/DHS_Section_508_Compliance_Test_Process_for_Applications_4x.pdf",
  },
  "wcag2a": {
    name: "WCAG 2 Level A",
    note: "https://www.w3.org/TR/WCAG20/",
  },
  "wcag2aa": {
    name: "WCAG 2 Level AA",
    note: "https://www.w3.org/TR/WCAG20/",
  },
  "wcag2aaa": {
    name: "WCAG 2 Level AAA",
    note: "https://www.w3.org/TR/WCAG20/",
  },
  "wcag21aa": {
    name: "WCAG 2.1 Level AA",
    note: "https://www.w3.org/TR/WCAG21/",
  },
  "wcag111": {
    name: "WCAG 1.1.1 (Non-Text Content)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html",
  },
  "wcag121": {
    name: "WCAG 1.2.1 (Audio-only and Video-only Prerecorded)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html",
  },
  "wcag122": {
    name: "WCAG 1.2.2 (Captions Prerecorded)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html",
  },
  "wcag123": {
    name: "WCAG 1.2.3 (Audio Description or Media Alternative)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html",
  },
  "wcag124": {
    name: "WCAG 1.2.4 (Captions Live)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html",
  },
  "wcag131": {
    name: "WCAG 1.3.1 (Info and Relationships)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
  },
  "wcag132": {
    name: "WCAG 1.3.2 (Meaningful Sequence)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html",
  },
  "wcag133": {
    name: "WCAG 1.3.3 (Sensory Characteristics)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html",
  },
  "wcag134": {
    name: "WCAG 1.3.4 (Orientation)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html",
  },
  "wcag135": {
    name: "WCAG 1.3.5 (Identify, Input, Purpose)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html",
  },
  "wcag141": {
    name: "WCAG 1.4.1 (Use of Color)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html",
  },
  "wcag142": {
    name: "WCAG 1.4.2 (Audio Control)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html",
  },
  "wcag143": {
    name: "WCAG 1.4.3 (Contrast Minimum)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
  },
  "wcag144": {
    name: "WCAG 1.4.4 (Resize Text)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html",
  },
  "wcag145": {
    name: "WCAG 1.4.5 (Images of Text)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html",
  },
  "wcag146": {
    name: "WCAG 1.4.6 (Contrast Enhanced)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html",
  },
  "wcag1410": {
    name: "WCAG 1.4.10 (Reflow)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/reflow",
  },
  "wcag1411": {
    name: "WCAG 1.4.11 (Non-Text Contrast)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast",
  },
  "wcag1412": {
    name: "WCAG 1.4.12 (Text Spacing)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",
  },
  "wcag1413": {
    name: "WCAG 1.4.13 (Content on Hover or Focus)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus",
  },
  "wcag211": {
    name: "WCAG 2.1.1 (Keyboard)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html",
  },
  "wcag212": {
    name: "WCAG 2.1.2 (No Keyboard Trap)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html",
  },
  "wcag212": {
    name: "WCAG 2.1.2 (No Keyboard Trap)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html",
  },
  "wcag214": {
    name: "WCAG 2.1.4 (Character Key Shortcuts)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts",
  },
  "wcag221": {
    name: "WCAG 2.2.1 (Timing Adjustable)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html",
  },
  "wcag222": {
    name: "WCAG 2.2.2 (Pause, Stop, Hide)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html",
  },
  "wcag224": {
    name: "WCAG 2.2.4 (Interruptions)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html",
  },
  "wcag231": {
    name: "WCAG 2.3.1 (Three Flashes or Below Threshold)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html",
  },
  "wcag241": {
    name: "WCAG 2.4.1 (Bypass Blocks)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html",
  },
  "wcag242": {
    name: "WCAG 2.4.2 (Page Titled)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html",
  },
  "wcag243": {
    name: "WCAG 2.4.3 (Focus Order)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html",
  },
  "wcag244": {
    name: "WCAG 2.4.4 (Link Purpose In Context)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html",
  },
  "wcag245": {
    name: "WCAG 2.4.5 (Multiple Ways)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html",
  },
  "wcag246": {
    name: "WCAG 2.4.6 (Headings and Labels)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html",
  },
  "wcag247": {
    name: "WCAG 2.4.7 (Focus Visible)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html",
  },
  "wcag249": {
    name: "WCAG 2.4.9 (Link Purpose Link Only)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html",
  },
  "wcag251": {
    name: "WCAG 2.5.1 (Pointer Gestures)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html",
  },
  "wcag252": {
    name: "WCAG 2.5.2 (Pointer Cancellation)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html",
  },
  "wcag253": {
    name: "WCAG 2.5.3 (Label in Name)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",
  },
  "wcag254": {
    name: "WCAG 2.5.4 (Motion Actuation)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html",
  },
  "wcag311": {
    name: "WCAG 3.1.1 (Language of Page)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html",
  },
  "wcag312": {
    name: "WCAG 3.1.2 (Language of Parts)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html",
  },
  "wcag321": {
    name: "WCAG 3.2.1 (On Focus)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html",
  },
  "wcag322": {
    name: "WCAG 3.2.2 (On Input)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html",
  },
  "wcag323": {
    name: "WCAG 3.2.3 (Consistent Navigation)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html",
  },
  "wcag324": {
    name: "WCAG 3.2.4 (Consistent Identification)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html",
  },
  "wcag325": {
    name: "WCAG 3.2.5 (Change on Request)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html",
  },
  "wcag331": {
    name: "WCAG 3.3.1 (Error Identification)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html",
  },
  "wcag332": {
    name: "WCAG 3.3.2 (Labels or Instructions)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html",
  },
  "wcag333": {
    name: "WCAG 3.3.3 (Error Suggestion)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html",
  },
  "wcag334": {
    name: "WCAG 3.3.4 (Error Prevention - Legal, Financial, Data)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html",
  },
  "wcag411": {
    name: "WCAG 4.1.1 (Parsing)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html",
  },
  "wcag412": {
    name: "WCAG 4.1.2 (Name, Role, Value)",
    note: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html",
  },
  "wcag413": {
    name: "WCAG 4.1.3 (Status Messages)",
    note: "https://www.w3.org/WAI/WCAG21/Understanding/status-messages",
  },
};

module.exports = criteriaData;