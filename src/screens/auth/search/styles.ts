import {
  ACCENT, SUBTITLE_TEXT,
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
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 512 / 393

  },
  topScreenContainer: {
    flexDirection: 'row',
    marginTop: hp(8.5),
    paddingHorizontal: wp(9.5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    marginLeft: wp(9.5),
    marginTop: hp(2)
  },
  backButton: {
    height: hp(1.8),
    width: hp(0.9),
  },
  searchBar: {
    height: hp(5.9),
    width: screenWidth - 2 * wp(9.5),
    marginBottom: hp(3),
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
  suggestionPlant: {
    paddingHorizontal: wp(9.5),
    marginTop: hp(1),
  },
  categoryContainer: {
    // felx: 1,
    marginTop: hp(2.7),
    // height: '100%',
    // backgroundColor: SUBTITLE_TEXT
  },
  titleBold: {
    paddingHorizontal: wp(9.5),
  },
  plantWidget: {
    // height: hp(17),
    // width: undefined,
    // height: undefined,
    aspectRatio: 142.1 / 138.46,
    width: wp(37.9),
    borderColor: '#5A5A7533',
    marginBottom: hp(3),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    // backgroundColor: 'red',
    // overflow: 'visible'
  },
  widgetImageContainer: {
    height: undefined,
    width: wp(37.9),
    aspectRatio: 142.1 / 100.2,
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
    // height: hp(6),
    height: undefined,
    width: wp(37.9),
    aspectRatio: 142.1 / 39.22,
    paddingLeft: wp(2.4),
    borderBottomLeftRadius: 13.68,
    borderBottomRightRadius: 13.68,
    paddingTop: hp(1)
  },
  flatList: {
    marginTop: hp(2),
    // width: screenWidth - 2 * wp(9.5),
    paddingHorizontal: wp(9.5),
    paddingBottom: 100,
    // backgroundColor: ACCENT,
    flexGrow: 11
  },
  smallSubText: {
    lineHeight: hp(2.5)
  },
  metaData: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(1.2)
  },
  metaIconContainer: {
    width: 25,
    marginRight: 20
  },
  metaIcon: {
    flex: 1,
    height: undefined,
    resizeMode: 'contain',
    width: undefined,
  },
});

export default styles;
