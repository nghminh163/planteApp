import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BodyBold(props: TextProps) {
  return <Text {...props} style={[styles.bodyBold, props.style]} />;
}

const styles = StyleSheet.create({
  bodyBold: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: hp(1.9),
    lineHeight: hp(2.7),
  },
});
