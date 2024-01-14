import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details';
import { useContext } from 'react';
import { gitUser } from '../../App';

const Followersing = () => {
    const [profile, setProfile] = useContext(gitUser);

    const { username } = useParams();
    const [user, setuser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setuser(data)
                setProfile(data)
            })
    }, [])
    return (
        <div className=' min-h-screen '>

            {

                user && <Details data={user}></Details>
            }

        </div>
    );
};

export default Followersing;