import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [Admin, setAdmin] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/email`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])
    const AddAmin = (id) => {
        const email = id;
        fetch(`http://localhost:5000/email/admin/${email}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>COUNT </th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Admin.map((ad, index) => <tr key={ad._id}>
                                <th>{index + 1}</th>
                                <td className='font-bold'>{ad.email}</td>
                                <td onClick={() => AddAmin(ad.email)}><button class="btn btn-outline btn-secondary">Make Admin</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;