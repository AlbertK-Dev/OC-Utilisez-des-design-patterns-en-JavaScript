class MoviesFactory{
    constructor(data, type){
        console.log('MF data', data);
        console.log('MF type', type);

        if (type === "oldAPI") {
            return new OldMovie(data);
        }else if(type === "externalAPI"){
            return new ExternalMovie(data)
        }else if (type === "newAPI") {
            return new Movie(data);
        }else{
                throw "type de Movies inconnu";
        }
    
    }
}