/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var nft=[]; 
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (a,b,c,d) {
const myobj={
       "name": a,
       "uid" : b,
       "university": c,
       "year":d
};
nft.push(myobj);
console.log("name of the student :" +a);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for ( var i=0;i<nft.length;i++)
    {
        console.log("\n Name :"+nft[i].name);
        console.log("\n UID :"+nft[i].uid);
        console.log("\n University :"+nft[i].university);
        console.log("\n Year of the graduation :"+nft[i].year);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n the number of nfts that have minted to console is/are:" + nft.length);
}

// call your functions below this line
mintNFT("dinky",11151,"chandigarh university","3rd");
listNFTs ();
getTotalSupply();