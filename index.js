const fs = require('fs');
const json = require('./metadatas.json')
const sha256 = require('sha256');
const shuffleSeed = require('shuffle-seed');

const staticSeed = "themetastars"
const dynamicSeed = "0x909536435db5a0ad4ee3a309444274e277bdcb18d6f5d7b4d7e3b026a9a2b9fe3"
const shuffleHash = sha256(sha256(staticSeed) + sha256(dynamicSeed));

const result = shuffleSeed.shuffle(json, shuffleHash)

fs.writeFile(`result.json`, JSON.stringify(result), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("New Metadata file was saved!");
});

