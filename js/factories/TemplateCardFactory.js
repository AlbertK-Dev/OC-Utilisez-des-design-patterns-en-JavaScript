class TemplateCardFactory{
    constructor(data){
        console.log(data)
        if (data.type === "movie") {
            return new MovieCard(data);
        }else if (data.type === "tv-show") {
            return new TvShowCard(data);
        }else{
            throw "Unknown type"
        }
    }
}