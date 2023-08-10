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

addToCollection("When Bears Attack","Banjo and Kazooie",1998);
addToCollection("Space Ghost Coast to Coast","Glass Animals",2022);
console.log(collection);

