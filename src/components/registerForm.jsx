import React, {useState} from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

const RegisterForm = () => {
    const [data, setData] = useState ({username: "", password: "", name: ""})
    const [errors, setErrors] = useState({})

    const schema = {
        username: Joi.string()
            .email()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    const inputList = [
        {name:"username", label: "Username", value: data.username},
        {name:"password", label: "Password", value: data.password, type:"password"},
        {name:"name", label:"Name", value: data.name}
    ]

    const doSubmit = () => {
        console.log("Submitted");
    }

    return (            
    <div>
        <h1>Register</h1>
        <Form 
        inputList={inputList}
        data ={data}
        setData={setData}
        errors={errors}
        setErrors={setErrors}
        schema={schema}
        doSubmit={doSubmit}
        label="Login"/>
    </div>);
    
}
 
export default RegisterForm;
