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
import { useWalletConnect } from '@walletconnect/react-native-dapp';
// import {MoralisProvider} from 'react-moralis';


const Moralis = require('moralis/react-native.js');
const AsyncStorage = require('react-native').AsyncStorage;
Moralis.setAsyncStorage(AsyncStorage);


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



// Moralis.initialize("M6DdjAYiwt6kyzBAFiyrA10tz5KA9bsdhIWPKcKx");
// Moralis.serverUrl = serverUrl;


const appId = "T0AYtywpQkJdMuZm6JgMMD9MMBaTX7spd57FMmnf";
const serverUrl = "https://vviek4wdoaep.usemoralis.com:2053/server";
const masterKey = "EcqaiVhB15A2ChLFL3FGJkRrVccbEPiT50ncKUIq";
// Moralis.start({ serverUrl, appId});

async function getNFTs(){

    console.log('started')
    // console.log(responseStarted)
    const options = {chaim:'eth', address:'0x76E399714E1D3467aFfA4f54C0bDeb240cBb640c'};
    const nfts = await Moralis.Web3.getNFTs(options);
    console.log(nfts);
}




const Login = ({navigation}) => {


    const textInputPasswordRef = useRef(null);
    const [inputValue, setInputValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")


    
    const connector = useWalletConnect();

    if(connector.connected){
        navigation.navigate('profile')
    }

    console.log('connector');
    console.log(connector);

    const setInputText = (newText) => {
        setInputValue(newText);
    }

    
    const setPasswordText = (newText) => {
        setPasswordValue(newText);
    }

     


    async function getIn () {

        await connector.connect();
        // getNFTs();

    }

    function forgotPassword () {
    }

            //     {/* <View style={{width:'100%', alignSelf:'center'}}>
            //     <TextInput
            //         style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT, position:'absolute', zIndex:2, left:((WIDTH)-(0.7*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3}}
            //         placeholderTextColor={'#777777'}
            //         placeholder={"domain name"}
            //         underlineColorAndroid="transparent"
            //         value={inputValue}
            //         onChangeText={setInputText}
            //     />
            //     <View style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.6 , zIndex:1, left:((WIDTH)-(0.7*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3,position:'absolute'}}></View>
            // </View>


            // <View style={{width:'100%', alignSelf:'center', marginTop:85}}>
            //     <TextInput
            //     ref={textInputPasswordRef}
            //         style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT, position:'absolute', zIndex:2, left:((WIDTH)-(0.7*WIDTH))/2, textAlign: 'center', fontSize:20, fontFamily:'Biryani-SemiBold', padding:0, elevation:5,  borderColor:'black', borderWidth:1, borderRadius:3}}
            //         placeholderTextColor={'#777777'}
            //         placeholder={"password"}
            //         underlineColorAndroid="transparent"
            //         secureTextEntry={true}
            //         value={passwordValue}
            //         onChangeText={setPasswordText}
            //     />
            //     <View style={{width:0.7*WIDTH, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.6 , position:'absolute',zIndex:1, left:((WIDTH)-(0.7*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
            // </View>


            // <TouchableOpacity style={{width:'100%', alignSelf:'center', marginTop:75,}} activeOpacity={0.6} onPress={forgotPassword()}>

            //     <Text style={{alignSelf:'center', color:DARK.TERTIARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:12, alignSelf:'center',}}>forgot password?</Text>

            // </TouchableOpacity> */}

    

  return (

        (connector.connected == false)?
        <View style={{width:WIDTH, height:HEIGHT, backgroundColor:DARK.BACKGROUND_COLOR, flexDirection:'column', justifyContent:'center'}}>
            <StatusBar
            backgroundColor={DARK.BACKGROUND_COLOR}
            barStyle={DARK.STATUS_BAR_STYLE}
            />

            <View style={{width:'100%', height:'80%', alignSelf:'center', flexDirection:'column', justifyContent:'center'}}>


                
                <View style={{width:'100%', alignSelf:'center', position:'absolute', zIndex:2,}}>
                    <Text style={{alignSelf:'center', color:DARK.PRIMARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:20, alignSelf:'center',}}>your games.  your assets.</Text>
                </View>
                <View style={{width:'100%', alignSelf:'center', position:'absolute', zIndex:1,}}>
                    <Text style={{alignSelf:'center', color:DARK.SECONDARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:20, alignSelf:'center',marginTop:2, marginLeft:3, opacity:0.6}}>your games.  your assets.</Text>
                </View>
                
                <View style={{width:'100%', alignSelf:'center', marginBottom:110}}>
                    <TouchableOpacity style={{width:0.5*WIDTH, height:60, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH)-(0.5*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:10, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{getIn();}}>

                        <Text style={{alignSelf:'center', color:DARK.PRIMARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:30, textAlign:'center',}}>monster</Text>

                    </TouchableOpacity>
                    <View style={{width:0.5*WIDTH, height:60, backgroundColor:DARK.TERTIARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:((WIDTH)-(0.5*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:10}}></View>
                </View>

                <View style={{width:'100%', alignSelf:'center', marginTop:90}}>
                    <TouchableOpacity style={{width:0.6*WIDTH, height:50, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH)-(0.6*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{getIn();}}>

                        <Text style={{alignSelf:'center', color:DARK.PRIMARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>join with wallet</Text>

                    </TouchableOpacity>
                    <View style={{width:0.6*WIDTH, height:50, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:((WIDTH)-(0.6*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
                </View>




                {/* <View style={{width:'100%', alignSelf:'center', marginTop:10}}>
                    <TouchableOpacity style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH)-(0.4*WIDTH))/2, textAlign:'center', fontSize:20, fontFamily:'Biryani-SemiBold', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={join()}>

                        <Text style={{alignSelf:'center', color:DARK.TERTIARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>join</Text>

                    </TouchableOpacity>
                    <View style={{width:0.4*WIDTH, height:50, backgroundColor:DARK.TERTIARY_BUTTON,opacity:0.8 ,position:'absolute', zIndex:1, left:((WIDTH)-(0.4*WIDTH))/2 + 5, top:5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
                </View> */}



            </View>

        </View>:null

  );

};



export default Login;