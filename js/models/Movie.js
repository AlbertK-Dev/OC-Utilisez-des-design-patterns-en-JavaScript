class Movie {

    constructor(data){
        this._title = data.title.fr || data.title.en;
        this._duration = `${parseInt(Number(data.duration)/60)}h${Number(data.duration)%60}` ;
        this._picture = data.picture;
        this._synopsis = data.synopsis;
        this._released_in = data.released_in;
    }

    get title(){
        return this._title;
    }

    get duration(){
        return this._duration;
    }

    get synopsis(){
        return this._synopsis;
    }
    get released_in(){
        return this._released_in;
    }

    get picture(){
        return `/assets/${this._picture}`
    }

    get tumbnails(){
        return `/assets/tumbnails/${this._picture}`
    }
}
