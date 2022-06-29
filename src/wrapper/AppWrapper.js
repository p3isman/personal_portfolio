import { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'
import { Navbar } from '../components'
import { About, Footer, Header, Skills, Work } from '../container/index'

const AppWrapper = () => {
  const { theme } = useContext(AppContext)

  return (
    <div
      className={`app app__relative ${
        theme === 'dark' ? 'theme-dark' : 'theme-light'
      }`}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default AppWrapper
