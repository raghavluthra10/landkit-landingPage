import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ name, setName ] = useState('');


    return (
        <div className='login'>
            <h1>
                Contact Us
            </h1>

            <form>
                <label> Name: </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label> Email Id: </label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label> Phone no.: </label>
                <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label> Address: </label>
                <textarea type='text' value={address} onChange={(e) => setAddress(e.target.value)} />

                <Button variant='outlined'> Submit </Button>
            </form>
        </div>
    )
}

export default Login
