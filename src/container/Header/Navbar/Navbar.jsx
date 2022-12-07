import { AnimatePresence } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import {
  AiFillBuild,
  AiFillContacts,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
} from 'react-icons/ai';
import { HiMoon } from 'react-icons/hi';
import { CgSun } from 'react-icons/cg';
import { ThemeContext } from 'context/ThemeProvider';
import './Navbar.scss';
import NavbarMobile from './NavbarMobile';

const sections = [
  {
    name: 'home',
    icon: <AiFillHome />,
  },
  {
    name: 'about',
    icon: <AiFillInfoCircle />,
  },
  {
    name: 'work',
    icon: <AiFillProject />,
  },
  {
    name: 'skills',
    icon: <AiFillBuild />,
  },
  {
    name: 'contact',
    icon: <AiFillContacts />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className='app__navbar'>
        {/* Desktop navbar */}
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div
          className='app__navbar-theme'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <CgSun color='white' size={25} />
          ) : (
            <HiMoon color='white' size={25} />
          )}
        </div>

        {/* Mobile navbar */}
        <div className='app__navbar-mobile'>
          <Hamburger color='white' size={20} toggled={open} toggle={setOpen} />
        </div>
        <div
          className='app__navbar-theme-mobile'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <CgSun color='white' size={25} />
          ) : (
            <HiMoon color='white' size={25} />
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <NavbarMobile
            setOpen={setOpen}
            theme={theme}
            sections={sections}></NavbarMobile>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
