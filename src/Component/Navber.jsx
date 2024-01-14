import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGitAlt } from "react-icons/fa6";
import { useContext } from 'react';
import { gitUser } from '../App';
const Navber = () => {
    const [them, setThem] = useState(null);
    const [gThem, setGThem] = useContext(gitUser);
    useEffect(() => {

        if (localStorage.getItem("them")) {
            setThem(localStorage.getItem("them"));
            setGThem(localStorage.getItem("them"));

        }

        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setThem('dark');
            setGThem('dark');

        }
        else {
            setThem('light');
            setGThem('light');
        }
    }, [])

    useEffect(() => {
        if (them == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        them != null && localStorage.setItem("them", them);
    }, [them]);
    const mode = () => {
        setThem(them === "dark" ? "light" : "dark");
        setGThem(them === "dark" ? "light" : "dark");
        localStorage.setItem("them", them);
    }
    return (
        <nav className='flex justify-between items-center py-3 px-8 md:px-24 dark:bg-black dark:text-white text-black bg-white '>
            <Link to={'/'}>

                <h1 className='text-[1.3rem] flex items-center gap-2' > <FaGitAlt className='!text-3xl ' /> Git User</h1>
            </Link>

            <div className='text-3xl cursor-pointer'>
                {
                    them === "dark" ?
                        <CiLight onClick={() => mode()} />
                        :
                        <MdDarkMode onClick={() => mode()} />
                }
            </div>
        </nav>
    );
};

export default Navber;