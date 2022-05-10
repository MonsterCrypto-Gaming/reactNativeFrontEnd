import React , { useState,useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {DARK} from '../../Theme/Theme';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = () => {

    const textInputPasswordRef = useRef(null);
    const [inputValue, setInputValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const setInputText = (newText) => {
        setInputValue(newText);
    }

    
    const setPasswordText = (newText) => {
        setPasswordValue(newText);
    }



    function join () {

    }

    function getIn () {

    }

    function forgotPassword () {
    }

    

  return (
    <View style={{width:WIDTH, height:HEIGHT, backgroundColor:DARK.BACKGROUND_COLOR, flexDirection:'column', justifyContent:'center'}}>
        <StatusBar
        backgroundColor={DARK.BACKGROUND_COLOR}
        barStyle={DARK.STATUS_BAR_STYLE}
        />

        <View style={{width:'100%', height:'80%', alignSelf:'center', flexDirection:'column', justifyContent:'center'}}>

            <View style={{width:'100%', alignSelf:'center'}}>
                <TextInput
                    style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT, position:'absolute', zIndex:2, left:((WIDTH)-(0.7*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3}}
                    placeholderTextColor={'#777777'}
                    placeholder={"domain name"}
                    underlineColorAndroid="transparent"
                    value={inputValue}
                    onChangeText={setInputText}
                />
                <View style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.6 , zIndex:1, left:((WIDTH)-(0.7*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3,position:'absolute'}}></View>
            </View>


            <View style={{width:'100%', alignSelf:'center', marginTop:85}}>
                <TextInput
                ref={textInputPasswordRef}
                    style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT, position:'absolute', zIndex:2, left:((WIDTH)-(0.7*WIDTH))/2, textAlign: 'center', fontSize:20, fontFamily:'Biryani-SemiBold', padding:0, elevation:5,  borderColor:'black', borderWidth:1, borderRadius:3}}
                    placeholderTextColor={'#777777'}
                    placeholder={"password"}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    value={passwordValue}
                    onChangeText={setPasswordText}
                />
                <View style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.6 , position:'absolute',zIndex:1, left:((WIDTH)-(0.7*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
            </View>


            <TouchableOpacity style={{width:'100%', alignSelf:'center', marginTop:75,}} activeOpacity={0.6} onPress={forgotPassword()}>

                <Text style={{alginSelf:'center', color:DARK.TERTIARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:12, alignSelf:'center',}}>forgot password?</Text>

            </TouchableOpacity>


            <View style={{width:'100%', alignSelf:'center', marginTop:30}}>
                <TouchableOpacity style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH)-(0.4*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={getIn()}>

                    <Text style={{alignSelf:'center', color:DARK.PRIMARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>get in</Text>

                </TouchableOpacity>
                <View style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:((WIDTH)-(0.4*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
            </View>


            <View style={{width:'100%', alignSelf:'center', marginTop:135,}}>

                <Text style={{alginSelf:'center', color:DARK.TERTIARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:12, alignSelf:'center',}}>new in here?</Text>
            </View>

            <View style={{width:'100%', alignSelf:'center', marginTop:10}}>
                <TouchableOpacity style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH)-(0.4*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={join()}>

                    <Text style={{alginSelf:'center', color:DARK.TERTIARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>join</Text>

                </TouchableOpacity>
                <View style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.TERTIARY_BUTTON,opacity:0.8 ,position:'absolute', zIndex:1, left:((WIDTH)-(0.4*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
            </View>



        </View>

    </View>
  );

};



export default Login;