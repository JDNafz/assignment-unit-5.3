// https://github.com/JDNafz/assignment-unit-5.3 


let collection = [];

function addToCollection(title,artist,yearPublished,tracks) {
    let album = {
        title : title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
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

function search(searchObject){  
    // searchObject MUST BE an OBJECT, include key/value pairs of { artist: ... , year: ... , yearPublished: ... , [{name:... , duration: ...},{other tracks...}]}
    let foundMatch = []; // results output array

    // console.log(JSON.stringify(searchObject))
    let stringObj = JSON.stringify(searchObject);

    // check if search({}) or search()   //catches if an object is correctly input but is empty or if search doesn't contain object
    if (stringObj == "{}" || searchObject == undefined) {
        return collection;

    //check for trackName FIRST
    } else if (stringObj.includes("trackName")) {
        // go through each track in each album in the collection
        for (let album of collection){
            for (let track of album.tracks){
                if (searchObject.tracks[0].trackName == track.name) {
                    foundMatch.push(album);
                }
            }
        }
        // console.log(foundMatch); //used for debugging initially
    // end search by trackName


    //search by artist and year
    } else {
        for (let i= 0; i < collection.length; i ++){
            if (searchObject.artist == collection[i].artist
                && searchObject.year == collection[i].yearPublished) {
                    foundMatch.push(collection[i]);
            } //end if artist and year match
            // The following catches the error if the searchObject uses the property yearPublished instead  of year. 
            else if (searchObject.artist == collection[i].artist
                && searchObject.yearPublished == collection[i].yearPublished) {
                foundMatch.push(collection[i]);
            }//end year vs yearPublished error
        }
    }
    return foundMatch
}// end of search()

function showCollection(collection){
    console.log("There are a total of",collection.length, "albums in the collection");
    for (let i = 0; i < collection.length; i ++){
        let albumString =
        collection[i].title + " by " +
        collection[i].artist + ", publish in " +
        collection[i].yearPublished + ":"

        for (let j = 0; j < collection[i].tracks.length; j++) {
            albumString += `\n ${j+1}. ${collection[i].tracks[j].name}: ${collection[i].tracks[j].duration}`
        }
        ;
        console.log(albumString);
    }
}



//testing
console.log('***** Music Collection *****')

//adding albums
console.log(addToCollection("When Bears Attack","shia labeouf",2014,[{  name: "The Fight", duration: 180},{name: "Wounded", duration: 155},{name: "In for the kill", duration: 240},{name: "But, your leg, AHH, it's caught  in a bear trap", duration: 300}]));
console.log(addToCollection("Space Ghost Coast to Coast","Glass Animals",2022,[{name: "Wavy Davie",duration: 200},{name: "Ghosts", duration: 290},{name: "lazers",duration: 140}]));
console.log(addToCollection("Come to Brazil","Why Don't We",2020,[{name: "Come to Brazil", duration: 120},{name: "Eu fala queijo",duration: 20}]));
console.log(addToCollection("Don't Wait", "Mapei", 2017,[{name: "Don't Wait", duration: 350},{ name: "Move on Already", duration: 280}, {name: "I'm still waiting any way", duration: 60}]));
console.log(addToCollection("Feel It Still", "Portugal. The Man", 2018,[{name: "Feel it for now", duration:  90}, {name: "Feel it eventually, again", duration: 200}, {name: "I think I'm feeling smthn", duration: 170}, {name: "Not feelin' it", duration: 30}]));
console.log(addToCollection("Gold","Kiiara",2016,[{name: "Chains", duration: 120},{name: "watches", duration: 300},{name:  "rings", duration: 230}]));
console.log(addToCollection("Whippin","Kiiara",2019, [{name: "Go Zoom", duration: 140}, {name: "skrrt skrrt", duration: 220}, {name: "Whippin", duration: 360}]))
console.log(addToCollection("Hit the Road Jack","Ray Charles", 1957,[{name: "Hit the Road Jack", duration: 150}, {name: "Blind man tracksssss", duration:  60}]))

//test collection for implementation of tracks
console.log(collection[1].tracks)
//test whole collection
console.log(collection);


console.log("********** showCollection() ********************")
showCollection(collection);

console.log("********** testing findByArtist() ********************")

console.log(findByArtist("banana"));
console.log(findByArtist("Portugal. The Man"));
console.log(findByArtist("Kiiara"));


console.log("************* testing search() ****************************")

let albumRayCharles = { artist: 'Ray Charles', year: 1957 }
console.log(search(albumRayCharles));

let test1 = {artist: "Kiiara", yearPublished: 2016}
console.log(search(test1));

let emptyTest = {};
console.log(search(emptyTest));// returns all
console.log(search());// returns all

let trackSearch1 = {tracks: [{trackName: "Feel it for now"}] }  
console.log(search(trackSearch1)); //returns Glass Animals Album

let trackSearch2 = {tracks: [{trackName: "Whippin"}]}
console.log(search(trackSearch2));// returns Kiiara Album

//proper search format for trackName
let properTrackSearch = {
                      tracks: [// main obj property (array)
                               {//array contains objects
                                 trackName: //track obj key
                                           //value
                                           "Whippin"}]}; //close all brackets
console.log(search(properTrackSearch));

let prioritizeTrackSearch = {artist: "Kiiara", yearPublished: 2016,tracks: [{trackName: "But, your leg, AHH, it's caught  in a bear trap"}]};
console.log(search(prioritizeTrackSearch)); // returns shia labeouf album


//explore next.js
