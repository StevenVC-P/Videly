import React, {useState} from 'react';
import Form from './common/form';

const LoginForm = () => {
    const [data, setData] = useState ({username: "", password: ""})
    
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
            <Form inputList={inputList} data ={data} setData={setData} doSubmit={doSubmit} label="Login"/>
        </div>
    )
}

// import Joi from 'joi-browser';
// const [errors, setErrors] = useState({})
// const schema = {
//     username: Joi.string()
//         .required()
//         .label("Username"),
//     password: Joi.string()
//         .required()
//         .label("Password")
// }

// class LoginForm extends Form {
//     state = {
    //         data: { username: '', password: ''},
//         errors: {}
//     } 

//     schema = {
//         username: Joi.string()
//             .required()
//             .label("Username"),
//         password: Joi.string()
//             .required()
//             .label("Password")
//     };

//     doSubmit = () => {
//         console.log("Submitted");
//     }

//     render () {
//         return(  
//             <div>
//                 <h1>Login</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     {this.renderInput('username', 'Username')}
//                     {this.renderInput('password', 'Password', 'password')}
//                     {this.renderButton('Login')}
//                 </form>
//             </div>
//         )
//     }
// }
 
export default LoginForm;