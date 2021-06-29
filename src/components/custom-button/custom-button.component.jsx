import React from 'react';

import './custom-button.styles.scss'


// Statlesss functional componenet
const CustomButton = ({children, isGoogleSingIn,...otherProps}) => {
  return (
    <button className={`${isGoogleSingIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
