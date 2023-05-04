import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <>

            <div className="card mx-auto card-side bg-base-100 mt-24 shadow-xl w-[50%]">
                <figure><img src={user && user.photoURL} className='w-96 h-full' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-500">Name: {user && user.displayName}</h2>
                    <p className='  text-indigo-900'>{user && user.displayName} was an Bangladeshi chef and television personality who introduced Bangladeshi cuisine to the Bangladeshi public. She authored several cookbooks and hosted the television show The Bangladeshi Chef which aired from 1990 to 2022 Running.</p>
                   <p className='text-xl font-bold text-lime-800'>Email: {user && user.email}</p>
                </div>
            </div>

        </>
    );
};

export default UpdateProfile;