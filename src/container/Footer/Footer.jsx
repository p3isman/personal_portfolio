import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SpinnerCircular } from 'spinners-react';
import images from 'constants/images';
import { SectionWrap } from 'wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!formData.email.match(validRegex)) {
      setError('You did not enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    emailjs
      .send(
        'service_kourvaq',
        'template_1wus5dr',
        formData,
        'tFI2q_Lib42ssCMIn'
      )
      .then(
        () => {
          setError(null);
          setIsFormSubmitted(true);
        },
        (error) => {
          setError(`An error ocurred while sending the message: ${error}`);
          setIsFormSubmitted(false);
        }
      );

    setLoading(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <h2 className='head-text'>
        Get in <span>contact</span> with me
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:pedro_eisman@outlook.com' className='p-text'>
            pedro_eisman@outlook.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +34 620 379 177' className='p-text'>
            (+34) 620 379 177
          </a>
        </div>
      </div>

      {error && (
        <div className='error'>
          <h4>{error}</h4>
        </div>
      )}

      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={formData.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={formData.message}
              onChange={handleChangeInput}
              cols='30'
              rows='10'
            />
          </div>
          <button onClick={handleSubmit}>
            {loading ? (
              <SpinnerCircular color='white' size='30' />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      ) : (
        <div>
          <h4 className='head-text app__footer-message'>
            Your email was sent.
            <br />
            Thank you for getting in touch.
          </h4>
        </div>
      )}

      <div className='app__footer-social'>
        <a href='https://github.com/p3isman/' target='_blank' rel='noreferrer'>
          <BsGithub size={30} className='app__footer-social--icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/pedroeisman/'
          target='_blank'
          rel='noreferrer'>
          <BsLinkedin size={30} color={'#0A66C2'} />
        </a>
      </div>

      <div className='app__footer-copy'>
        <p className='p-text'>
          &copy; {new Date().getFullYear()} Pedro Eisman Navío. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default SectionWrap(Footer, 'contact');
