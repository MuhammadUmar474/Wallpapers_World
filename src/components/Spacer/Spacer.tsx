import React, {FC, memo} from 'react';
import {View, ViewProps} from 'react-native';

interface SpacerProps extends ViewProps {
  width?: number;
  height?: number;
}

const Spacer: FC<SpacerProps> = ({width, height}) => (
  <View
    style={{
      width: width || 0,
      height: height || 0,
    }}
  />
);

export default memo(Spacer);
