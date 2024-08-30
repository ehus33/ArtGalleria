const ArtGalleriaNFT = artifacts.require("ArtGalleriaNFT");

contract("ArtGalleriaNFT", (accounts) => {
  it("should mint an NFT", async () => {
    const instance = await ArtGalleriaNFT.deployed();
    await instance.mint(accounts[1]);
    const owner = await instance.ownerOf(1);
    assert.equal(owner, accounts[1], "The NFT was not minted to the correct owner");
  });

  it("should set the correct base URI", async () => {
    const instance = await ArtGalleriaNFT.deployed();
    const baseURI = await instance._baseURI();
    assert.equal(baseURI, "https://your-metadata-api.com/metadata/", "Base URI was not set correctly");
  });
});
