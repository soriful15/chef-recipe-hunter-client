
import React from 'react';
import Pdf from "react-to-pdf";




const Blog = () => {
    const ref = React.createRef();
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className=" my-24 md:mx-32 mx-6">
                    <div ref={ref}>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) =>
                                <button onClick={toPdf} className="bg-slate-100 lg:mt-0 mt-3 text-black px-6 py-3 mb-5 capitalize font-bold border rounded-md">
                                    Download PDF
                                </button>
                            }
                        </Pdf>
                        <div
                            tabIndex={0}
                            className="collapse collapse-plus border border-base-300  rounded-box"
                        >
                            <div className="collapse-title text-xl font-medium">
                                What is the differences between uncontrolled and controlled
                                components ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    A controlled element is one that takes its current value in props and notifies changes via the onChange callback.  A parent component handling callbacks controls it by managing its own state and passing new values as props to the controlled component.  You can also call it dumb material.
                                    <br />
                                    An uncontrolled part is one that stores its own state internally and we ask ref to find its current value when needed.  It is a bit more like traditional HTML. sot that ,Unmanaged elements inform other elements about their changes and we can access the element simply by using ref-s
                                </p>
                            </div>
                        </div>
                        <div
                            tabIndex={1}
                            className="collapse collapse-plus border border-base-300 rounded-box"
                        >
                            <div className="collapse-title text-xl font-medium">
                                How to validate React props using PropTypes ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    We validate them by setting the propTypes property of the component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.
                                </p>
                            </div>
                        </div>
                        <div
                            tabIndex={2}
                            className="collapse collapse-plus border border-base-300 rounded-box"
                        >
                            <div className="collapse-title text-xl font-medium">
                                What is the difference between nodejs and express js ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Node.js itself provides an HTTP module, whose createServer method returns an object that we can use to respond to HTTP requests.  That object inherits from the http.Server prototype.
                                    <br />
                                    Express provides a createServer method that extends Connect is Server prototype.  So all of Connect iss functionality is here, plus a useful DSL for rendering and describing routes. so that.. Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications.
                                </p>
                            </div>
                        </div>
                        <div
                            tabIndex={3}
                            className="collapse collapse-plus border border-base-300  rounded-box"
                        >
                            <div className="collapse-title text-xl font-medium">
                                What is a custom hook, and why will you create a custom hook ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                React JS Custom hooks are reusable functions that a React JS. Developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Blog;