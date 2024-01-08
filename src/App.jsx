import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [them, setThem] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThem('dark');

    }
    else {
      setThem('light');
    }
  }, [])

  useEffect(() => {
    if (them == "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [them]);
  const mode = () => {
    setThem(them === "dark" ? "light" : "dark");
  }
  return (
    <div className='flex bg-white min-h-screen dark:bg-black dark:text-white'>
      <nav className='flex md:justify-around justify-between  w-screen h-12 bg-lime-500 items-center'>
        <h1>GIT-HUB-DEV</h1>

        <button className='bg-red-800 px-3 py-2 rounded-md text-white' onClick={() => mode()}>Dark</button>
      </nav>

    </div>
  );
};

export default App;