import React from 'react';

const SectionWrap = (Component, idName, classNames) => () => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
    </div>
  );
};

export default SectionWrap;
