import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../utils/Colors';
import {ScaleHeight, ScaleWidth} from '../../utils/Dimensions';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  movies: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: ScaleWidth(26),
    marginLeft: ScaleHeight(25),
  },
  inActiveButton: {
    height: ScaleHeight(30),
    borderRadius: ScaleWidth(15),
    backgroundColor: Colors.grey,
    paddingHorizontal: ScaleWidth(10),
    margin: ScaleWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButtonText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  activeButton: {
    height: ScaleHeight(30),
    borderRadius: ScaleWidth(15),
    backgroundColor: Colors.green,
    paddingHorizontal: ScaleWidth(10),
    margin: ScaleWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  activeButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  typesFlatList: {
    padding:ScaleWidth(20),
  },
});

export default styles;
