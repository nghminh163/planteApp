import TouchableCustom from '@components/Touchable';
import ButtonText from '@components/Typography/ButtonText';
import Header1 from '@components/Typography/Header1';
import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';
import {WHITE} from '@utils/colors';

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.signUpPanel}>
        <Header1 style={styles.signUpTxt}>Sign up!</Header1>

        {/* <ButtonSignInWith
          icon={<Image source={require('@assets/png/icons/apple.png')} />}
          bgColor={WHITE}
        /> */}
        {/* <ButtonSignInWith icon={<FacebookIcon />} bgColor={'#6F97EE'} /> */}
        {/* <ButtonSignInWith icon={<AppleIcon />} /> */}
      </View>
    </View>
  );
}

export default RegisterScreen;
