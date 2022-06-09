import React from 'react';
import { NavigationDots } from '../components';

const SectionWrap = (Component, idName, classNames) => () => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default SectionWrap;
