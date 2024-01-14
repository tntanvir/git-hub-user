import React from 'react';

const ContectFrom = () => {
    return (
        <>
            <h1 className='text-center text-5xl font-bold '>Contect Us</h1>
            <div className='min-h-screen md:flex justify-around items-center'>
                <div className='md:w-1/2'>
                    <img src="/public/h.png" alt="" />
                </div>
                <div className=' md:w-1/2 p-10 md:h-screen  items-center flex '>
                    <from className="flex flex-col gap-3 w-full">
                        <input className='bg-transparent p-3 border-gray-500 border-2 rounded-lg focus:outline-none' type="text" placeholder='Enter Your Name' />
                        <input className='bg-transparent p-3 border-gray-500 border-2 rounded-lg focus:outline-none' type="text" placeholder='Enter Your Email' />
                        <textarea rows={7} className='bg-transparent p-3 border-gray-500 border-2 rounded-lg focus:outline-none' type='text' placeholder='Enter Messesge' />
                    </from>
                </div>
            </div>
        </>

    );
};

export default ContectFrom;