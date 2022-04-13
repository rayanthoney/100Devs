//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

// Constructor
class MakeNetflixTVShows{
    constructor(title,genre,rating,numOfEp) {
        this.title
        this.genre
        this.rating
        this.numOfEp
    }

    play(){
        console.log('playing...')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved To List')
    }
}

let bridgerton = new MakeNetflixTVShows('Bridgerton ', 'Period Romantic Drama', '99%', 16)
bridgerton()