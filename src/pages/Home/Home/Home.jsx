import React from 'react';
import SpecialFood from '../SpecialFood/SpecialFood';
import BakedRecipes from '../BakedRecipes/BakedRecipes';

const Home = () => {
    return (
        <div>
            <section className='1'>
                <h1 className='text-5xl font-bold text-cyan-700 text-center mt-10'>Special Food</h1>
                <SpecialFood></SpecialFood>
            </section>

            <section className='2'>
            <h1 className='text-5xl font-bold text-cyan-700 text-center mt-10'>  Baked Recipes</h1>
           <BakedRecipes></BakedRecipes>
            </section>
        </div>
    );
};

export default Home;