import React from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

const Form = ({inputList, selectList, data, setData, genres, setGenres, errors, setErrors, schema, doSubmit, label}) => {

    console.log(selectList)
    console.log(selectList[0].options)
    console.log(selectList[0].options.name)
    const validate = () => {
        const options = { abortEarly:false }
        const {error} = Joi.validate(data, schema, options);
        if (!error) return null;
        console.log(error)
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message
        return errors;
    }

    const validateProperty = ({name, value}) => {
        const {error} = Joi.validate(value, schema[name]);
        return error ? error.details[0].message : null;
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const errors = validate();
        setErrors({errors: errors || {} });
        if (errors) return;
        doSubmit()
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        const errorMessage = validateProperty(event.target);
        if (errorMessage) errors[name] = errorMessage;
        else delete errors[name];

        setErrors(({...errors,  errors}))
        setData(data => ({ ...data, [name]: value}));
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                inputList.map(({name, label, value, type="text"}) =>
                <Input
                    key={name}
                    name={name}
                    type={type}
                    value={value}
                    label={label}
                    error={errors[name]}
                    onChange={onChange}
                />
                )
            },
                        {
                selectList.map(({name, label, options, value, type="text"}) =>
                <Select
                    key={name}
                    name={name}
                    options={options}
                    value={value}
                    type={type}
                    label={label}
                    error={errors[name]}
                    onChange={onChange}
                />
                )
            }
            <button disabled={validate()} className="btn btn-primary"> 
                {label}
            </button>  
        </form>
    )
}
 
export default Form;
