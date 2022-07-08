import { motion } from 'framer-motion'
import './Navbar.scss'

const NavbarMobile = ({ setOpen, theme, sections, focusInput }) => {
  return (
    <motion.div
      className={`app__navbar-mobile-menu ${
        theme === 'dark'
          ? 'app__navbar-mobile-dark'
          : 'app__navbar-mobile-light'
      }`}
      transition={{
        duration: 0.7,
        ease: 'easeOut'
      }}
      initial={{
        height: '0'
      }}
      animate={{
        height: '100%'
      }}
      exit={{
        height: '0'
      }}>
      <motion.ul
        transition={{ duration: 0.2 }}
        exit={{
          opacity: 0
        }}>
        {sections.map((section) => (
          <li key={section.name}>
            <a
              href={`#${section.name}`}
              onClick={() => {
                setOpen(false)
                focusInput(section.name)
              }}>
              <div>{section.name}</div>
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default NavbarMobile
