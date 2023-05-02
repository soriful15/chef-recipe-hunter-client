import React from 'react';
import SpecialFood from '../SpecialFood/SpecialFood';

const Home = () => {
    return (
        <div>
            <section>
                <h1 className='text-5xl font-bold text-cyan-700 text-center mt-10'>Special Food</h1>
                <SpecialFood></SpecialFood>
            </section>
        </div>
    );
};

export default Home;