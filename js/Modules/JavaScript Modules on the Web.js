import * as stats from "./stats.js";
import("./stats.js").then((stats) => {
  let average = stats.mean(data);
});
// in an async function (again, you may need to read Chapter 13 before you’ll
// understand this code), we can simplify the code with await:
async analyzeData(data) {
 let stats = await import("./stats.js");
 return {
 average: stats.mean(data),
 stddev: stats.stddev(data)
 };
}
function localStringsURL(locale) {
 return new URL(`l10n/${locale}.json`, import.meta.url);
}