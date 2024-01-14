import React from 'react';
import { FaGitAlt } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = () => {
        const dt = new Date;
        return dt.getFullYear();
    }
    return (
        <div className='md:h-32  p-5'>
            <div className='md:flex  justify-between md:px-10'>
                <Link to={'/'}>

                    <div className='text-3xl flex justify-center'>
                        <FaGitAlt />
                    </div>
                </Link>
                <div className='flex justify-center'>
                    <ul className='flex gap-5'>
                        <li className='cursor-pointer'><a href="https://github.com/tntanvir/git-user-profile" target='_blank'>About</a></li>
                        <li className='cursor-pointer'>License</li>
                        <li className='cursor-pointer'>
                            <a href="https://github.com/tntanvir/git-user-profile" target='_blank'>Contribute</a></li>
                        <li className='cursor-pointer'>
                            <Link to={'/contect/from'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-center border-t-2 mt-5 pt-5'>
                <div>

                </div>
                <div>© {year()} <a href="https://tanvir23.netlify.app" target='_blank'>Tanvir Rahman</a></div>
                <div>V 1.0.0</div>
            </div>
        </div>
    );
};

export default Footer;