import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';
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
                                <li>
                                    <NavLink to='/about' title=' About Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    {user && <NavLink title='profile Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                        <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                    </NavLink>}
                                </li>

                            </ul>




                        </div>

                        <div className='hidden sm:hidden md:hidden lg:block'>
                            {user ?
                                <button title='Star Applying LogOut' onClick={handleLogOut} className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                    LogOut
                                </button>
                                : <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                    <button title='Star Applying Link' className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                        Login
                                    </button>
                                </NavLink>}
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
                                                    <li>
                                                        <Link to='/about' className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>About</Link>
                                                    </li>
                                                    <li>
                                        { user && <Link className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '> <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Link>}
                                                    </li>
                                                </ul>

                                            </nav>


                                            <div className='mt-4'>

                                                {user ?
                                                    <button onClick={handleLogOut} title='Star Applying LogOut' className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                                        LogOut
                                                    </button>
                                                    : <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                                        <button title='Star Applying Link' className={`bg-violet-800 text-white text-xl px-4 py-4 ${({ isActive }) => isActive ? "text-blue-600" : ''}`}>
                                                            Login
                                                        </button>
                                                    </NavLink>}
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