import React from 'react';
import ReactHelmet from '../../hook/ReactHelmet';

const Blog = () => {
    return (
        <div>
            <ReactHelmet>Blog</ReactHelmet>
            <div>
                <div className="blog-container max-w-7xl mx-auto py-24">
                    <div className='px-0 md:px-16 w-10/12  md:w-8/12 mx-auto'>
                        <div className=" bg-green-200 p-5 rounded mb-20 shadow-lg">
                            <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>How will you improve the performance of a React Application?</h1>
                            <p className='text-left'>use component state local where necessary. use Memoizing React components to prevent unnecessary re-renders. use Code-splitting in React using dynamic import.use Windowing or list virtualization in React. Lazy loading images in React.</p>
                        </div>
                        <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                            <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What are the different ways to manage a state in a React application?</h1>
                            <p className='text-left'>Use URL state is missing as a category of state, but it is important one.In many cases, a lot of major parts of our application really upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!.There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                        <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                            <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>How does prototypical inheritance work?</h1>
                            <p className='text-left'>Prototype is : Every object with it is methods and properties contain's an internal and hidden property known as Prototype. This Prototypal Inheritance is a feature in javascript to used  add methods and properties in objects. It is a method by which a object can inherit the properties and methods of another object. Traditionally  in order to get and set  Prototype of  object, we use Object.getPrototypeOf and Object.setPrototypeOf. There are undoubtedly,  more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                        <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                            <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'> How will you implement a search to find products by name?</h1>
                            <p className='text-left'>
                                For example a search on Product will do a search on all existing nomenclatures and find all items in which the word "Product " appears. Type Product in the Search Text box and click on Searchbutton. The system finds all products with the text "Product " in it. Now, you can use the scrollbar to view all the products and place a checkmark in check boxes to the left of each product. Finally, click on OK. The selected products from the search panel will be added to the Products dimension.
                            </p>
                        </div>
                        <div className="bg-green-200 p-5 rounded mb-20 shadow-lg">
                            <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What is a unit test? Why should write unit tests?</h1>
                            <p className='text-left'>Unit testing is involves testing individual components of the software program or application. The main purpose behind this,  is to check that all the individual part  are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and  single output</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;