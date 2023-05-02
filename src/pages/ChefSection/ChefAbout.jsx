import React, { useEffect, useState } from 'react';
import ChefIntroduction from './ChefIntroduction';

const ChefAbout = () => {

    const [ChefCategoryData, setChefCategoryData]=useState([])
    useEffect(()=>{
       fetch(`https://chef-recipe-hunter-server-soriful15.vercel.app/chefCategories`)
       .then(res => res.json())
       .then(data => setChefCategoryData(data))
    },[])

    return (
        
        <>
        <h1 className='text-center text-5xl mt-20'>Focus on Quality to Find the best Chef</h1>
        <p className='text-center mt-2'>Industry-Focused Tools You Need to Save Time, Stand Out, and Attract Top Chef</p>
        <div className='grid md:grid-cols-2 mt-10 gap-14  container mx-auto'>

            {
                // eslint-disable-next-line react/jsx-key
                ChefCategoryData.map(categoryData=> <ChefIntroduction
                key={categoryData.id}
                categoryData={categoryData}
                
                ></ChefIntroduction>)
            }
        </div>
        </>
    );
};

export default ChefAbout;