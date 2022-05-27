import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import {
  AiFillBuild,
  AiFillContacts,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject
} from 'react-icons/ai';
import './Navbar.scss';

const sections = [
  {
    name: 'home',
    icon: <AiFillHome />
  },
  {
    name: 'about',
    icon: <AiFillInfoCircle />
  },
  {
    name: 'work',
    icon: <AiFillProject />
  },
  {
    name: 'skills',
    icon: <AiFillBuild />
  },
  {
    name: 'contact',
    icon: <AiFillContacts />
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='app__navbar'>
        {/* Desktop menu */}
        <div className='app__navbar-logo'>{/* TODO: logo */}</div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map(item => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className='app__navbar-mobile'>
          <Hamburger color='white' size={20} toggled={open} toggle={setOpen} />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className='app__navbar-mobile-menu'
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ y: -300, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}>
            <ul>
              {sections.map(section => (
                <li key={section.name}>
                  <a href={`#${section.name}`} onClick={() => setOpen(false)}>
                    <div>{section.icon}</div>
                    <div>{section.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
