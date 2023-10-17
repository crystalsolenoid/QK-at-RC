const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Format dates to be shorter and more human-readable
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });
};
