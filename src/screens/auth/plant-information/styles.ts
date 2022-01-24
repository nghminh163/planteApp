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
    flex: 1,
    justifyContent: 'flex-end',
  },
  information: {
    height: '50%',
    backgroundColor: BACKGROUND_COLOR,
  }
});

export default styles;
