import React, { Component, useState } from 'react';

const Form = props => {
    const [state, setState] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
        confirmPassword: " ",
    })
    const onChange = e => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();

    }
    return(
		<>
        <div className="App">
		<form onSubmit ={onSubmit}>
                {state.firstName === ""
                    ? ""
                    :state.firstName.length<2? <b class="text-danger">First Name should be at least 2 characters.</b>: "" 
                }
                <br /><label>First Name:</label><br />
                <input type="text" name="firstName" onChange={onChange}/>
                <br />
                {state.lastName === ""
                    ? ""
                    : state.lastName.length<2 ? <b class="text-danger">Last Name should be at least 2 characters.</b>: "" 
                }
                <br /><label>Last Name:</label><br />
                <input type="text" name="lastName" onChange={onChange}/>
                <br />
                {state.email === ""
                    ? ""
                    : state.email.length<5 ? <b class="text-danger">Email should be at least 5 characters.</b>: "" 
                }
                <br /><label>Email:</label><br />
                <input type="email" name="email" onChange={onChange}/>
                <br />
                {state.password === ""
                    ? ""
                    : state.password.length<8 ? <b class="text-danger">Password should be at least 8 characters.</b>: "" 
                }
                <br /><label>Password:</label><br />
                <input type="password" name="password" onChange={onChange}/>
                <br />
                {state.confirmPassword === ""
                    ? ""
                    : state.confirmPassword !== state.password ? <b class="text-danger">Confirm password should match password.</b>: "" 
                }
                <br /><label>Confirm Password:</label><br />
                <input type="password" name="confirmPassword" onChange={onChange}/>
                <br />
            </form>
		</div>	
		<div className="Data">
			<h2>Your Form Data:</h2>
            <p>First Name: {state.firstName}</p>
            
            <p>Last Name: {state.lastName}</p>
            
            <p>Email: {state.email}</p>
           
            <p>Password: {state.password}</p>
            
            <p>Confirm Password: {state.confirmPassword}</p>
         
		</div>
        </>
    )
}

export default Form;
