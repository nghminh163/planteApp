
import { TEXT } from '@utils/colors';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SmallSubText(props: TextProps) {
  return <Text {...props} style={[styles.smallSubText, props.style]} />;
}

const styles = StyleSheet.create({
  smallSubText: {
    fontFamily: 'Poppins',
    fontSize: hp(1.4),
    lineHeight: hp(2.8),
    color: TEXT
  },
});

export default SmallSubText;
