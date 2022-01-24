import {
  BACKGROUND_COLOR,
  DARK,
  SECONDARY,
  SUBTITLE_TEXT,
  WHITE,
} from '@utils/colors';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
    // position: 'relative',
    // position: 'absolute'
    // justifyContent: 'flex-end',
  },
  information: {
    // position: 'relative',
    position: 'absolute',
    height: '60%',
    backgroundColor: BACKGROUND_COLOR,
    borderTopRightRadius: 85,
    paddingHorizontal: '10.1%',
    paddingTop: '9.35%',
    marginTop: '100%'
  },
  bgImage: {
    // aspectRatio: 288 / 376,
    // backgroundColor: 'red',
    position: 'absolute',
    // height: hp(30),
    // width: wp(76.8),
    marginLeft: 158,
    marginTop: 50
  },
});

export default styles;
