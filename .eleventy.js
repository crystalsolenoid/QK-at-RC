const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const path = require('node:path');

module.exports = function(eleventyConfig) {
  // Format dates to be shorter and more human-readable
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });
  eleventyConfig.addFilter("fullDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/**/*.{js,wasm,tic}");
  // just pass through gifs instead of compressing,
  // because eleventy image plugin gets rid of
  // the animation!
  eleventyConfig.addPassthroughCopy("src/**/*.gif");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addShortcode("image", async function(src, alt) {
    let imageDir = path.dirname(this.page.inputPath)
    let imageSrc = `${imageDir}/${src}`;
    if(alt === undefined) {
			// You bet we throw an error on missing alt (alt="" works okay)
			throw new Error(`Missing \`alt\` on myImage from: ${imageSrc}`);
    }

    let metadata = await Image(imageSrc, {
      widths: [800],
      formats: ["auto"],
      urlPath: imageDir,
      outputDir: "_site/" + imageDir,
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);

        return `${name}-${width}w.${format}`;
      }
    });

    if(metadata.jpeg) {
      let small = metadata.jpeg[0];
      return `<img src="/${small.url}" width="${small.width}" height="${small.height}" alt="${alt}">`;
    } else if(metadata.png) {
      let small = metadata.png[0];
      return `<img src="/${small.url}" width="${small.width}" height="${small.height}" alt="${alt}">`;
    }// else if(metadata.gif) {
    //  let small = metadata.gif[0];
    //  return `<img src="/${small.url}" width="${small.width}" height="${small.height}" alt="${alt}">`;
    //}
  });
  return {
    dir: {
      input: "src",
      output: "_site"
      }
  }
};
