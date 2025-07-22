const fs = require("fs");
const path = require("path");

const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
// Assumes the 'artworks' directory is in the project root.
const artworksDir = path.join(process.cwd(), "artworks");

module.exports = () => {
  if (!fs.existsSync(artworksDir)) {
    console.warn(
      `[artworkImages.js] Artwork directory not found at: ${artworksDir}. You may need to create it or adjust the path.`
    );
    return [];
  }

  const files = fs.readdirSync(artworksDir);
  return files
    .filter((file) => imageExtensions.test(file))
    .map((file) => `/artworks/${file}`);
};
