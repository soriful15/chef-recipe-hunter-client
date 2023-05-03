import React from 'react';
import SpecialFood from '../SpecialFood/SpecialFood';
import BakedRecipes from '../BakedRecipes/BakedRecipes';
import Banner from '../Banner/Banner';
import ChefAbout from '../../ChefSection/ChefAbout';
/* import { useNavigation } from 'react-router-dom';
import LoaderSpinner from '../../../LoaderSpinner/LoaderSpinner'; */

const Home = () => {

/* const navigation=useNavigation()
console.log(navigation.state)

if (navigation.state === 'loading') {
    return <LoaderSpinner/>
  } */
    return (
        <div>

            <section>

                <Banner></Banner>
            </section>
            <section className='1'>
                <h1 className='text-5xl font-bold text-cyan-700 text-center mt-10'>Special Food</h1>
                <p className='text-center mt-2'>Check and find the best quality food, we always try to do best service</p>
                <SpecialFood></SpecialFood>
            </section>

            <section className='2'>
                <h1 className='text-5xl font-bold text-cyan-700 text-center mt-16'>  Baked Recipes</h1>
                <BakedRecipes></BakedRecipes>
            </section>

<section>
   <ChefAbout></ChefAbout>
</section>

        </div>
    );
};

export default Home;