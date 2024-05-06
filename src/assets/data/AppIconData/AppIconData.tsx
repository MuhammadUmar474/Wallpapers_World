import React from 'react';

import {COLORS} from '../../../shared/theme';
import {Feather, Fontisto} from '../../../shared/vectorIcons';

export const AppIcons = () => {
  // PHONE CALL
  const phoneIcon = (
    <Feather name="phone-call" size={20} color={COLORS?.black} />
  );

  //  EMAIL ICON
  const emailIcon = <Fontisto name="email" size={20} color={COLORS?.black} />;

  return {
    phoneIcon,
    emailIcon,
  };
};
