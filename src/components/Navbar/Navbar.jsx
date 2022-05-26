import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
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
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              transition={{ duration: 1, ease: 'easeOut' }}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300, opacity: 0 }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
