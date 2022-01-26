import React, {useState, useEffect} from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie,saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { useParams, useNavigate } from 'react-router-dom';

const MovieForm = () => {
    const [data, setData] = useState ({_id: "", title: "", genreId:"", genreName: "", numberInStock: "", dailyRentalRate: ""})
    const [genres, setGenres] = useState([])
    const [errors, setErrors] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    const schema = {
        _id: Joi.string()
            .optional(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .optional(),
        genreName: Joi.string()
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
            {name:"genreName", label: "Genre", value: data.genreName},
            {name:"numberInStock", label:"Stock", value: data.numberInStock},
            {name:"dailyRentalRate", label:"RentalRate", value: data.dailyRentalRate}
        ]
        
        const selectList = [
            {name: "genreId", label: "Genre", options: genres}
        ]

        useEffect (() => {
            const genres = getGenres();
            setGenres(genres)
            if (id === "new") return;
            const movie = getMovie(id)
            if (!movie) return ("/notfound")
            
            setData(data => (mapToViewModel(movie)))
        }, [id])
        
        const mapToViewModel = (movie) => {
            // console.log(movie.genre)
            return {
            _id:movie._id,
            title: movie.title,
            genreId:movie.genre._id,
            genreName: movie.genre.name,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }
    
    const doSubmit = () => {
        // console.log("Submitted")
        // console.log(data)
        saveMovie(data);
        navigate("/movies")
    }
    
    return (
        <div>
            <h1>Movie Form</h1>
            <Form 
            inputList={inputList}
            selectList={selectList}
            data ={data}
            setData={setData}
            genres={genres}
            setGenres={setGenres}
            errors={errors}
            setErrors={setErrors}
            schema={schema}
            doSubmit={doSubmit}
            label="Save"/>
        </div>
    )
    
}
 
export default MovieForm;