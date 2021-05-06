import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../utils/Colors';
import {ScaleHeight, ScaleWidth} from '../../utils/Dimensions';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll:{
    flexGrow:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  title: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: ScaleWidth(26),
    textAlign: 'center',
    marginTop: ScaleHeight(10),

  },
  backImage:{
    height: ScaleHeight(30),
    width: ScaleWidth(30),
  },
  backButton:{
    marginLeft: ScaleHeight(20),

  },
  image: {
    height: ScaleHeight(200),
    width: ScaleWidth(130),
    borderRadius: ScaleWidth(10),
    alignSelf: 'center',
  },
  rating: {
    fontSize: ScaleWidth(15),
    color: Colors.green,
    fontWeight: 'bold',
    marginTop: ScaleHeight(10),
    textAlign: 'center',

  },
  OverviewText:{
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: ScaleWidth(17),
    alignSelf:'flex-start',
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(15),

  },
  Overview:{
    color: Colors.black,
    fontSize: ScaleWidth(13),
    alignSelf:'flex-start',
    marginTop: ScaleHeight(10),
    marginHorizontal: ScaleHeight(15),

  },
  genresText:{
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: ScaleWidth(17),
    alignSelf:'flex-start',
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(15),

  },
  genreItem: {
    height: ScaleHeight(30),
    borderRadius: ScaleWidth(15),
    backgroundColor: Colors.grey,
    padding: ScaleWidth(5),
    margin: ScaleWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(10),
    alignSelf:'flex-start',


  },
  creditsText:{
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: ScaleWidth(17),
    alignSelf:'flex-start',
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(15),

  },
  creditItem: {
    borderRadius: ScaleWidth(15),
    padding: ScaleWidth(7),
    margin: ScaleWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
