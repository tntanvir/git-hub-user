import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
const Details = ({ data }) => {
    return (
        <div className=' py-5 flex justify-center'>

            <div className='bg-gray-200 p-10 px-3 md:px-4 flex gap-3 w-11/12 dark:bg-gray-900 rounded-xl'>
                <div className=''>

                    <img src={data.avatar_url} alt="" loading='lazy' className='rounded-full w-40' />
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div className=' flex justify-between'>
                        <div>

                            <h1 className='text-2xl'>{data.name}</h1>
                            <h1 className='text-blue-600'>@{data.login}</h1>
                            {data.bio ? <h1>{data.bio}</h1> : <h1 className='mt-16'>This profile has no bio</h1>}
                        </div>
                        <h1>Joined {data.created_at && new Date(data.created_at).toString().slice(4, 15)}</h1>
                    </div>
                    <div className='mt-16 px-6'>
                        <div className='dark:bg-gray-700 bg-gray-300 rounded-lg text-2xl flex justify-around py-3'>
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
    );
};

export default Details;