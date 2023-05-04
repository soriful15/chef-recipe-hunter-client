import React from 'react';
import Pdf from "react-to-pdf";




const Blog = () => {
    const ref = React.createRef();
    return (
        <>

            <div className='text-center mt-5 text-3xl text-violet-900 border-2 border-solid border-amber-600 mx-auto w-56 bg-amber-600 rounded-2xl'>
                <Pdf  targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <div className='mt-6 px-5 mx-auto' ref={ref}>



               {/*  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[60%] mx-auto" >
                    <div className="collapse-title text-xl font-medium">
                    1.Ques: Tell us the differences between uncontrolled and controlled components.?
                    </div>
                    <div className="collapse-content" ref={ref}>
                        <p> A controlled element is one that takes its current value in props and notifies changes via the onChange callback.  A parent component handling callbacks controls it by managing its own state and passing new values as props to the controlled component.  You can also call it dumb material.
                        <br />
                        An uncontrolled part is one that stores its own state internally and we ask ref to find its current value when needed.  It is a bit more like traditional HTML. sot that ,Unmanaged elements inform other elements about their changes and we can access the element simply by using ref-s</p>
                    </div>
                </div>




                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[60%] mx-auto" >
                    <div className="collapse-title text-xl font-medium">
                    2.Ques: How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content" ref={ref}>
                        <p>  We validate them by setting the propTypes property of the component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.</p>
                    </div>
                </div>





                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[60%] mx-auto" >
                    <div className="collapse-title text-xl font-medium">
                  3.Ques: Tell us the difference between nodejs and express js.?
                    </div>
                    <div className="collapse-content" ref={ref}>
                        <p>   Node.js itself provides an HTTP module, whose createServer method returns an object that we can use to respond to HTTP requests.  That object inherits from the http.Server prototype.
                        <br />
                        Express provides a createServer method that extends Connect is Server prototype.  So all of Connect iss functionality is here, plus a useful DSL for rendering and describing routes. so that.. Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications.</p>
                    </div>
                </div>






                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[60%] mx-auto" >
                    <div className="collapse-title text-xl font-medium">
                    4.Ques:What is a custom hook, and why will you create a custom hook ?
                    </div>
                    <div className="collapse-content" ref={ref}>
                        <p>  
                        React JS Custom hooks are reusable functions that a React JS. Developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem..</p>
                    </div>
                </div> */}






                 <div className='bg-yellow-100 py-4' >
                    <h1 className='text-4xl text-blue-800 font-bold text-center'>1.Ques: Tell us the differences between uncontrolled and controlled components.?</h1>
                    <p className='text-3xl text-center text-orange-700 mt-3 '>Ans: The differences between uncontrolled and controlled components</p>
                    <p className='text-2xl mt-2 text-center font-bold px-2 '>
                        A controlled element is one that takes its current value in props and notifies changes via the onChange callback.  A parent component handling callbacks controls it by managing its own state and passing new values as props to the controlled component.  You can also call it dumb material.
                        <br />
                        An uncontrolled part is one that stores its own state internally and we ask ref to find its current value when needed.  It is a bit more like traditional HTML. sot that ,Unmanaged elements inform other elements about their changes and we can access the element simply by using ref-s
                    </p>
                </div>


                <div className='bg-green-400 py-4 mt-5 px-3'>
                    <h1 className='text-4xl text-blue-800 font-bold text-center'>2.Ques: How to validate React props using PropTypes?</h1>
                    <p className='text-3xl text-center text-orange-700 mt-3'>Ans: validate React props using PropTypes</p>
                    <p className='text-2xl mt-2 text-center font-bold '>
                        We validate them by setting the propTypes property of the component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.

                    </p>
                </div>

                <div className='py-4 mt-5 px-3 bg-violet-200'>
                    <h1 className='text-4xl text-blue-800 font-bold text-center'>3.Ques: Tell us the difference between nodejs and express js.?</h1>
                    <p className='text-3xl text-center text-orange-700 mt-3'>Ans: The difference between nodejs and express js</p>
                    <p className='text-2xl mt-2 text-center font-bold '>
                        Node.js itself provides an HTTP module, whose createServer method returns an object that we can use to respond to HTTP requests.  That object inherits from the http.Server prototype.
                        <br />
                        Express provides a createServer method that extends Connect is Server prototype.  So all of Connect iss functionality is here, plus a useful DSL for rendering and describing routes. so that.. Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications.


                    </p>
                </div>



                <div className='py-4 mt-5 px-3 bg-pink-200'>
                    <h1 className='text-4xl text-blue-800 font-bold text-center'>4.Ques:What is a custom hook, and why will you create a custom hook ?</h1>
                    <p className='text-3xl text-center text-orange-700 mt-3'>Ans: custom hook and create a custom hook </p>

                    <p className='text-2xl mt-2 text-center font-bold '>

                        React JS Custom hooks are reusable functions that a React JS. Developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                    </p>
                </div>


            </div>
        </>
    );
};

export default Blog;