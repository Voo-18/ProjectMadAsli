import React from 'react';
import SplashScreen from './Src/pages/SplashScreen';
import SignIn from './Src/pages/SignIn';
import SignUp from './Src/pages/SignUp';
import Home from './Src/pages/Home';
import Training from './Src/pages/Training';
import Pushday from './Src/pages/Pushday';
import Pullday from './Src/pages/Pullday';
import Legday from './Src/pages/Legday';
import Stepper from './Src/pages/Stepper';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './Src/config/Firebase';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Training" 
          component={Training}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Pushday" 
          component={Pushday}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Pullday" 
          component={Pullday}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Legday" 
          component={Legday}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Stepper" 
          component={Stepper}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
