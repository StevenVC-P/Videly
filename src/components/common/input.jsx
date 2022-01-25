import React from 'react';

const Input = ({name, label, value, type, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                id = {name} 
                name = {name}
                label = {label}
                value = {value}
                type = {type}
                error = {error}
                className="form-control" 
            />
        </div>
    );
}

export default Input
{/* {error && <div className="alert alert-danger">{error}</div>} */}