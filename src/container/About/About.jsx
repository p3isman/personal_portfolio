import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fetchAbouts, urlFor } from '../../api/sanityClient'
import { SectionWrap } from '../../wrapper'
import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    fetchAbouts().then((data) => {
      setAbouts(data)
    })
  }, [])

  return (
    <div>
      <h2 className='head-text'>
        I know that <span>good products</span> require
        <span> Good Design</span>
      </h2>

      <p className='about-p'>
        Hello and welcome to my portfolio. I am Pedro, a software developer with
        a focus on web and mobile technologies, primarily front-end. I really
        enjoy building applications and going from an idea to production. I am
        specialized in working with React for the web and Flutter for mobile
        apps. Coming from a background in video producing and video editing, I
        understand the importance of a good presentation and good design.
      </p>

      <div className='app__profiles'>
        {abouts.map((about) => (
          <motion.div
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='app__profile-item'
            key={about.title}>
            <img src={urlFor(about.imgUrl).size(600, 600)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrap(About, 'about')
