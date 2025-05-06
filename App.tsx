import React from 'react';
import SplashScreen from './Src/pages/SplashScreen';
import SignIn from './Src/pages/SignIn';
import SignUp from './Src/pages/SignUp';
import Training from './Src/pages/Training';
import Pushday from './Src/pages/Pushday';
import Pullday from './Src/pages/Pullday';
import Legday from './Src/pages/Legday';
import Stepper from './Src/pages/Stepper';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './Src/config/Firebase';
import StartFitness from './Src/pages/Home';
import {GoogleSignin} from '@react-native-google-signin/google-signin';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        {/* default animation */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="StartFitness"
          component={StartFitness}
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Pushday"
          component={Pushday}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Pullday"
          component={Pullday}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Legday"
          component={Legday}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Stepper"
          component={Stepper}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
