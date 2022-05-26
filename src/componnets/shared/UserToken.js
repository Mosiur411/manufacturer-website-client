import React,{useEffect, useState } from 'react';

const UserToken = user => {
    const [Token,setToken]=useState('')
    useEffect(() => {
        if (user) {
            const email = user?.user?.email;
            console.log(email)
            const userEmail = { email: email }
            fetch(`https://vast-ridge-73699.herokuapp.com/email/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userEmail),
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('AssesToken', `${data.Token}`)
                    setToken(data.Token)

                })
        }
    }, [user])
    return [Token]
};

export default UserToken;