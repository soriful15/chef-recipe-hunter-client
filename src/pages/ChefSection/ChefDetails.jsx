import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLoaderData } from 'react-router-dom';
import RecipeItem from './RecipeItem';


const ChefDetails = () => {
    const chefDetailsData = useLoaderData()
    console.log(chefDetailsData)
    const { chefName, chefPicture, YearOfexperiences, numberOfRecipes, like, Description,

    } = chefDetailsData
    return (
        <>
            <div className='mx-auto container mt-10'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><LazyLoadImage src={chefPicture} className='w-full' alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-700">Name:{chefName}</h2>
                        <p className='text-green-800'>About:{Description}</p>
                        <p>
                            <span className='text-indigo-800 font-bold mt-0 mb-0'>Recipe:</span>
                            {numberOfRecipes.map((recipes, index) =>
                                <li key={index} className=''>{recipes.recipe}</li>)}
                        </p>
                        <p><span className='text-indigo-800 mt-0 mb-0'>Total Likes: </span><span className='text-yellow-600'>{like}</span></p>
                        <p className='text-green-600 mt-0 mb-0'>Experience: {YearOfexperiences}</p>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto container mt-6 gap-5'>
                {

                    numberOfRecipes.map((recipeItem, index) => <RecipeItem
                        key={index}
                        recipeItem={recipeItem}
                    >   </RecipeItem>)
                }
            </div>

        </>
    );
};

export default ChefDetails;