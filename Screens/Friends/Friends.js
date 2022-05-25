import React , { useState,useRef } from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {DARK} from '../../Theme/Theme';




const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const monsterIcon = require('../../assets/images/monsterIcon.png')
const plusIcon = require('../../assets/icons/plusIconNeon.png')
const MARKET_ICON = require('../../assets/icons/marketIcon.png');
const FRIENDS_ICON = require('../../assets/icons/friendsIcon.jpg');
const RELOAD_ICON = require('../../assets/icons/reloadIcon.png');
const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";


const Friends = ({navigation}) => {
  

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', height:75, justifyContent:'space-between', flexDirection:'row'}}>

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>friends</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>friends</Text>

        </View>

      </View>

      <Text style={{width:'100%',textAlign: 'center',fontFamily:'Biryani-Bold', fontSize:20, color:DARK.TERTIARY_TEXT_COLOR, left:0}}>On the Way...</Text>

    </View>
  );
};


export default Friends;
