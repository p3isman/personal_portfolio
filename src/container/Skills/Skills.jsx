import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../api/sanityClient';
import { SectionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        My technical <span>skills</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app_flex'
              key={skill.name}>
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor ?? 'white' }}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrap(Skills, 'skills');
