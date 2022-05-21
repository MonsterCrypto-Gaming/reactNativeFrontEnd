import React from 'react';
import {Easing, View} from "react-native";
import { createNativeStackNavigator, CardStyleInterpolators,} from '@react-navigation/native-stack';
import Login from '../Screens/Authentication/Login'
import Profile from '../Screens/Profile/Profile'
import { DARK } from '../Theme/Theme';


const closeConfig ={
    animation:'timing',
    config:{
        duration:500,
        easing:Easing.linear
    }
}

const openConfig={
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
}

const AuthStack = ({initial='login'}) => {

    const Auth_Stack = createNativeStackNavigator();

    console.log('initial', initial)

return(
    <Auth_Stack.Navigator  
        screenOptions={{
        // animationEnabled: false,
        headerShown: false,
        cardOverlay: () => (
        <View
            style={{
            flex: 1,
            backgroundColor: DARK.BACKGROUND_COLOR,
        }}
        />),
        cardStyle: {
        backgroundColor: DARK.BACKGROUND_COLOR,
        },
        // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        // cardStyle:{cardShadowEnabled: false}
      }}
      initialRouteName={initial}
        >
        <Auth_Stack.Screen
            name="login"
            component={Login}/>

        <Auth_Stack.Screen
            name="profile"
            component={Profile}/>

    </Auth_Stack.Navigator>
);
}
export default AuthStack;