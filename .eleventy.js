const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const path = require('node:path');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("slugify");

const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
  class: "anchor",
  symbol: "<span hidden>#</span>",
  style: "aria-labelledby",
});
const markdownItAnchorOptions = {
  level: [2, 3],
  slugify: (str) =>
    slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
  tabIndex: false,
  permalink: markdownItAnchor.permalink.headerLink(),
};

let markdownLibrary = markdownIt({
  html: true,
}).use(markdownItAnchor, markdownItAnchorOptions);

// For collections merging
// https://stackoverflow.com/a/1584377
const merge = (a, b, predicate = (a, b) => a === b) => {
    const c = [...a]; // copy to avoid side effects
    // add all items from B to copy C if they're not already present
    b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)))
    return c;
}

module.exports = function(eleventyConfig) {
  // Define a collection that combines tools and web tags
  eleventyConfig.setLibrary("md", markdownLibrary);
  const tagMap = {
    toolweb: [["web", "project"], ["tool", "project"]],
  };
  for (const [name, tags] of Object.entries(tagMap)) {
    eleventyConfig.addCollection(name, function (collectionsApi) {
      let collections = tags.map((x) => collectionsApi.getFilteredByTags(...x));
      // TODO: to have more than two "OR" filters, need to
      // modify the merge function
      let collection = merge(...collections);
      return collection;
    });
  }
  // Format dates to be shorter and more human-readable
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });
  eleventyConfig.addFilter("fullDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/**/*.{js,wasm,tic,webm}");
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
