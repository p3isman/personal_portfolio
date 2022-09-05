import AppContext from './context/AppContextProvider';
import { AppWrapper } from './wrapper';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import ReactGA from 'react-ga4';
import './App.scss';
import { useEffect } from 'react';

const App = () => {
  const handleAcceptCookie = () => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  };

  useEffect(() => {
    if (getCookieConsentValue()) {
      handleAcceptCookie();
    }
  }, []);

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
        onAccept={handleAcceptCookie}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </AppContext>
  );
};

export default App;
