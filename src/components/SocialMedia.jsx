import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/pedroeisman/'> </a>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  );
}

export default SocialMedia;
