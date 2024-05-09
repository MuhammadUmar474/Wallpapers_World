import React, { useContext } from 'react';

import {COLORS} from '../../../shared/theme';
import {Feather, Fontisto} from '../../../shared/vectorIcons';
import AppContext from '../../../context/AppContext';

export const AppIcons = () => { 
  const {selectedColor} = useContext(AppContext)
  // PHONE CALL
  const phoneIcon = (
    <Feather name="phone-call" size={20} color={selectedColor ? COLORS?.black : COLORS?.white} />
  );

  //  EMAIL ICON
  const emailIcon = <Fontisto name="email" size={20} color={selectedColor ? COLORS?.black : COLORS?.white} />;

    // SUN ICON
    const sunIcon = (
      <Feather
        name="sun"
        size={30}
        color={selectedColor ?  COLORS?.white : COLORS?.black}
      />
    );
  
    // MOON ICON
    const moonIcon = (
      <Feather
        name="moon"
        size={30}
        color={selectedColor ? COLORS?.white : COLORS?.black }
      />
    );

  return {
    phoneIcon,
    emailIcon,
    sunIcon,
    moonIcon
  };
};


