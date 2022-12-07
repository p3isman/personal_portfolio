import { useEffect } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import ReactGA from 'react-ga4';
import ThemeProvider from 'context/ThemeProvider';
import { AppWrapper } from 'wrapper';
import './App.scss';

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
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
