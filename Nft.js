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

let bollywood_NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, year,genre,actor) {
    const movie = {
        name: name,
        year: year,
        genre: genre,
       actor: actor
        
    };
   bollywood_NFTs.push(movie);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\n");
    for (let i = 0; i<bollywood_NFTs.length; i++){
        const nft = bollywood_NFTs[i];
        console.log(`Name: ${nft.name}`);
        console.log(`Year: ${nft.year}`);
        console.log(`Genre: ${nft.genre}`);
        console.log(`Actor: ${nft.actor}`);
        console.log("\n");
       
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return bollywood_NFTs.length;
}

// call your functions below this line

mintNFT("Pink", 2016, "Crime", "Amitabh");
mintNFT("Maidaan", 2024, "Sports", "Ajay Devgan");
mintNFT("Anek", 2022, "Action", "Aayushman Khurana");
mintNFT("Dhaakad", 2022, "Spy", "Kangana Ranaut");


listNFTs();

const totalNFTs = getTotalSupply();
console.log("Total Bollywood Movies: " + totalNFTs);