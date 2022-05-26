import { motion } from 'framer-motion';
import React from 'react';
import images from '../../constants/images';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const variants = {
  scaleVariant: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

const circles = [
  images.sass,
  images.typescript,
  images.react,
  images.javascript,
  images.flutter
];

const Header = () => {
  return (
    <div className='app__header app__flex'>
      {/* Greetings badge */}
      <motion.div
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <motion.span
              animate={{ rotate: [0, 60, 0] }}
              transition={{ duration: 1.5, delay: 1 }}>
              👋🏻
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Pedro</h1>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Titles */}
      <div className='app__header-bottom app__flex'>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, delayChildren: 0.5 }}
          className='app__title'>
          <div className='app__header-title'>
            <motion.div
              animate={{ x: [300, 0] }}
              transition={{ duration: 1.5 }}>
              <h2 className='title-1'>Web Developer</h2>
              <h2 className='title-2'>Mobile Developer</h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Circles */}
        <motion.div
          variants={variants}
          whileInView='scaleVariant'
          className='app__header-circles'>
          {circles.map((circle, index) => (
            <div className='app__flex' key={`circle-${index}`}>
              <img src={circle} alt='profile_bg' />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, 'home');
