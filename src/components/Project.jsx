import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { urlFor } from '../client';
import '../container/Work/Work.scss';

const Project = props => {
  return (
    <motion.div className='app__work-item app__flex'>
      <div className='app__work-img app__flex'>
        <img src={urlFor(props.work.imgUrl)} alt={props.work.name} />
        {/* <motion.div
          whileHover={{
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.1,
            ease: 'easeInOut',
            staggerChildren: 0.5
          }}
          className='app__work-hover app__flex'>
          {props.work.codeLink && (
            <a href={props.work.codeLink} target='_blank' rel='noreferrer'>
              <motion.div
                whileInView={{
                  opacity: [0, 1]
                }}
                transition={{
                  duration: 0.1
                }}
                className='app__flex'>
                <BsGithub />
              </motion.div>
            </a>
          )}
          {props.work.projectLink && (
            <a href={props.work.projectLink} target='_blank' rel='noreferrer'>
              <motion.div
                whileInView={{
                  opacity: [0, 1]
                }}
                transition={{
                  duration: 0.1
                }}
                className='app__flex'>
                <FcSearch />
              </motion.div>
            </a>
          )}
        </motion.div> */}
      </div>
      <div className='app__work-content app__flex'>
        <h4 className='bold-text'>{props.work.title}</h4>
        <p
          className='p-text'
          style={{
            marginTop: 10
          }}>
          {props.work.description}
        </p>
        <p className='p-text tech-stack'>
          Tech Stack: {props.work.techStack.join(', ')}
        </p>
        <div className='project-links'>
          {props.work.codeLink && (
            <a href={props.work.codeLink} target='_blank' rel='noreferrer'>
              <BsGithub color='#171515' size={20} />
            </a>
          )}
          {props.work.projectLink && (
            <a href={props.work.projectLink} target='_blank' rel='noreferrer'>
              <FcSearch size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
