module.exports = function (eleventyConfig) {
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("src/stylesheet.css");
  eleventyConfig.addPassthroughCopy("src/artworks/**/*");
  eleventyConfig.addPassthroughCopy("src/siteimages/**/*");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
