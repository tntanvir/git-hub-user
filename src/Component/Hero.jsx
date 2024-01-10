
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Details from "./Details";
const Hero = () => {
    const [vlu, setVlu] = useState();
    const [usrData, setUsrData] = useState(null);
    const BtClick = () => {
        // console.log(vlu);
        fetch(`https://api.github.com/users/${vlu}`)
            .then(res => res.json())
            .then(data => setUsrData(data))
            .catch(e => console.log(e))

        setVlu('');
    }
    return (
        <div>

            <div className='flex justify-center '>
                <div className='dark:bg-[#fffefe3a] bg-[#bab5b549] rounded-tl-full rounded-bl-full flex justify-between items-center p-2 px-4 md:w-1/2 w-2/3 gap-6'>
                    <div className='flex gap-4  items-center text-2xl'>

                        <FaSearch className='text-blue-600' />
                        <input type="text" placeholder='User Name' className='bg-transparent  w-full border-none focus:outline-none ' value={vlu} onChange={(e) => setVlu(e.target.value)} />
                    </div>
                </div>
                <button onClick={() => BtClick()} className='bg-blue-600 text-white px-3 rounded-tr-full rounded-br-full '>Search</button>

            </div>
            <div>
                {
                    usrData ? <Details data={usrData} /> : <div></div>
                }
            </div>
        </div>
    );
};

export default Hero;