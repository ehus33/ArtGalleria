// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArtGalleriaNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    string private _baseTokenURI;

    constructor(string memory baseURI) ERC721('ArtGalleria', 'AGNFT') {
        _baseTokenURI = baseURI;
        nextTokenId = 1;  // Start token IDs from 1
    }

    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }
}
