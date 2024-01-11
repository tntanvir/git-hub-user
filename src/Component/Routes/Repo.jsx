import React from 'react';
import { useContext } from 'react';
import { gitUser } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';

const Repo = () => {
    const [profile, setProfile] = useContext(gitUser);
    const [repo, setRepo] = useState(null);
    useEffect(() => {
        console.log(profile);
        fetch(profile.repos_url)
            .then(res => res.json())
            .then(data => setRepo(data));
    }, [])
    console.log(repo);
    return (
        <div className='flex flex-col gap-4 px-5'>
            {
                repo && repo.map((e) => (
                    <div key={e.id} className='dark:bg-gray-900 bg-gray-200 min-h-24'>
                        <h1 className='text-2xl text-blue-700'>{e.name}</h1>
                        <p className='text-sm '>{e.description}</p>
                        <a href={e.homepage} className='hover:text-blue-700'>{e.homepage}</a>
                        <p>{e.language}</p>
                    </div>
                )
                )
            }
        </div>
    );
};

export default Repo;