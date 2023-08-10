// https://github.com/JDNafz/assignment-unit-5.3 

console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title,artist,yearPublished) {
    let album = {
        title : title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}//end addToCollection

function findByArtist(searchName){
    let foundArtists = []; 
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist == searchName) {
            foundArtists.push(collection[i]);
        }
    }
    return foundArtists;
}//end findByArtist

function showCollection(collection){
    console.log("There are a total of",collection.length, "albums in the collection");
    for (let album of collection){
        let albumString =
        album.title + " by " +
        album.artist + ", publish in " +
        album.yearPublished + ".";
        console.log(albumString);
    }
}//end showCollection()

console.log(addToCollection("When Bears Attack","Banjo and Kazooie",1998));
console.log(addToCollection("Space Ghost Coast to Coast","Glass Animals",2022));
console.log(addToCollection("Come to Brazil","Why Don't We",2020));
console.log(addToCollection("Don't Wait", "Mapei", 2017));
console.log(addToCollection("Feel It Still", "Portugal. The Man", 2018));
console.log(addToCollection("Gold","Kiiara",2016));
console.log(addToCollection("Whippin","Kiiara",2019))

console.log(addToCollection("Hit the Road Jack","Ray Charles", 1957))

console.log(collection);


console.log("********** showCollection() ********************")
showCollection(collection);

console.log("********** testing findByArtist() ********************")

console.log(findByArtist("banana"));
console.log(findByArtist("Portugal. The Man"));
console.log(findByArtist("Kiiara"));

let albumRayCharles = { artist: 'Ray Charles', year: 1957 }
function search(searchObject){
    for (let i; i < collection.length; i ++){
        if (searchObject == collection[i]) {
            
        }
    }
}// end of search()

