import React from 'react';
import { useContext } from 'react';
import { gitUser } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Following = () => {
    const [profile, setProfile] = useContext(gitUser);
    const [following, setFollowing] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${profile.login}/following`)
            .then(res => res.json())
            .then(data => setFollowing(data))
    }, []);
    return (
        <div className='flex justify-center min-h-screen gap-1 flex-wrap p-3'>
            {following && following.map((e) => (
                <Link key={e.div} to={"/" + e.login}>

                    <div key={e.div} className='md:w-96 w-80 p-2 rounded-md flex dark:bg-gray-900 bg-gray-200  gap-3 '>
                        <div className='md:w-24 '>
                            <img src={e.avatar_url} alt="" className='rounded-full  h-12' />
                        </div>
                        <h1 >{e.login}</h1>

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Following;