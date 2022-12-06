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
import { AppContext } from 'context/AppContextProvider';
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
  const { inputRef, theme, onChangeTheme } = useContext(AppContext);

  const focusInput = (item) => {
    if (item === 'contact') {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  return (
    <>
      <nav className='app__navbar'>
        {/* Desktop menu */}
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li
              className='app__flex p-text'
              key={`link-${item}`}
              onClick={() => focusInput(item)}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className='app__navbar-theme' onClick={onChangeTheme}>
          {theme === 'dark' ? (
            <CgSun color='white' size={25} />
          ) : (
            <HiMoon color='white' size={25} />
          )}
        </div>

        {/* Mobile menu */}
        <div className='app__navbar-mobile'>
          <Hamburger color='white' size={20} toggled={open} toggle={setOpen} />
        </div>
        <div className='app__navbar-theme-mobile' onClick={onChangeTheme}>
          {theme === 'dark' ? (
            <CgSun color='white' size={25} />
          ) : (
            <HiMoon color='white' size={25} />
          )}
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <NavbarMobile
            setOpen={setOpen}
            theme={theme}
            sections={sections}
            focusInput={focusInput}></NavbarMobile>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
