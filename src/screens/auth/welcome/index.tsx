import TouchableCustom from '@components/Touchable';
import BodyRegular from '@components/Typography/BodyRegular';
import ButtonText from '@components/Typography/ButtonText';
import Header1 from '@components/Typography/Header1';
import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBg}>
        <View>
          <Image
            style={styles.bgImage}
            source={require('@assets/png/auth-welcome-bg.png')}
          />
        </View>
        <View style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require('@assets/png/auth-welcome-plante_logo.png')}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Header1 style={styles.welcomeText}>Welcome to {'\n'} Planté</Header1>
        <BodyRegular style={styles.descriptionText}>
          Let's nature a green lifestyle
        </BodyRegular>
        <View style={styles.btnContainer}>
          <TouchableCustom style={[styles.signInBtn, styles.btn]}>
            <ButtonText style={styles.btnTxt}>Sign In</ButtonText>
          </TouchableCustom>
          <TouchableCustom style={[styles.registerBtn, styles.btn]}>
            <ButtonText style={styles.btnTxt}>Register</ButtonText>
          </TouchableCustom>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
