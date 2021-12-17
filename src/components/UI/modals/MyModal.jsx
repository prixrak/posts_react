import React from 'react';
import classes from './MyModal.module.css'
const MyModal = ({children, visibel, setVisibel}) => {
  const modalCurrentClasses = [classes.myModal];

  if(visibel) modalCurrentClasses.push(classes.active);

  return (
    <div className={modalCurrentClasses.join(' ')} onClick={() => setVisibel(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;