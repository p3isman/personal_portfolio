import { motion } from 'framer-motion';
import React from 'react';
import images from '../../constants/images';
import { AppWrap } from '../../wrapper';
import './Skills.scss';

const skills = [
  {
    name: 'HTML',
    icon: images.html
  },
  {
    name: 'CSS',

    icon: images.css
  },
  {
    name: 'SASS',
    icon: images.sass
  },
  {
    name: 'JavaScript',
    icon: images.javascript
  },
  {
    name: 'TypeScript',
    icon: images.typescript
  },
  {
    name: 'NodeJS',
    icon: images.node
  },
  {
    name: 'Express',
    icon: images.express
  },
  {
    name: 'Flutter',
    icon: images.flutter
  },
  {
    name: 'React',
    icon: images.react
  },
  {
    name: 'Redux',
    icon: images.redux
  },
  {
    name: 'Git',
    icon: images.git
  }
];

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>
        My technical <span>skills</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app_flex'
              key={skill.name}>
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor ?? 'white' }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
