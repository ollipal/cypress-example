var fs = require("fs");
const cypress = require("cypress");

(async () => {
  const result = await cypress.run({
    reporter: "json",
    config: {
      video: false,
    },
    //env: {}, add password here!?
  });
  const stats = result.runs[0].reporterStats;
  const tests = result.runs[0].tests;
  console.log("DONE");
  fs.writeFile("json.json", JSON.stringify({ stats, tests }), function (err) {
    if (err) {
      console.log(err);
    }
  });
})();
