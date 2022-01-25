
import { TEXT } from '@utils/colors';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SmallText(props: TextProps) {
  return <Text {...props} style={[styles.smallText, props.style]} />;
}

const styles = StyleSheet.create({
  smallText: {
    fontFamily: 'Poppins',
    fontSize: hp(1.6),
    lineHeight: hp(2.8),
    color: TEXT
  },
});

export default SmallText;
