import AppContext from './context/AppContextProvider'
import './App.scss'
import { AppWrapper } from './wrapper'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

const App = () => {
  const handleAcceptCookie = () => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
      debug: true
    })
  }

  const handleDeclineCookie = () => {
    Cookies.remove('_ga')
    Cookies.remove('_gat')
    Cookies.remove('_god')
  }

  return (
    <AppContext>
      <AppWrapper />
      <CookieConsent
        enableDeclineButton
        location='bottom'
        buttonText='Accept'
        declineButtonText='Decline'
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </AppContext>
  )
}

export default App
