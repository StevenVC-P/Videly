import React from 'react';
import { Link } from 'react-router-dom';
import Like from "./common/like.jsx";
import Table from './common/table.jsx';

function MoviesTable({ movies, onSort, sortColumn, onLike, onDelete } ) {
    const columns = [
        { 
            path: 'title',
            label: 'Title',
            content:movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { 
            key: 'like',
            content: movie => (
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
            )
        },
        {   
            key: 'delete', 
            content: movie => (
                <button
                    onClick={() => onDelete(movie)}
                    className = "btn btn-danger btn-sm"
                >
                    Delete
                </button>
            )
        }
    ]
    
    return ( 
        <Table 
            columns={columns}
            data={movies}
            sortColumn={sortColumn}
            onSort={onSort}
        />
    );
}




// class MoviesTable extends Component{
//     columns = [
//         { 
//             path: 'title',
//             label: 'Title',
//             content:movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
//         },
//         { path: 'genre.name', label: 'Genre'},
//         { path: 'numberInStock', label: 'Stock'},
//         { path: 'dailyRentalRate', label: 'Rate'},
//         { 
//             key: 'like',
//             content: movie => (
//                 <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//             )
//         },
//         {   
//             key: 'delete', 
//             content: movie => (
//                 <button
//                     onClick={() => this.props.onDelete(movie)}
//                     className = "btn btn-danger btn-sm"
//                 >
//                     Delete
//                 </button>
//             )
//         }
//     ]

//     render() { 
//         const { movies, onSort, sortColumn } = this.props;
    
//         return ( 
//             <Table 
//                 columns={this.columns}
//                 data={movies}
//                 sortColumn={sortColumn}
//                 onSort={onSort}
//             />
//          );
//     }
// }
 
export default MoviesTable;