import React from 'react';
import { useContext } from 'react';
import { gitUser } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';

const Followers = () => {
    const [profile, setProfile] = useContext(gitUser);
    const [followers, setFollowers] = useState(null);
    useEffect(() => {
        fetch(profile.followers_url)
            .then(res => res.json())
            .then(data => setFollowers(data))
    }, []);
    return (
        <div className='flex justify-center flex-wrap p-3 gap-3'>
            {
                followers && followers.map((e) => (
                    <div key={e.div} className='w-96 p-2 rounded-md flex dark:bg-gray-900 bg-gray-200  gap-3 '>
                        <div className='md:w-24 '>
                            <img src={e.avatar_url} alt="" className='rounded-full  h-12' />
                        </div>
                        <h1 >{e.login}</h1>

                    </div>
                ))
            }
        </div>
    );
};

export default Followers;