import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto '>
            <div className='m-10'>
                <h1 className='text-3xl text-teal-700 mb-6'><span className='text-red-600 underline font-medium'>Question: </span>Difference between inline, block and inline-block element?</h1>
                <p className='text-xl'><span className='text-2xl text-green-800 underline font-semibold'>Answer: </span><br /> <span className='font-medium'>1.Inline- </span>Displays an element as an inline element. The element doesn't start on a new line. Any height and width properties will have no effect. Example of inline element span, a, img </p>
                <p className='text-xl'> <span className='font-medium'>2.Block- </span>Displays an element as a block element. The element will start on a new line. You CAN set height and width values. Example of block element div, li, h1, p, section etc.</p>

                <p className='text-xl'> <span className='font-medium'>3.Inline-block- </span>Displays an element as an inline-level block container. The element doesn't start on a new line.You CAN set height and width values.</p>
            </div>

            <div className='m-10'>
                <h1 className='text-3xl text-teal-700 mb-6'><span className='text-red-600 underline font-medium'>Question: </span>What is Semantic tag?</h1>
                <p className='text-xl'><span className='text-2xl text-green-800 underline font-semibold'>Answer: </span><br />
                    In earlier versions of HTML, there were no globally accepted names for structural elements, and each developer used their own. That made it very hard for search engines to index web page content correctly. When a browser communicates with the code, it looks for some specific information to help with the display. Hence, HTML5 introduced a consistent list of semantic elements to help search engines and developers.
                    The list of some semantic elements :
                    <span className='text-green-600'> article, aside, details, figure, footer, form, header, main, mark, nav, table, section</span> .
                    HTML5 semantic tags have meaning. By using semantic markup, we help the browser understand the meaning of the content. The semantic tag describe how the content within them is supposed to behave. By providing this extra level of clarity,HTML5 semantic elements also help search engines to read the page and find the required information faster.
                </p>
            </div>



        </div>
    );
};

export default Blogs;