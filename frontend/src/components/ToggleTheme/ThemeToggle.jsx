import LightModeIcon from '@mui/icons-material/LightMode';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Get stored theme or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Add or remove the 'dark' class on root html tag
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Store user's preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-0.5 grid place-content-center rounded-full   transition-all  duration-300  "
    >
      {theme === 'light' ? <NightsStayIcon sx = {{color : 'blue' , fontSize : '18px'}} /> : <LightModeIcon sx = {{color : 'white' , fontSize : '18px'}} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;

