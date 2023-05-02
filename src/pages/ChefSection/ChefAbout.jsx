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
            {
                // eslint-disable-next-line react/jsx-key
                ChefCategoryData.map(categoryData=> <ChefIntroduction
                key={categoryData.id}
                categoryData={categoryData}
                
                ></ChefIntroduction>)
            }
        </>
    );
};

export default ChefAbout;