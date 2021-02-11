const parse = require('csv-parse/lib/sync')

if (process.env.NODE_ENV === "production") {
  console.log(
    "Creating an optimised production build (This might take a while)".green
  );
} else {
  console.log("Development mode, skipping time-consuming build steps.".green);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./dist/main.js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./css/**.scss");
  eleventyConfig.addDataExtension("csv", contents => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true
    })
    return records
  });
};
