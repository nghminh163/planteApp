import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function TitleBold(props: TextProps) {
  return <Text {...props} style={[styles.title, props.style]} />;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: hp(2.5),
    // lineHeight: hp(5)
  },
});

export default TitleBold;
