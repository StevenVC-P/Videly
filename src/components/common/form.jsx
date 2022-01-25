import React from 'react';
import Joi from 'joi-browser';
import Input from './input';

const Form = ({inputList, data, setData, errors, setErrors, schema, doSubmit, label}) => {

    const validate = () => {
        const options = { abortEarly:false }
        const {error} = Joi.validate(data, schema, options);
        if (!error) return null;
        console.log("errors", data)
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message
        return errors;
    }

    const validateProperty = ({name, value}) => {
        const obj = { [name]: value };
        const {error} = Joi.validate(value, schema[name]);
        console.log(obj)
        console.log({error})
        return error ? error.details[0].message : null;
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const errors = validate();
        console.log(errors)
        setErrors({errors: errors || {} });
        if (errors) return;
        doSubmit()
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        const errorMessage = validateProperty(event.target);
        console.log(errorMessage)
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
            }
            <button disabled={validate()} className="btn btn-primary"> 
                {label}
            </button>  
        </form>
    )
}


// class Form extends Component {
//     state = {
//         data: {},
//         errors: {},
//     } 

//     validate = () => {
//         const options = { abortEarly:false }
//         const {error} = Joi.validate(this.state.data, this.schema, options);
//         if (!error) return null;

//         const errors = {};
//         for (let item of error.details)
//             errors[item.path[0]] = item.message
//         return errors;
//     }

//     validateProperty = ({name, value}) => {
//         const obj = { [name]: value };
//         const schema = { [name]: this.schema[name]};
//         const {error} = Joi.validate(obj, schema);
//         return error ? error.details[0].message : null;
//     }

//     handleSubmit = e => {
//         e.preventDefault();
        
//         const errors = this.validate();
//         console.log(errors)
//         this.setState({errors: errors || {} });
//         if (errors) return;

//         this.doSubmit()
//     };

    // handleChange = ({currentTarget: input }) => {
    //     const errors = {...this.state.errors}
    //     const errorMessage = this.validateProperty(input);
    //     if (errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     const data = {...this.state.data}
    //     data[input.name] = input.value;
    //     this.setState({data, errors});
    // };

//     renderButton(label){
//         return <button disabled={this.validate()}className="btn btn-primary"> 
//             {label}
//         </button>
//     };

//     renderSelect(name, label, options) {
//         const { data, errors } = this.state;

//         return (
//             <Select 
//             name= {name}
//             value={data[name]}
//             label= {label}
//             options = {options}
//             onChange={this.handleChange}
//             error={errors[name]}
//             />
//         )
//     }

//     renderInput(name, label, type = "text") {
//         const { data, errors } = this.state;

//         return (
//             <Input 
//             type={type}
//             name= {name}
//             value={data[name]}
//             label= {label}
//             onChange={this.handleChange}
//             error={errors[name]}
//             />
//         )
//     }
// }
 
export default Form;
