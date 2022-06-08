import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';

const Project = props => {
  return (
    <motion.div className='app__work-item app__flex'>
      <div className='app__work-img app__flex'>
        <img src={props.work.img} alt={props.work.name} />
        <motion.div
          whileHover={{
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.1,
            ease: 'easeInOut',
            staggerChildren: 0.5
          }}
          className='app__work-hover app__flex'>
          {props.work.repoUrl && (
            <a href={props.work.repoUrl} target='_blank' rel='noreferrer'>
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
          {props.work.projectUrl && (
            <a href={props.work.projectUrl} target='_blank' rel='noreferrer'>
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
        </motion.div>
      </div>
      <div className='app__work-content app__flex'>
        <h4 className='bold-text'>{props.work.name}</h4>
        <p
          className='p-text'
          style={{
            marginTop: 10
          }}>
          {props.work.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Project;
