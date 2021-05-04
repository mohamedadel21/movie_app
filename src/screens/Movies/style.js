import { StyleSheet, Dimensions, } from 'react-native';
import Colors from '../../utils/Colors';
import {ScaleHeight,ScaleWidth} from '../../utils/Dimensions';
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white

    },
    movies: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: ScaleWidth(26),
        marginLeft: ScaleHeight(25),
    },
   

});



export default styles;
