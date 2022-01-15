import {BACKGROUND_COLOR, DARK, SECONDARY, SUBTITLE_TEXT, WHITE} from '@utils/colors';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  containerBg: {
    position: 'relative',
  },
  bgImage: {height: hp('50%'), width: wp('100%')},
  containerLogo: {
    position: 'absolute',
    bottom: hp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    flex: 1,
    width: hp(13.5),
    height: hp(13.5),
  },
  body: {
    marginTop: hp(6),
    alignContent: 'center',
  },
  welcomeText: {
    color: DARK,
    textAlign: 'center',
  },
  descriptionText: {
    marginTop: hp(1.2),
    color: SUBTITLE_TEXT,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: hp(5),
    marginHorizontal: wp('20%'),
  },
  btn: {
    borderRadius: 56,
    marginBottom: wp(3),
  },
  signInBtn: {
    backgroundColor: DARK,
  },
  registerBtn: {
    backgroundColor: SECONDARY,
  },
  btnTxt: {color: WHITE, textAlign: 'center'},
});

export default styles;
