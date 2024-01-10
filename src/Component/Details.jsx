import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { GrBlog } from "react-icons/gr";
const Details = ({ data }) => {
    return (
        <div className=''>

            {
                data.name ?
                    <div className=' py-5 flex justify-center'>

                        <div className='bg-gray-200 p-10 px-3 md:px-4 md:flex  gap-3 w-11/12 dark:bg-gray-900 rounded-xl'>
                            <div className='flex justify-center'>
                                <div>

                                    <img src={data.avatar_url} alt="" loading='lazy' className='rounded-full w-52' />
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-5'>
                                <div className=' md:flex  '>
                                    <div className=' w-10/12 flex flex-col gap-3' >
                                        <h1 className='text-2xl'>{data.name}</h1>
                                        <h1 className='text-blue-600'>@{data.login}</h1>
                                        <div className='flex  items-center gap-3'>
                                            <GrBlog />
                                            <a href={data.blog} target='_blank' className='w-1/2 flex items-center gap-3'>
                                                {data.blog}
                                            </a>
                                        </div>
                                        {data.email && <div className='flex gap-3 items-center'>
                                            <GrBlog />
                                            <a href={`mailto:${data.email}`} target='_blank' className='w-1/2 flex items-center gap-3'>
                                                {data.email}
                                            </a>
                                        </div>}
                                        {/* <h1>tntanvir2382018@gmail.com</h1> */}

                                        {data.bio ? <h1>{data.bio}</h1> : <h1 className='md:mt-16'>This profile has no bio</h1>}
                                    </div>
                                    <div>
                                        <h1>Joined {data.created_at && new Date(data.created_at).toString().slice(4, 15)}</h1>
                                    </div>
                                </div>
                                <div className='md:mt-16 md:px-6'>
                                    <div className='dark:bg-gray-700 bg-gray-300 rounded-lg md:text-2xl flex justify-around py-3'>
                                        <div>
                                            <h1>Repos</h1>
                                            <h1 className='text-center'>{data.public_repos}</h1>
                                        </div>
                                        <div>
                                            <h1>Followers</h1>
                                            <h1 className='text-center'>{data.followers}</h1>
                                        </div>
                                        <div>
                                            <h1>Following</h1>
                                            <h1 className='text-center'>{data.following}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='w-1/2 flex items-center gap-3'>
                                        <FaLocationDot />
                                        {data.location}
                                    </div>
                                    <a href={data.html_url} target='_blank' className='w-1/2 flex items-center gap-3'>
                                        <FaLink />
                                        @{data.login}
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    :
                    <div className='flex py-5 justify-center items-center'>
                        not found
                    </div>
            }
        </div>

    );
};

export default Details;