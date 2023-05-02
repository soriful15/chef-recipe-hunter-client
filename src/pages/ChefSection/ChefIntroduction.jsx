import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefIntroduction = ({ categoryData }) => {
    console.log(categoryData)
    const { id, chefName, chefPicture, YearOfexperiences, numberOfRecipes, like, } = categoryData
    return (
        <>
            <div >


                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><LazyLoadImage src={chefPicture} className='w-72 h-full' alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title w-full text-blue-700">{chefName}</h2>
                        <p className='text-green-600'>Experience: {YearOfexperiences}</p>
                        <p><span className='text-indigo-800'>Total Likes: </span><span className='text-yellow-600'>{like}</span></p>
                        <p>
                            <span className='text-indigo-800 font-bold mb-3'>Number Of Recipe:</span>
                            
                            {numberOfRecipes.map((recipes,index )=>
                      <li key={index} className='mb-3'>{recipes.recipe}</li>  )}</p>
                      
                        <div className="card-actions justify-end">
                         <Link to={`/chefCategories/${categoryData.id}`}><button className="btn btn-outline btn-accent"><FaEye className=''></FaEye></button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ChefIntroduction;