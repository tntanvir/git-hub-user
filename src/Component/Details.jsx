import React from 'react';

const Details = ({ data }) => {
    return (
        <div className='bg-red-900 '>
            {
                console.log(data)
            }
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={data.avatar_url} alt="" loading='lazy' className='rounded-full w-40' />
                    <div>

                        <h1>{data.name}</h1>
                        <h1 className='text-blue-600'>@{data.login}</h1>
                    </div>
                </div>
                <h1>Joined {data.created_at && new Date(data.created_at).toString().slice(4, 15)}</h1>
            </div>
        </div>
    );
};

export default Details;