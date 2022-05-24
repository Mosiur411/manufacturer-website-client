import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    if(user){
        const name =user.displayName;
        const email =user.email;
        const image =user.photoURL;
        const uid =user.uid;
        const MyProfile={name,email,image,uid}
       
    }
    return (
        <div>
            <h1>myProfile</h1>
        </div>
    );
};

export default MyProfile;