var fs = require('fs');
var data = require('./metadata.json')
links()
async function links() {
    for (let i = 0; i < data.length; i++) {
        let name = `creemee ${i}`
        data[i]['image'] = data[i]['image'].replace("ipfs://NewUriToReplace", "https://gateway.pinata.cloud/ipfs/QmfNytvaZBiguQeZpozSM8kNkvvTm1teA3Ln9hPxZf9eN3")
        fs.appendFileSync("attributes.json", `\n"creemee #${i+1}" : `+ JSON.stringify(data[i])+',');
        console.log(i)
    }
    console.log(data.length)
}