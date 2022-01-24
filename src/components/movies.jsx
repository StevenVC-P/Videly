import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Pagnation from "./common/pagaination";
import ListGroup from "./common/listGroup.jsx";
import MoviesTable from "./moviesTable.jsx";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService.js";
import _ from "lodash";

// function Movies ( {totalCount, selectedGenre, movies: allMovies }) {
//     const [movies, setMovies] = useState([]);
//     const [genres, setGenres] = useState([]);
//     const [genre, setSelectedGenre] = useState({})
//     const [pageSize, setPageSize] = useState(4);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [sortColumn, setSortColumn] = useState({path: "title", order: 'asc'})

//     useEffect(() => {
//         const genres = [{_id: "", name: "All Genres"}, ...getGenres()]

//         setMovies({movies:getMovies(), genres})
//     })

//     const handleGenreSelect = genre => {
//         setSelectedGenre(genre)
//         setCurrentPage(1)
//     }

//     // const handleDelete = movie => {
//     //     const movies = movies.filter(m => m._id !== movie._id)
//     //     setMovies({movies})
//     // }

//     // const handleLike = movie => {
//     //     // const movies = movies;
//     //     const index = movies.indexOf(movie);
//     //     movies[index] = {...movies[index]};
//     //     movies[index].liked = !movies[index].liked;
//     //     setMovies({movies});
//     // }

//     const handleSort = sortColumn => {
//         setSortColumn({sortColumn})
//     }

//     const handlePageChange = page => {
//         setCurrentPage({ currentPage: page });
//     }

//     // function getPagedData() {

//     //     const filtered = selectedGenre && selectedGenre._id
//     //         ? allMovies.filter(m => m.genre._id === selectedGenre._id)
//     //         : allMovies;

//     //     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     //     const movies = paginate(sorted, currentPage, pageSize);

//     //     return { totalCount: filtered.length, data: movies };
//     // }

//     if (movies.length === 0)
//         return <p>There are no movies in the database.</p> 
        
//     // getPagedData(); 

//     return(
//         <div className="row">
//             <div className="col-3">
//                 <ListGroup
//                     items={genres}
//                     onItemSelect={handleGenreSelect}
//                     selectedItem={genre}
//                 />
//             </div>
//             <div className="col">
//                 <Link 
//                     to="/movies/new"
//                     className="btn btn-primary"
//                     style={{marginBottom:20}}
//                 >
//                     New Movie
//                 </Link>
//                 <p>Showing {totalCount} movies in the database.</p>
//                 <MoviesTable
//                     movies={movies}
//                     sortColumn={sortColumn}
//                     // onLike={handleLike()}
//                     // onDelete={handleDelete()}
//                     onSort={handleSort()}
//                 />
//                 <Pagnation
//                     itemsCount={totalCount}
//                     pageSize={pageSize}
//                     currentPage={currentPage}
//                     onPageChange={handlePageChange()}
//                 />
//             </div>
//         </div>
//     )
// }




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

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn,
            movies: allMovies,
        } = this.state;

        const filtered = 
            selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize) 

        return { totalCount: filtered.length, data:movies };
    }

    render(){
        const { length: count} = this.state.movies;
        const { pageSize, currentPage, sortColumn} = this.state;

        if (count === 0)
            return <p>There are no movies in the database.</p> 
        
        const { totalCount, data:movies } = this.getPagedData(); 

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
                    <Link 
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{marginBottom:20}}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagnation
                        itemsCount={totalCount}
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