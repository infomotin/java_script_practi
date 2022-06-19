// If two modules export two different values using the same name and you want to
// import both of those values, you will have to rename one or both of the values when
// you import it. Similarly, if you want to import a value whose name is already in use in
// your module, you will need to rename the imported value. You can use the as key‐
// word with named imports to rename them as you import them:

import { render as renderImage } from "./imageutils.js";
import { render as renderUI } from "./ui.js";
import { mean } from "./stats/mean.js";
import { stddev } from "./stats/stddev.js";
export { mean, stdev };