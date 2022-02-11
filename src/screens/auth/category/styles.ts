import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red'
    // flex: 1,
  },
  bannerContainer: {
    width: '100%',
    height: hp(25.6),
    borderRadius: 20,
    // color: 'PRIMARY'
  },
  bannerImage: {
    flex: 1,
    height: undefined,
    resizeMode: 'cover',
    width: undefined,
    borderRadius: 20
  },
  header: {
    marginLeft: wp(9.5),
    marginTop: hp(2)
  },
  plantWidget: {
    // marginLeft: wp(9.5),
    height: hp(25.3),
    width: wp(36.2),
    borderColor: '#5A5A7533',
    borderWidth: 0.86,
    borderRadius: 13.68,
    marginBottom: hp(3)
  },
  widgetImageContainer: {
    height: hp(17.3),
    borderTopLeftRadius: 13.68,
    borderTopRightRadius: 13.68,
    alignItems: 'center'
  },
  widgetImage: {
    flex: 1,
    resizeMode: 'contain',
    width: wp(40),
  },
  widgetLabel: {
    marginLeft: wp(2.4),
    marginTop: hp(1),
  },
  widgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default styles;
