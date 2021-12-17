import React, { Component } from "react";
import Pagnation from "./common/pagaination";
import ListGroup from "./common/listgroup.jsx";
import MoviesTable from "./moviesTable.jsx";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService.js";
import _ from "lodash";


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: "title", order: 'asc'}
    };

    componentDidMount() {
        const genres = [{_id: "", name: "All Genres"}, ...getGenres()]

        this.setState({movies:getMovies(), genres})
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1});
    }

    handleDelete = movie => {
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

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }


    render(){
        const { length: count} = this.state.movies;
        const {
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn,
            movies: allMovies,
        } = this.state;

        if (count === 0)
            return <p>There are no movies in the database.</p>

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)  
            
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
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
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