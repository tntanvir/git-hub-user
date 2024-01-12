import React from 'react';
import { useContext } from 'react';
import { gitUser } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const Following = () => {
    const [profile, setProfile] = useContext(gitUser);
    const [following, setFollowing] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${profile.login}/following`)
            .then(res => res.json())
            .then(data => setFollowing(data))
    }, []);
    return (
        <div className='flex justify-center gap-1 flex-wrap p-3'>
            {following && following.map((e) => (
                <div key={e.div} className='w-96 p-2 rounded-md flex dark:bg-gray-900 bg-gray-200  gap-3 '>
                    <div className='md:w-24 '>
                        <img src={e.avatar_url} alt="" className='rounded-full  h-12' />
                    </div>
                    <h1 >{e.login}</h1>

                </div>
            ))}
        </div>
    );
};

export default Following;