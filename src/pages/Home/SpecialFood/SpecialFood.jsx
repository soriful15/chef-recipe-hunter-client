import React from 'react';
import specialRecipe1 from '../../../assets/special recipe img/grilledyogurtchicken-800x475.png'
import specialRecipe2 from '../../../assets/special recipe img/fishyogurtsauce.jpg'
import specialRecipe3 from '../../../assets/special recipe img/shahi_rezala.jpg'
import specialRecipe4 from '../../../assets/special recipe img/korma-1024x810.jpg'
import specialRecipe5 from '../../../assets/special recipe img/vindaloo.jpg'
import specialRecipe6 from '../../../assets/special recipe img/BhunaKhichuri-800x475.png'

import Rating from 'react-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaStar, FaRegStar } from 'react-icons/fa';
const SpecialFood = () => {
    return (
        <>


            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-4 mx-auto container mt-10'>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><LazyLoadImage src={specialRecipe1} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                            Yogurt and Cilantro marinated grilled chicken
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>This is a great family favorite. Loved by both my wife and me. In fact, the recipe credit goes to her for having been able to replicate the recipe and taste that had become on of your go to orders and good tandoori restaurants. And this is an easy one to do too</p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (4.1 / 5)</div>
                        </div>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><LazyLoadImage src={specialRecipe2} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                            Baked fish in a light yogurt sauce
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>Ingredients 3 tbsp oil 2 tbsp unsalted cold butter or ghee 1 large onion, sliced thinly 2 pounds fish, large pieces, preferably a white fish 2 cups yogurt, Greek or Bangladeshi preferred. 2 tbsp lemon juice 1 tsp sugar 2 tsp of salt Coarsely ground black pepper for taste 2 tsp ground cumin 2 tbsp ground coriander ¼ teaspoon garam masala 1/2 to 1 tspto do too</p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating
                                    placeholderRating={4}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (4.5 / 5)</div>
                        </div>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><LazyLoadImage src={specialRecipe3} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                            Shahi Rezala
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>  As the name implies, this classical Bengladeshi meat dish uses whole spices instead of pastes and powders. There are two steps to this and one may stop at the first step – which is cooking the it over a stove. A secondary step is to continue to cook in the ‘dum’ style, which may take </p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating

                                    placeholderRating={5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (5 / 5)</div>
                        </div>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
               <figure><LazyLoadImage src={specialRecipe4} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                            Fish Korma
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>
                            This is a light yet wonderfully fragrant fish recipe. Korma has its roots in the Mughal cuisine of the Indian subcontinent. It is a characteristic Persian-Indian dish which can be traced back to the 16th century Classically, a korma is defined as a dish where meat or vegetables are braised with water, stock, yogurt</p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (4.1 / 5)</div>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><LazyLoadImage src={specialRecipe5} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                        Beef Vindaloo
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>
                        Vindaloo is traditionally an Indian dish that derived from the Portuguese dish “Carne de Vinha d’ Alhos”, a dish of meat, usually lamb, with wine and garlic. The “Carne de Vinha d’ Alhos” was first brought to Goa by the Portuguese and became a Goan meal often served during special occasions</p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating
                                    placeholderRating={4}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (4.1 / 5)</div>
                        </div>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><LazyLoadImage src={specialRecipe6} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 ">
                        Bhuna Khichuri – basic
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className=' font-bold text-green-700'>
                        Bhuna Khichuri – basicis traditionally an Indian dish that derived from the Portuguese dish “Carne de Vinha d’ Alhos”, a dish of meat, usually lamb, with wine and garlic. The “Carne de Vinha d’ Alhos” was first brought to Goa by the Portuguese and became a Goan meal often served during special occasions</p>
                        <div className="card-actions items-center text-center border-2 border-orange-400 px-3 py-3">
                            <div className="">

                                <Rating
                                    placeholderRating={4}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />

                            </div>
                            <div className="flex-1"> Average Rating: (4.1 / 5)</div>
                        </div>
                    </div>
                </div>




            </div>



           


        </>
    );
};

export default SpecialFood;