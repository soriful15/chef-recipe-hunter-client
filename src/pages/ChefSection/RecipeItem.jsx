import React, { useState } from 'react';


import { HiHeart } from "react-icons/hi";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {  toast } from 'react-toastify';
const RecipeItem = ({ recipeItem }) => {

const [favorite,setFavorite]=useState(false)

const handleAddFavorite=()=>{
setFavorite(true)
toast("Add To Favorite");
}

    // console.log(recipeItem)
    const { Ingredients, rating, recipe, recipeImage, Cooking_method } = recipeItem
    return (
        <>


            <div className="card w-96 bg-base-100 shadow-xl relative px-2">
                <figure><img src={recipeImage} className='h-72' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-500">{recipe}</h2>
                    <div>
                        <h1 className='text-xl font-bold text-blue-800'>Cooking method:</h1>
                        {
                            Cooking_method.map((cook, index) =>

                                <li key={index} className='font-medium'>{cook}</li>)
                        }
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-lime-800'>Ingredients:</h1>
                        <p className='font-medium'>{Ingredients}</p>
                    </div>


                    <div className='flex items-center mt-3'>
                        <Rating style={{ maxWidth: 150 }} value={Math.round(rating) || 0} readOnly /><span className='ms-2'> {rating}</span>
                    </div>
                    <div className='absolute top-0 left-0 px-2'>
                        <button className="btn btn-success" onClick={handleAddFavorite} disabled={favorite}> <HiHeart></HiHeart> Add To Favorite</button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default RecipeItem;