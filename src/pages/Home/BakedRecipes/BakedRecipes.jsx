import React from 'react';
import breakfast from '../../../assets/BakedRecipes/breakfast.jpg'
import lunchFood from '../../../assets/BakedRecipes/lunchfood.jpg'
import DinnerFood from '../../../assets/BakedRecipes/dinnerFood.jpg'


const BakedRecipes = () => {
    return (
        <div className='grid lg:grid-cols-3  md:grid-cols-2   mx-auto container gap-5 mt-8 '>
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={breakfast} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Breakfast Food</h2>
                   
                    <div className="card-actions">
                        <button className="btn btn-primary">17 Recipes</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={lunchFood} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Lunch Food</h2>
                   
                    <div className="card-actions">
                        <button className="btn btn-primary  mt-4">36 Recipes</button>
                    </div>
                </div>
            </div>
         
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={DinnerFood} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dinner Food</h2>
                   
                    <div className="card-actions">
                        <button className="btn btn-primary mt-2">40 Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BakedRecipes;