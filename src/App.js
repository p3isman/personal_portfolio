import AppContext from './context/AppContextProvider'
import { AppWrapper } from './wrapper'
import CookieConsent, {
  Cookies,
  getCookieConsentValue
} from 'react-cookie-consent'
import ReactGA from 'react-ga4'
import './App.scss'
import { useEffect } from 'react'

const App = () => {
  const handleAcceptCookie = () => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
  }

  const handleDeclineCookie = () => {
    Cookies.remove('_ga')
    Cookies.remove('_gat')
    Cookies.remove('_god')
  }

  useEffect(() => {
    if (getCookieConsentValue()) {
      handleAcceptCookie()
    }
  }, [])

  return (
    <AppContext>
      <AppWrapper />
      <CookieConsent
        enableDeclineButton
        containerClasses='cookie-banner'
        buttonClasses='cookie-banner__button'
        declineButtonClasses='cookies-banner__button decline'
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
