import React , { useState,useRef } from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {DARK} from '../../Theme/Theme';
import { useWalletConnect } from '@walletconnect/react-native-dapp';




const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const monsterIcon = require('../../assets/images/monsterIcon.png')
const plusIcon = require('../../assets/icons/plusIconNeon.png')
const MARKET_ICON = require('../../assets/icons/marketIcon.png');
const FRIENDS_ICON = require('../../assets/icons/friendsIcon.jpg');
const RELOAD_ICON = require('../../assets/icons/reloadIcon.png');
const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";


const BuyPack = ({navigation}) => {
  
  let monstersOwned = [
    {
      index:0,
      assetName:'Greenip',
      count:28,
      assetInGameId:'101',
      image: require('../../metaData/monsterAssets/101.png'),
      nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',,'0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
      baseColor:'#FF9900',
      rarity:'Common',
    },
    {
        index:1,
        assetName:'Bloonip',
        count:3,
        assetInGameId:'102',
        image: require('../../metaData/monsterAssets/102.png'),
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
        baseColor:'#FF9900',
        rarity:'Rare',
      },
    {
        index:2,
        assetName:'Terapartor',
        count:14,
        assetInGameId:'115',
        image: require('../../metaData/monsterAssets/115.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
        baseColor:'#FF9900',
        rarity:'Common',
    },
    {
        index:3,
        assetName:'Champlava',
        count:2,
        assetInGameId:'106',
        image: require('../../metaData/monsterAssets/106.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821'],
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
  ];

  const [monsterAssets, setMonsterAssets] = useState(monstersOwned);

  const [reloadValue, setReloadValue] = useState(0);

  const connector = useWalletConnect();

  const domainName = connector.accounts[0];

  async function buy (item){

  }

  async function reload (){
      
    console.log(reloadValue)
    setReloadValue(reloadValue+1)
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', justifyContent:'space-between', flexDirection:'column'}}>

        <View style={{marginLeft:24, height:20,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Monster Pad</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>Monster Pad</Text>

        </View>
      </View>


    {/* <View style={{width:WIDTH-24, height:44, flexDirection: 'row', marginBottom:10}}>

        <View style={{width:105,height:44, marginTop:20, marginLeft:10}}>
                        <TouchableOpacity style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('buyPack')}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Buy Pack</Text>        

                        </TouchableOpacity>
                        <View style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

    
    </View> */}

    <View style={{width:WIDTH-24, alignSelf:'center', marginTop:24,}}>

        <View style={{marginLeft:10, height:45,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>pack mechanics</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>pack mechanics</Text>
        </View>

        <View style={{width:260,height:44, marginTop:10,marginBottom:15, marginLeft:10}}>
                        <TouchableOpacity style={{width:260, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('buyPack')}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Buy a pack with two monsters</Text>        

                        </TouchableOpacity>
                        <View style={{width:260, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Common 60%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Common 60%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/101.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/104.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

            
            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/107.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/113.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/114.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>


          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/115.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>


        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Rare 25%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Rare 25%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/110.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/111.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>

        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Ultra Rare 15%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Ultra Rare 15%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/112.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>

    </View>


    </View>
  );
};


export default BuyPack;
