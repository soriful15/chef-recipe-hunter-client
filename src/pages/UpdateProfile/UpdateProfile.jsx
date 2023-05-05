import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <>

            {/*   <div className="card mx-auto card-side bg-base-100 mt-24 shadow-xl lg:w-[50%] px-2">
                <figure><img src={user && user.photoURL} className='w-72 md:w-96 h-full' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-500">Name: {user && user.displayName}</h2>
                    <p className='  text-indigo-900'>{user && user.displayName} was an Bangladeshi chef and television personality who introduced Bangladeshi cuisine to the Bangladeshi public. She authored several cookbooks and hosted the television show The Bangladeshi Chef which aired from 1990 to 2022 Running.</p>
                    <p className='text-xl font-bold text-lime-800'>Email: {user && user.email}</p>
                </div>
            </div> */}


            <div className='mx-auto mt-10 max-w-4xl'>

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={user && user.photoURL} alt="Shoes" className="rounded-2xl w-56 h-56 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-blue-500">Name: {user && user.displayName}</h2>
                        <p className='text-indigo-900'>{user && user.displayName} was an Bangladeshi chef and television personality who introduced Bangladeshi cuisine to the Bangladeshi public. She authored several cookbooks and hosted the television show The Bangladeshi Chef which aired from 1990 to 2022 Running</p>
                        <p className='text-xl font-bold text-lime-800 w-full'>Email:{user && user.email}</p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default UpdateProfile;