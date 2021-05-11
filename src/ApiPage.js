import React, { useEffect, useState } from 'react';
import './ApiPage.css';

const ApiPage = () => {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
            setUsers(res.data)
        })
    }, [])

    console.log(users);

    return (
        <div className='apiPage'>
            {users.map((user) => (
                <div className='apiPage__container'>
                    <img 
                    src={user.avatar}
                    alt=''
                    />

                    <div>
                        <span>
                            {user.first_name}
                        </span>

                        <span>
                            {user.email}
                        </span>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default ApiPage
