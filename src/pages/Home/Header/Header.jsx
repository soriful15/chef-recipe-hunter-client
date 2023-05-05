import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/solid'

import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)



    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }
    return (

        <>


            <section className='bg-sky-100 '>

                <div className='px-4 py-5 mx-auto md:max-w-full sm:max-w-xl lg:max-w-screen-xl lg:px-8 md:px-24 '>
                    <div className='second flex items-center justify-between relative'>
                        <div>
                            <Link to='/' >
                                <span className='ml-2 text-5xl font-bold  text-orange-500'>Welcome to </span> <br />  <span className='font-bold  ml-14 text-xl text-lime-600'>Recipe Community</span>
                            </Link>
                        </div>
                        <div>
                            <ul className='items-center space-x-8 hidden lg:flex'>

                                <li>
                                    <NavLink to='/' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/blog' title=' Blog Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                        Blog
                                    </NavLink>
                                </li>


                                {
                                    user ? <><div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img data-toggle="tooltip"
                                                    title={user.displayName} src={user && user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-orange-200 rounded-box w-52">
                                            <li>
                                                <Link to='/updateProfile' className="justify-between font-bold">
                                                    Profile

                                                </Link>
                                            </li>
                                            <li><Link to="/login" className='font-bold' onClick={handleLogOut}>Logout</Link></li>
                                        </ul>
                                    </div></> : <> <li>

                                        <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                            <button title='Star Applying Link' className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                                Login
                                            </button>
                                        </NavLink>
                                    </li></>

                                }






                            </ul>




                        </div>



                        <div className='lg:hidden'>


                            <button title='OpenMenu' onClick={() => setIsOpen(true)}>
                                <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />

                            </button>
                            {
                                isOpen && (
                                    <div className='absolute top-0 left-0 w-full z-40'>



                                        <div className='p-5 bg-white border
                                 rounded shadow-sm'>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <Link to='/'>

                                                        <span className='ml-2 text-5xl font-bold  text-orange-500'>Welcome to </span> <br />  <span className='font-bold  ml-14 text-xl text-lime-600'>Recipe Community</span>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <button title='closeOpen' onClick={() => setIsOpen(false)}>
                                                        <XCircleIcon className=" w-6 text-blue-500" />
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul className='space-y-4'>
                                                    <li>
                                                        <Link to="/" className='default'>Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/blog' className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>Blog</Link>
                                                    </li>
                                                </ul>

                                            </nav>




                                            <div className='mt-4'>

                                                {
                                                    user ? <><div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                            <div className="w-10 rounded-full">
                                                                <img data-toggle="tooltip"
                                                                    title={user.displayName} src={user && user.photoURL} />
                                                            </div>
                                                        </label>
                                  <ul tabIndex={0} className="mt-3  p-2 shadow menu menu-compact  bg-orange-200 rounded-box w-52">
                                                            <li>
                                                                <Link to='/updateProfile' className="justify-between font-bold">
                                                                    Profile

                                                                </Link>
                                                            </li>
                                                            <li><Link to="/login" className='font-bold' onClick={handleLogOut}>Logout</Link></li>
                                                        </ul>
                                                    </div></> : <>

                                                        <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                                            <button title='Star Applying Link' className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                                                Login
                                                            </button>
                                                        </NavLink>
                                                    </>

                                                }
                                            </div>

                                        </div>


                                    </div>
                                )
                            }

                        </div>
                    </div>



                </div>


            </section>



        </>

    );
};

export default Header;