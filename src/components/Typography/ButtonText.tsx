import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ButtonText(props: TextProps) {
  return <Text {...props} style={[styles.bodyRegular, props.style]} />;
}

const styles = StyleSheet.create({
  bodyRegular: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: hp(2),
  },
});
