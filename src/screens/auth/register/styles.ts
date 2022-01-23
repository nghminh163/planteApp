import {BACKGROUND_COLOR, PRIMARY, WHITE} from '@utils/colors';
import {bottomIndicatorHeight} from '@utils/styles';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
console.log();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column-reverse',
  },
  signUpPanel: {
    backgroundColor: PRIMARY,
    paddingTop: hp(7.5),
    paddingBottom: bottomIndicatorHeight() + hp(10),
    borderTopStartRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: hp(4),
  },
  signUpTxt: {
    color: WHITE,
    marginBottom: hp(5),
    textAlign: 'center',
  },
  btnStyle: {
    marginVertical: hp(2),
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(4),
    backgroundColor: WHITE,
    height: hp(5),
  },
  btnTxt: {
    fontSize: (hp(5) * 43) / 100,
  },
});

export default styles;
