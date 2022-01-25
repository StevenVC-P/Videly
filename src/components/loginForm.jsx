import React, {useState} from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

const LoginForm = () => {
    const [data, setData] = useState ({username: "", password: ""})
    const [errors, setErrors] = useState({})

    const schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    }
    
    const inputList = [
        {name:"username", label: "Username", value: data.username},
        {name:"password", label: "Password", value: data.password, type:"password"},
    ]
    
    const doSubmit = () => {
        console.log("Submitted")
    }
    
    return (
        <div>
            <h1>Login</h1>
            <Form 
            inputList={inputList}
            data ={data}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
            schema={schema}
            doSubmit={doSubmit}
            label="Login"/>
        </div>
    )
}
 
export default LoginForm;