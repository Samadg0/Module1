const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i = 1; i <= 5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `Green NFT Data #${i}`,
      description: `Struggling African Child #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmaHK5sQSKrpoQpnvETDfLhFjm4rkbUwnYPw3MvCoFMtxR/${i}.jpeg`
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'nftImageData', String(i)),
    JSON.stringify(json)
  );
}
