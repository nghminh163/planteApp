import {
  BACKGROUND_COLOR,
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
  },
  backButton: {
    position: 'absolute',
    marginTop: hp(8.5),
    marginLeft: wp(9.5),
    height: hp(1.8),
    width: hp(0.9)
  },
  plantLabel: {
    position: 'absolute',
    marginLeft: wp(9.5),
    marginTop: hp(14.2),
  },
  meta: {
    position: 'absolute',
    marginTop: hp(29),
    marginLeft: wp(9.5)
  },
  metaData: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(1.2)
  },
  metaIcon: {
    flex: 1,
    height: undefined,
    resizeMode: 'contain',
    width: undefined,
  },
  plantImage: {
    position: 'absolute',
    right: -wp(17),
    marginTop: hp(5),
    height: hp(46.3),
    width: hp(35.5)
  },
  editBtn: {
    position: 'absolute',
    // right: -wp(17),
    marginTop: hp(45),
    marginLeft: wp(80),
    height: hp(3),
    width: hp(3)
  },
  information: {
    position: 'absolute',
    height: hp(60),
    backgroundColor: BACKGROUND_COLOR,
    borderTopRightRadius: 85,
    paddingHorizontal: wp(10.1),
    paddingTop: hp(4.3),
    marginTop: hp(46)
  },
  infoBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4.9),
    paddingVertical: wp(3.2),
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(90, 90, 117, 0.2)',
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 999,
    elevation: 10,
    overflow: 'hidden',
    marginTop: hp(1.8)
  },
  forwardBtn: {
    height: hp(1.8),
    width: hp(0.9)
  }
});

export default styles;
