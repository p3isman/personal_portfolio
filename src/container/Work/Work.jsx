import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import images from '../../constants/images';
import { AppWrap } from '../../wrapper';
import './Work.scss';

const works = [
  {
    name: 'OpenEMT: Madrid Bus App',
    description:
      'An app to check bus times for Madrid buses, made with Flutter.',
    img: images.open_emt,
    repoUrl: 'https://github.com/p3isman/open_emt',
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.magusstudio.open_emt',
    tags: ['mobile']
  },
  {
    name: 'Find The Spy',
    description: 'A multiplayer game app for one device built with Flutter.',
    img: images.find_the_spy,
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.magusstudio.find_the_spy_pro',
    tags: ['mobile']
  },
  {
    name: 'Quotia: Inspirational Quotes',
    description: 'A mobile app to check a new inspirational quote each day.',
    img: images.quotia,
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.magusstudio.quotia_pro',
    tags: ['mobile']
  },
  {
    name: 'Minimal Reddit',
    description: 'A minimal Reddit client to consume the main subreddits.',
    img: images.minimal_reddit,
    repoUrl: 'https://github.com/p3isman/reddit_client',
    tags: ['web']
  },
  {
    name: 'QR Scanner',
    description: 'A simple QR Scanner with URL launcher made with Flutter.',
    img: images.qr_scanner,
    repoUrl: 'https://github.com/p3isman/qr_scanner',
    tags: ['mobile']
  },
  {
    name: 'Personal Portfolio',
    description: 'My personal Portfolio. This one!',
    img: images.portfolio,
    repoUrl: 'https://github.com/p3isman/personal_portfolio',
    tags: ['web']
  },
  {
    name: 'Administrador de Pacientes',
    description:
      'A simple React app to manage pacient appointments for a doctor.',
    img: images.admin_pacientes,
    repoUrl: 'https://github.com/p3isman/admin_pacientes',
    tags: ['web']
  },
  {
    name: 'Movies App',
    description: 'An app to check the newest movies in theaters.',
    img: images.movies,
    repoUrl: 'https://github.com/p3isman/movies_app',
    tags: ['mobile']
  }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState(works);
  const [animateCard, setAnimateCard] = useState({
    y: [100, 0],
    opacity: [0, 1]
  });

  const handleWorkFilter = filter => {
    setActiveFilter(filter);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (filter === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter(work =>
            work.tags.includes(filter.split(' ')[0].toLowerCase())
          )
        );
      }
    }, 500);
  };

  return (
    <div className='app__work'>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className='app__work-filter'>
        {['All', 'Web App', 'Mobile App'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        className='app__work-portfolio'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filterWork.map(work => (
          <motion.div className='app__work-item app__flex' key={work.name}>
            <div className='app__work-img app__flex'>
              <img src={work.img} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.1,
                  ease: 'easeInOut',
                  staggerChildren: 0.5
                }}
                className='app__work-hover app__flex'>
                {work.repoUrl && (
                  <a href={work.repoUrl} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.1
                      }}
                      className='app__flex'>
                      <BsGithub />
                    </motion.div>
                  </a>
                )}
                {work.projectUrl && (
                  <a href={work.projectUrl} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
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
              <h4 className='bold-text'>{work.name}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Work, 'work');
