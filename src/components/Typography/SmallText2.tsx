
import { TEXT } from '@utils/colors';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SmallText2(props: TextProps) {
  return <Text {...props} style={[styles.smallText2, props.style]} />;
}

const styles = StyleSheet.create({
  smallText2: {
    fontFamily: 'Poppins',
    fontSize: hp(1.7),
    lineHeight: hp(2.8),
    color: TEXT
  },
});

export default SmallText2;
