'use strict';
export default class Movie {
    constructor() {
        this.movies = [];
        localStorage.removeItem("movies");
    }
    #add(object) {
        console.log(this.movies);
        this.movies.push(object);
        localStorage.setItem("movies", JSON.stringify(this.movies));
    }
    #isDuplicate(key) {
        let movies = JSON.parse(localStorage.movies ?? 0);
        try {
            for(let movie of movies) {
                if(movie.id === key)
                    return 1;
            }
        } catch(e) {
            return 0;
        }
        return 0;
    }
    create(details) {
        if(typeof details !== "object") throw new Error("Passed value must be an object");
        if(Object.entries(details).length !== 3) throw new Error("Something is missing in parameters");
        if(this.#isDuplicate(details.id) && this.movies.length > 0) throw new Error("Duplicate item");
        this.#add(details);
    }
    delete(id) {
        let movies = JSON.parse(localStorage.movies ?? []);
        movies.forEach((movie, index) => {
            if(movie.id === id) {
                movies.splice(index, 1);
            }
        })
        this.movies = movies;
        localStorage.movies = JSON.stringify(movies);
    }
    update(value, name, price) {
        let movies = JSON.parse(localStorage.movies ?? []);
        movies.forEach(movie => {
            if(movie.id === value) {
                movie.name = name;
                movie.price = price;
            }
        });
        this.movies = movies;
        localStorage.movies = JSON.stringify(movies);
    }
    get() {
        return JSON.parse(localStorage.movies);
    }
}
