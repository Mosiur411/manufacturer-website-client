import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../../../shared/Spinner';
import auth from '../../../../firebase.init';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Spinner></Spinner>
    }
    const Review = event => {
        event.preventDefault()
        const text = event.target.TextReview.value;
        const image =user?.photoURL;
        const Review={text,image}
        if (text) {
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
                },
                body: JSON.stringify(Review),
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        toast.success('AddReview SuccessFully')
                        event.target.reset()
                    }
                })
        
    }

}
return (
    <div className='px-10'>
        <h1 className='text-center text-3xl font-bold '>Add Review</h1>
        <div className='flex justify-center items-center h-[50vh]'>
            <div className='text-center'>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <p><img src={user?.photoURL} alt='Images' /></p>
                    </div>
                </div>
                <form onSubmit={Review}>
                    <div className='mt-[-50px]'>
                        <textarea className='border-2 outline-none rounded-lg shadow p-1 ' name="TextReview" id="" cols="47" rows="5" required></textarea>
                    </div>
                    <div className='text-left'>
                        <input type='submit' value='Add Review' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default AddReview;