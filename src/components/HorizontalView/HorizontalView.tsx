import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';

const HorizontalView = ({
  children,
  backgroundColor,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  paddingTop,
  borderWidth,
  justifyContent,
  marginVertical,
  padding,
  width,
  borderColor,
  marginBottom,
  marginLeft,
  paddingBottom,
  borderBottomWidth,
  borderStyle,
  alignSelf,
  style,
}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: justifyContent ? justifyContent : 'space-between',
        alignItems: 'center',
        alignSelf: alignSelf && alignSelf,
        backgroundColor: backgroundColor && backgroundColor,
        borderRadius: borderRadius && borderRadius,
        paddingVertical: paddingVertical && paddingVertical,
        paddingHorizontal: paddingHorizontal && paddingHorizontal,
        marginTop: marginTop && marginTop,
        paddingTop: paddingTop && paddingTop,
        borderWidth: borderWidth && borderWidth,
        marginVertical: marginVertical && marginVertical,
        padding: padding && padding,
        width: width && width,
        borderColor: borderColor && borderColor,
        marginBottom: marginBottom && marginBottom,
        marginLeft: marginLeft && marginLeft,
        paddingBottom: paddingBottom && paddingBottom,
        borderBottomWidth: borderBottomWidth && borderBottomWidth,
        borderStyle: borderStyle,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default memo(HorizontalView);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
