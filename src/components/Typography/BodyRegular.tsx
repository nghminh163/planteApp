import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function BodyRegular(props: TextProps) {
  return <Text {...props} style={[styles.bodyRegular, props.style]} />;
}

const styles = StyleSheet.create({
  bodyRegular: {
    fontFamily: 'Poppins',
    fontSize: hp(2),
    lineHeight: hp(5.5),
  },
});
