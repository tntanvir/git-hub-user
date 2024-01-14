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
    const len = (jj) => {

        return jj.length > 100 ? jj.slice(0, 100) + "...." : jj;
    }

    // console.log(repo);
    const languageColors = {
        "JavaScript": "bg-yellow-400",
        "C++": "bg-red-500",
        "Python": "bg-blue-400",
        "Java": "bg-blue-600",
        "Swift": "bg-orange-600",
        "Ruby": "bg-pink-600",
        "HTML": "bg-red-600",
        "CSS": "bg-teal-600",
        "TypeScript": "bg-blue-700",
        "Go": "bg-cyan-600",
        "C#": "bg-darkblue-600",
        "Kotlin": "bg-indigo-600",
        "Rust": "bg-red-300",
        "Elixir": "bg-violet-600",
        "Haskell": "bg-violet-900",
    }

    return (
        <div className='flex flex-wrap min-h-screen bg- gap-1 px-5 justify-center '>
            {
                repo && repo.map((e) => (
                    <div key={e.id} className='dark:bg-gray-900 bg-gray-200 min-h-24 w-96 p-3 rounded-md'>
                        <h1 className='text-2xl text-blue-700'>{e.name}</h1>
                        {
                            e.description && <p className='text-sm' >{len(e.description)}</p>
                        }
                        <a href={e.homepage} className='hover:text-blue-700'>{e.homepage}</a>
                        {e.language &&
                            <div className='flex gap-2 items-center '>
                                <p className={`h-2 w-2 rounded-full  ${languageColors[e.language]}`}></p>
                                <p className={``}>{e.language}</p>

                            </div>


                        }


                    </div>
                )
                )
            }
        </div>
    );
};

export default Repo;