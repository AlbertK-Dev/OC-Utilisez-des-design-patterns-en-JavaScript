class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const newMoviesData = await this.newMoviesApi.getMovies();
        const externalMoviesData = await this.externalMoviesApi.getMovies();
        

       const externalMovies = externalMoviesData.map(movie=> new MoviesFactory(movie, "externalAPI"));
       const newMovies = newMoviesData.map(movie=> new MoviesFactory(movie, "newAPI"));
       const fullMovies = externalMovies.concat(newMovies)
       console.log(fullMovies)
        fullMovies
            .forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
