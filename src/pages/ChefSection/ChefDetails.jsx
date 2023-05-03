import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';



const ChefDetails = () => {

    const navigation = useNavigation()
    console.log(navigation.state)

    if (navigation.state === 'loading') {
        return <LoaderSpinner></LoaderSpinner>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const chefDetailsData = useLoaderData()
    console.log(chefDetailsData)
    const { chefName, chefPicture, YearOfexperiences, numberOfRecipes, like, Description,

    } = chefDetailsData
    return (
        <>
            <div className='mx-auto container mt-10 '>
                <div className=" bg-base-100 shadow-xl lg:flex lg:gap-5 px-5 py-5">
                    <figure><LazyLoadImage src={chefPicture} className='w-full' alt="Movie" /></figure>
                    <div className="mt-5">
                        <h2 className=" text-blue-700 mt-2">Name:{chefName}</h2>
                        <p className='text-green-800 mt-2'>About:{Description}</p>
                        <p>
                            <span className='text-indigo-800 font-bold  mt-2'>Recipe:</span>
                            {numberOfRecipes.map((recipes, index) =>
                                <li key={index} className=''>{recipes.recipe}</li>)}
                        </p>
                        <p className='mt-2'><span className='text-indigo-800 mt-0 mb-0'>Total Likes: </span><span className='text-yellow-600'>{like}</span></p>
                        <p className='text-green-600 mt-2'>Experience: {YearOfexperiences}</p>
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