import React from 'react';
import { useParams } from 'react-router-dom';

const GetParams = () => {
    let {id} = useParams();
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
}
 
export default GetParams;