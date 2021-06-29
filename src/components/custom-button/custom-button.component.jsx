import React from 'react';

import './custom-button.styles.scss'


// Statlesss functional componenet
const CustomButton = ({children, ...otherProps}) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
