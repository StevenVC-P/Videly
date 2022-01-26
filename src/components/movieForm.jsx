import React, {useState} from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
// import { getMovie,saveMovie } from '../services/fakeMovieService';
// import { getGenres } from '../services/fakeGenreService';
// import { useParams, useNavigation } from 'react-router-dom';

// function withParams(Component) {
//     return props => <Component {...props} params={useParams()} />
// }

const MovieForm = () => {
    const [data, setData] = useState ({title: "", genreId: "", numberInStock: "", dailyRentalRate: ""})
    const [genres, setGenres] = useState([])
    const [errors, setErrors] = useState({})

    const schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    const inputList = [
        {name:"title", label: "Title", value: data.title},
        {name:"genreId", label: "Genre", value: data.genreId},
        {name:"numberInStock", label:"Stock", value: data.numberInStock},
        {name:"dailyRentalRate", label:"Rental Rate", value: data.dailyRentalRate}
    ]

// class MovieForm extends Form {
//     state = {
//         data: { 
//             title: '', 
//             genreId: '', 
//             numberInStock: '', 
//             dailyRentalRate: ''
//         },
//         genres: [],
//         errors: {}
//     } 



    // componentDidMount() { 
    //     const genres = getGenres();
    //     this.setState({genres})
        
    //     const movieId = this.props.params;
    //     if (movieId=== "new") return;

    //     const movie = getMovie(movieId);
    //     if (!movie) return ("/not-found")

    //     this.setState({data: this.mapToViewModel(movie) });
    // }

    // mapToViewModel(movie) {
    //     return {
    //         _id: movie._id,
    //         title: movie.title,
    //         genreId: movie.genre._id,
    //         numberInStock: movie.numberInStock,
    //         dailyRentalRate: movie.dailyRentalRate
    //     };
    // }

    const doSubmit = () => {
        console.log("Submitted")
        // saveMovie(this.state.data);
    }

    return (
        <div>
            <h1>Movie Form</h1>
            <Form 
            inputList={inputList}
            data ={data}
            setData={setData}
            genres={genres}
            setGenres={setGenres}
            errors={errors}
            setErrors={setErrors}
            schema={schema}
            doSubmit={doSubmit}
            label="Login"/>
        </div>
    )
    
}
 
export default MovieForm;