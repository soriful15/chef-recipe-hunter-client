import React from 'react';
import { FaStarOfDavid} from 'react-icons/fa';
const CustomarSays = () => {
    return (
        <>
            <h1 className='mx-auto container text-3xl mt-20'>What Customer Are Saying</h1>

            <div className='mx-auto container mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>

                <div className="card w-96 bg-white border-2 border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <FaStarOfDavid className='text-green-600 text-5xl'></FaStarOfDavid>
                            <div>
                                <h2 className="card-title">Md Nasim Hosen</h2>
                                <p>4 out of 5 stars</p>
                            </div>
                        </div>
                        <p>DELICIOUS BREAKFAST! We ordered the eggs mulligan, corn beef hash, and the California Focaccia. All were absolutely delicious. Maddy, our server, was super attentive, on top of it and funny. She made the experience perfect. She brought out the food all at the same time and brought us anything we asked for. Would definitely come back to this place</p>
                       
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl g-white border-2 border-zinc-100">
                    <div className="card-body">
                        <div className='flex gap-3'>
                        <FaStarOfDavid className='text-green-600 text-5xl'></FaStarOfDavid>
                            <div>
                                <h2 className="card-title">Md Kamrul Hosen</h2>
                                <p>5 out of 5 stars</p>
                            </div>
                        </div>
                        <p>I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!</p>
                        
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl g-white border-2 border-zinc-100">
                    <div className="card-body">
                        <div className='flex gap-3'>
                        <FaStarOfDavid className='text-green-600 text-5xl'></FaStarOfDavid>
                            <div>
                                <h2 className="card-title">Md Rubel Hosen</h2>
                                <p>3 out of 5 stars</p>
                            </div>
                        </div>
                        <p>Breakfast was delicious. Like a good homestyle country savory breakfast (and Im from the south, thats saying a lot)… Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape.</p>
                        
                    </div>
                </div>

            </div>

        </>
    );
};

export default CustomarSays;