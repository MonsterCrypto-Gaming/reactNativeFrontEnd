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


const Marketplace = ({navigation}) => {
  
  const listData = [
    {
      index:0,
      assetName:'Greenip',
      listPrice:30,
      token:'$MOP',
      assetInGameId:'101',
      image: require('../../metaData/monsterAssets/101.png'),
      currentOwnerAddress:'0xbc126537613432166154abc',
      nftId:'0xbc126537613432166154abc718821',
      baseColor:'#FF9900',
      rarity:'Common',
    },
    {
        index:1,
        assetName:'Mythikos',
        listPrice:600,
        token:'$MOP',
        assetInGameId:'112',
        image: require('../../metaData/monsterAssets/112.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xbc12as32ds432166154abc718821',
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
    {
        index:2,
        assetName:'Rabuddaa',
        listPrice:450,
        token:'$MOP',
        assetInGameId:'109',
        image: require('../../metaData/monsterAssets/109.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xa3456213332ds432166154abc718821',
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
    {
        index:3,
        assetName:'Flyfury',
        listPrice:15,
        token:'$MOP',
        assetInGameId:'114',
        image: require('../../metaData/monsterAssets/114.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xa3456213332ds12abc334abc718821',
        baseColor:'#FF9900',
        rarity:'Common',
    },
  ];

  const [searchValue, setSearchValue] = useState('');

  const [reloadValue, setReloadValue] = useState(0);

  const setSearchText = newText => {
    setSearchValue(newText);
  };

  async function buy (item){

  }

  async function reload (){
      
    console.log(reloadValue)
    setReloadValue(reloadValue+1)
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', height:75, justifyContent:'space-between', flexDirection:'row'}}>

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>market</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>market</Text>

        </View>


        <View style={{width:44,height:44, marginRight:24,marginTop:18}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{reload();}}>

                      <Image source={RELOAD_ICON} style={{width:25, height:25, alignSelf:'center', borderRadius:2}}/>          

                    </TouchableOpacity>
                    <View style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

      </View>

      <View style={{width:WIDTH-24, height:55, justifyContent:'space-between', flexDirection:'row', marginBottom:20, alignSelf:'center'}}>

        <View style={{width:'100%', height:55}}>

        <TextInput
            style={{
              width: WIDTH-29,
              height: 50,
              backgroundColor: DARK.PRIMARY_TEXT_INPUT,
              position: 'absolute',
              zIndex: 2,
              left: 0,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Biryani-SemiBold',
              paddingVertical: 0,
              elevation: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 3,
            }}
            placeholderTextColor={'#777777'}
            placeholder={'search asset name or address'}
            underlineColorAndroid="transparent"
            value={searchValue}
            onChangeText={setSearchText}
          />

            <View style={{width:WIDTH-29, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.8 , position:'absolute',zIndex:1, left:5, top:5, borderRadius:3}}></View>
        </View>

      </View>




      <View style={{width:WIDTH-24, height:HEIGHT-150, alignSelf:'center'}}>
        <FlatList
          data={listData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
                (item.assetName.includes(searchValue) || item.nftId.includes(searchValue) || item.currentOwnerAddress.includes(searchValue))?
              <View style={{width:(WIDTH-24),height:(WIDTH-24)/3 + 100, flexDirection:'column',borderColor:'black'}}> 
    
                    <View style={{width:(WIDTH-24), height:(WIDTH-24)/3 + 5, flexDirection:'row'}}>
                        <View style={{width:((WIDTH-24)/3)+5, height:((WIDTH-24)/3)+5, alignSelf:'flex-start'}}>
                            <View style={{width:((WIDTH-24)/3), height:((WIDTH-24)/3), backgroundColor:item.baseColor, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                                {
                                <Image source={item.image} style={{width:((WIDTH-24)/3)-10, height:((WIDTH-24)/3)-10,backgroundColor:item.gameColor,resizeMode:'cover', alignSelf:'center'}}/>
                                }

                            </View>
                            <View style={{width:((WIDTH-24)/3), height:((WIDTH-24)/3), backgroundColor:item.baseColor, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                        <View style={{width:(2*(WIDTH-24)/3)-5,height:(WIDTH-24)/3 + 100, flexDirection:'column'}}>
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:15, textAlign:'left',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>{item.assetName}</Text>
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>nftId: {item.nftId}</Text>
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.TERTIARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>currentOwner: {item.currentOwnerAddress}</Text>
                            
                            <View style={{width:100, height:30, backgroundColor:DARK.PRIMARY_TEXT_INPUT, marginLeft:10, borderRadius:5, marginTop:4, justifyContent:'center'}}>
                                <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:12, textAlign:'center',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center'}}>{item.rarity}</Text>
                            </View>

                        </View>
                    </View>


                  <View style={{width:(WIDTH-24), height:50, borderRadius:3, alignSelf:'center', flexDirection:'row', marginLeft:2, marginTop:10,}}>
                  
                        <View style={{height:30,borderRadius:3, backgroundColor:item.baseColor, alignSelf:'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center', paddingHorizontal:10}}>{item.token}  {item.listPrice}</Text>
                        </View>

                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{buy(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>buy</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                  </View>

              </View> : null
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>

    </View>
  );
};


export default Marketplace;
