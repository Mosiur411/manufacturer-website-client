import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [Admin, setAdmin] = useState([])
    const [AddAdmin, setAddAdmin] = useState(null)
    useEffect(() => {
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/email`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
                setAddAdmin(true)
            })
    }, [AddAdmin, Admin])
    const AddAmin = (id) => {
        const email = id;
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/email/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Admin Add SuccessFully")
                    setAddAdmin(true)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>COUNT </th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Admin?.map((ad, index) => <tr key={ad._id}>
                                <th>{index + 1}</th>
                                <td className='font-bold'>{ad.email}</td>
                                <td onClick={() => AddAmin(ad.email)}>{
                                    ad?.Admin === 'role' ? <span className='text-fuchsia-600 font-bold'>Admin</span> : <button className="btn btn-outline btn-secondary">Make Admin</button>
                                }
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