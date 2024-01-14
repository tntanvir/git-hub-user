import React from 'react';

const Footer = () => {
    const year = () => {
        const dt = new Date;
        return dt.getFullYear();
    }
    return (
        <div className='h-32  p-5'>
            <div className='flex justify-between px-10'>
                <div>
                    <img src="/public/vite.svg" alt="" srcset="" />
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li>About</li>
                        <li>License</li>
                        <li>Contribute</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='text-center border-t-2 mt-5 pt-5'>
                <h1>© {year()} <a href="https://tanvir23.netlify.app" target='_blank'>Tanvir Rahman</a></h1>
            </div>
        </div>
    );
};

export default Footer;