import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
    // console.log('login props', props);
    const [creds, setCreds] = useState({username: "", password: ""});
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push("/friends");
            })
            .catch(error => console.log(error.response));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={creds.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="password"
                placeholder="password"
                value={creds.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;