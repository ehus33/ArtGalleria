const ArtGalleriaNFT = artifacts.require("ArtGalleriaNFT");

module.exports = function(deployer) {
  const baseURI = "https://your-metadata-api.com/metadata/";
  deployer.deploy(ArtGalleriaNFT, baseURI);
};
