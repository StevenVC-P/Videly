import React from 'react';
import { useParams } from 'react-router-dom';

const MovieForm = () => {
    let { id } = useParams();
    return <h1>Movie Form {id}</h1>;
}
 
export default MovieForm;