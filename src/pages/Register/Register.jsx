import React, { useContext, useState } from 'react';
import register from '../../assets/38435-register.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const password = form.password.value
        const email = form.email.value
        const photo = form.photo.value
        // console.log(name, photo, email, password)
        createUser(email, password)
            .then((result) => {
                const createdUser = result.user
                form.reset()
                console.log(createdUser)
            })
            .catch((error) => {
                console.log(error.message)
            })


    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className=''>
                            <div className='w-96'>
                                <Lottie animationData={register} loop={true} />
                            </div>
                        </div>
                    </div>
                    <div onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter your Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-center'>AlReady have an Account? <Link to='/login'><span className='text-green-500'>login</span></Link></p>
                        </form >
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;