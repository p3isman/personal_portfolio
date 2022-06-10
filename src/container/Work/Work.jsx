import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Project } from '../../components/index';
import { SectionWrap } from '../../wrapper';
import './Work.scss';
import { client } from '../../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({
    y: [100, 0],
    opacity: [0, 1]
  });

  useEffect(() => {
    const query = '*[_type=="works"] | order(order asc)';

    client.fetch(query).then(data => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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
          <Project key={work.title} work={work} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrap(Work, 'work');
