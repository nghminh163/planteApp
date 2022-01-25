import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Header2(props: TextProps) {
  return <Text {...props} style={[styles.header2, props.style]} />;
}

const styles = StyleSheet.create({
  header2: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: hp(3),
    // lineHeight: hp(5)
  },
});

export default Header2;
