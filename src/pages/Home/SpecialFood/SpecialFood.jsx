import React from 'react';
import specialRecipe1 from '../../../assets/special recipe img/grilledyogurtchicken-800x475.png'
import specialRecipe2 from '../../../assets/special recipe img/fishyogurtsauce.jpg'
import specialRecipe3 from '../../../assets/special recipe img/shahi_rezala.jpg'
import specialRecipe4 from '../../../assets/special recipe img/korma-1024x810.jpg'
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
const SpecialFood = () => {
    return (
        <>

            <div className="carousel w-full mx-auto container mt-16">
                <div id="slide1" className="carousel-item relative w-full ">
                    
                        <img src={specialRecipe1} className="w-full h-[80%]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>

                        </div>
                    
                    <div>
                        <h1 className='text-3xl text-blue-600 font-bold ml-6 mt-12'> Yogurt and Cilantro marinated grilled chicken</h1>

                        <div className='border-2 border-orange-400 px-4 py-4 flex align-items-center ml-6 mt-5 w-[50%] '>
                            <div>
                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                            </div>
                            <div className='ml-7 font-bold text-violet-500'>
                                Average Rating: (4.1 / 5)
                            </div>

                        </div>
                        <div className='text-xl font-bold text-green-700 px-4 py-9'>
                            <p>This is a great family favorite. Loved by both my wife and me. In fact, the recipe credit goes to her for having been able to replicate the recipe and taste that had become on of your go to orders and good tandoori restaurants. And this is an easy one to do too</p>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={specialRecipe2} className="w-full h-[80%]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                    <div>
                        <h1 className='text-3xl text-blue-600 font-bold ml-6 mt-12'> Baked fish in a light yogurt sauce</h1>

                        <div className='border-2 border-orange-400 px-4 py-4 flex align-items-center ml-6 mt-5 w-[50%] '>
                            <div>
                                <Rating
                                    placeholderRating={4}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                            </div>
                            <div className='ml-7 font-bold text-violet-500'>
                                Average Rating: (4.5 / 5)
                            </div>

                        </div>
                        <div className='text-xl font-bold text-green-700 px-4 py-9'>
                            <p>Ingredients 3 tbsp oil 2 tbsp unsalted cold butter or ghee 1 large onion, sliced thinly 2 pounds fish, large pieces, preferably a white fish 2 cups yogurt, Greek or Bangladeshi preferred. 2 tbsp lemon juice 1 tsp sugar 2 tsp of salt Coarsely ground black pepper for taste 2 tsp ground cumin 2 tbsp ground coriander ¼ teaspoon garam masala 1/2 to 1 tsp </p>
                        </div>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={specialRecipe3} className="w-[50%] h-[80%]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                    <div>
                        <h1 className='text-3xl text-blue-600 font-bold ml-6 mt-12'> Shahi Rezala</h1>

                        <div className='border-2 border-orange-400 px-4 py-4 flex align-items-center ml-6 mt-5 w-[50%] '>
                            <div>
                                <Rating
                                    placeholderRating={5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                            </div>
                            <div className='ml-7 font-bold text-violet-500'>
                                Average Rating: (5 / 5)
                            </div>

                        </div>
                        <div className='text-xl font-bold text-green-700 px-4 py-9'>
                            <p>(Leave a review)
                                As the name implies, this classical Bengladeshi meat dish uses whole spices instead of pastes and powders. There are two steps to this and one may stop at the first step – which is cooking the it over a stove. A secondary step is to continue to cook in the ‘dum’ style, which may take  </p>
                        </div>
                    </div>

                </div>
                {/*   <div id="slide4" className="carousel-item relative w-full">
                    <img src={specialRecipe4} className="w-[] h-[80%]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div> */}

            </div>


        </>
    );
};

export default SpecialFood;