import React from 'react';
import banner from '../../../assets/banner/Free-Food-Advertising-Banner-Template.jpg'
import LazyLoad from 'react-lazy-load';
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 px-8 gap-4 mt-10'>

            <div>
                <h1 className='text-5xl text-indigo-900 font-bold'>
                    Enjoy food all over the world

                </h1>
                <p className='font-bold text-xl text-amber-700 mt-4'>
                    A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a foodservice operation. A recipe may be simple to complex based on the requirements of the operation and the intended user. For example, an experienced chef may need a recipe with only a few details, while a beginner cook may need more information about ingredients, preparation steps, cooking times and temperatures, visual cues, and equipment requirements.
                </p>
                <button className="btn btn-active btn-primary mt-4">Hire Now</button>
            </div>

            <LazyLoad>

                <img src={banner} alt="" className='rounded-xl' />
            </LazyLoad>


        </div>
    );
};

export default Banner;