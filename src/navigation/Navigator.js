import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../screens/Movies/view';
import MovieDetails from '../screens/MovieDetails/view';


const Stack = createStackNavigator();

export default  Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} options={{ headerShown:false }} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
