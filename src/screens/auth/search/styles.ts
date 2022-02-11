import {
  ACCENT,
  BACKGROUND_COLOR, PRIMARY, SUBTITLE_TEXT,
} from '@utils/colors';
import { Dimensions, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red'
  },
  topScreenContainer: {
    flexDirection: 'row',
    marginTop: hp(8.5),
    marginLeft: wp(9.5),
    width: screenWidth - 2 * wp(9.5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    marginLeft: wp(9.5),
    marginTop: hp(2)
  },
  backButton: {
    height: hp(1.8),
    width: hp(0.9)
  },
  searchBar: {
    height: hp(5.9),
    width: screenWidth - 2 * wp(9.5),
    marginTop: hp(3.5),
    backgroundColor: ACCENT,
    marginLeft: wp(9.5),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    // overflow: 'hidden'
  },
  searchIcon: {
    height: hp(3),
    width: hp(3),
    marginLeft: wp(3.8),
  },
  searchText: {
    color: SUBTITLE_TEXT,
    marginLeft: wp(3)
  },
  categoryContainer: {
    paddingHorizontal: wp(9.5),
    marginTop: hp(3.1),
  },
  plantWidget: {
    height: hp(17),
    width: wp(37.9),
    borderColor: '#5A5A7533',
    marginBottom: hp(3),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
  },
  widgetImageContainer: {
    height: hp(12.3),
    borderTopLeftRadius: 13.68,
    borderTopRightRadius: 13.68,
    alignItems: 'center'
  },
  widgetImage: {
    resizeMode: 'contain',
    marginLeft: wp(5),
    height: hp(17),
  },
  widgetLabel: {
    width: wp(37.9),
    height: hp(17) - hp(12.3),
    paddingLeft: wp(2.4),
    borderBottomLeftRadius: 13.68,
    borderBottomRightRadius: 13.68,
    paddingTop: hp(1)
  },
  flatList: {
    marginTop: hp(2.),
  }
});

export default styles;
