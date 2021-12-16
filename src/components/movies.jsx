import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService.js";
import Like from "./common/like.jsx";
import Pagnation from "./common/pagaination";
import ListGroup from "./common/listgroup.jsx";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };

    componentDidMount() {
        this.setState({movies:getMovies(), genres:getGenres()})
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre });
    }

    handleDelete = movie => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }


    render(){
        const { length: count} = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies:allMovies} = this.state;

        if (count === 0)
            return <p>There are no movies in the database.</p>

        const filtered = selectedGenre
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies

        const movies = paginate(filtered, currentPage, pageSize)  
            
        return(
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.numberInStock}</td>
                                <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                                <button className = "btn btn-danger btn-sm"
                                onClick={() => this.handleDelete(movie)}>Delete</button>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagnation
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }

}

export default Movies;