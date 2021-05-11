import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    console.log(email, password)

    return (
        <div className='login'>
            <h1>
                Login
            </h1>

            <form>
                <label> Email Id: </label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label> Password: </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button variant='outlined'> Login </Button>
            </form>
        </div>
    )
}

export default Login
