import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { urlFor } from 'api/sanityClient';
import { AppContext } from 'context/AppContextProvider';
import './Work.scss';

const Project = ({ work }) => {
  const { theme } = useContext(AppContext);

  return (
    <motion.div className='app__work-item app__flex'>
      <div className='app__work-img app__flex'>
        <img src={urlFor(work.imgUrl).url()} alt={work.name} />
      </div>
      <div className='app__work-content app__flex'>
        <h4 className='bold-text'>{work.title}</h4>
        <p
          className='p-text'
          style={{
            marginTop: 10,
          }}>
          {work.description}
        </p>
        <p className='p-text tech-stack'>
          Tech Stack: {work.techStack.join(', ')}
        </p>
        <div className='project-links'>
          {work.codeLink && (
            <a href={work.codeLink} target='_blank' rel='noreferrer'>
              <BsGithub
                color={theme === 'dark' ? 'white' : '#171515'}
                size={25}
              />
            </a>
          )}
          {work.projectLink && (
            <a href={work.projectLink} target='_blank' rel='noreferrer'>
              <FcSearch size={25} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
