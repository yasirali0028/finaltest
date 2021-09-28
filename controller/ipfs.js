
const ipfsClient = require('ipfs-api');
const ipfs = ipfsClient('ipfs.infura.io', '5001', { protocol: 'https' })
var fs = require('fs');
// var excel = require('../excel.json')

// links()
ipfsconert()

async function ipfsconert(){
    try {
            let files = fs.readFileSync(`./Reveal.gif`)
            let filesAdded = await ipfs.add(files);
            console.log(filesAdded[0].hash)
        
    } catch (error) {
        console.log("Error ", error)
    }
}

async function links() {
    // fs.appendFileSync("attributes.json", `{\n`);
    try {
        for (let i = 8032; i < 10000; i++) {
            let files = fs.readFileSync(`../images/${excel.Sheet1[i].Avatar_No}.jpg`)
            let filesAdded = await ipfs.add(files);
            fs.appendFileSync("attributes.json", `"ZedHead ${excel.Sheet1[i].Avatar_No}": {\n "attributes" : [\n{"trait_type": "Skin","value": "${excel.Sheet1[i].Skin}"}, {"trait_type": "Face","value": "${excel.Sheet1[i].Face}"}, {"trait_type": "Eyes","value": "${excel.Sheet1[i].Eyes}"}, {"trait_type": "Clothing","value": "${excel.Sheet1[i].Clothing}"}, {"trait_type": "Haircolour","value": "${excel.Sheet1[i].Haircolour}"}, {"trait_type": "Hair/Hat","value": "${excel.Sheet1[i]["Hair/Hat"]}"} \n], \n"description": "ZEDHEADS - 10.000 unique NFTs living on the Ethereum Blockchain. We love gambling. We love horseracing. We spend massive ETH on cool haircuts. Be part of the movement - MINT HERE!", "image": "https://ipfs.io/ipfs/${filesAdded[0].hash}","name": "ZedHead ${excel.Sheet1[i].Avatar_No}" \n},\n`);
            console.log(i)
        }
        fs.appendFileSync("attributes.json", `}\n`);
    } catch (error) {
        console.log("Error ", error)
    }
}