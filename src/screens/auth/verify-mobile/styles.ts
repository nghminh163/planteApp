import {
  BACKGROUND_COLOR,
  DARK,
  SECONDARY,
  SUBTITLE_TEXT,
  WHITE,
} from '@utils/colors';
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
  bgImage: {height: hp('40%'), width: wp('100%')},
 
});

export default styles;
