import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    return (
        <div>
            <h1>Movie Form {id}</h1>
            <button 
                className="btn btn-primary"
                onClick={() => navigate('/movies')}
            >
                Save
            </button>
        </div>
    );
}
 
export default MovieForm;