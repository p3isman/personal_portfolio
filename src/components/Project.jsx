import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { urlFor } from '../api/sanityClient';
import '../container/Work/Work.scss';
import { AppContext } from '../context/AppContextProvider';

const Project = (props) => {
  const { theme } = useContext(AppContext);

  return (
    <motion.div className='app__work-item app__flex'>
      <div className='app__work-img app__flex'>
        <img src={urlFor(props.work.imgUrl)} alt={props.work.name} />
      </div>
      <div className='app__work-content app__flex'>
        <h4 className='bold-text'>{props.work.title}</h4>
        <p
          className='p-text'
          style={{
            marginTop: 10,
          }}>
          {props.work.description}
        </p>
        <p className='p-text tech-stack'>
          Tech Stack: {props.work.techStack.join(', ')}
        </p>
        <div className='project-links'>
          {props.work.codeLink && (
            <a href={props.work.codeLink} target='_blank' rel='noreferrer'>
              <BsGithub
                color={theme === 'dark' ? 'white' : '#171515'}
                size={25}
              />
            </a>
          )}
          {props.work.projectLink && (
            <a href={props.work.projectLink} target='_blank' rel='noreferrer'>
              <FcSearch size={25} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
