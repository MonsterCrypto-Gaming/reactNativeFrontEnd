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


const GameHome = ({navigation}) => {
  
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

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Monster Pad</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>Monster Pad</Text>

        </View>
      </View>



    <View style={{width:WIDTH-24, alignSelf:'center', height:50, marginTop:5,}}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={[{key:0,assetid:'101', image:require('../../metaData/monsterAssets/101.png')},
            {key:1,assetid:'102', image:require('../../metaData/monsterAssets/102.png')},
            {key:2,assetid:'103', image:require('../../metaData/monsterAssets/103.png')},
            {key:3,assetid:'104', image:require('../../metaData/monsterAssets/104.png')},
            {key:4,assetid:'105', image:require('../../metaData/monsterAssets/105.png')},
            {key:5,assetid:'106', image:require('../../metaData/monsterAssets/106.png')},
            {key:6,assetid:'107', image:require('../../metaData/monsterAssets/107.png')},
            {key:7,assetid:'108', image:require('../../metaData/monsterAssets/108.png')},
            {key:8,assetid:'109', image:require('../../metaData/monsterAssets/109.png')},
            {key:9,assetid:'110', image:require('../../metaData/monsterAssets/110.png')},
            {key:10,assetid:'111', image:require('../../metaData/monsterAssets/111.png')},
            {key:11,assetid:'112', image:require('../../metaData/monsterAssets/112.png')},
            {key:12,assetid:'113', image:require('../../metaData/monsterAssets/113.png')},
            {key:13,assetid:'114', image:require('../../metaData/monsterAssets/114.png')},
            {key:14,assetid:'115', image:require('../../metaData/monsterAssets/115.png')}]}
            style={{width:'100%', alignSelf:'center', height:'100%'}}

            renderItem={({item,index})=>{

            return(
            <Image source={item.image} style={{width:50, height:50, marginHorizontal:10}}></Image>);
            }}
        />

    </View>

    <View style={{width:WIDTH-24, height:44, flexDirection: 'row', marginBottom:10}}>

        <View style={{width:105,height:44, marginTop:20, marginLeft:24}}>
                        <TouchableOpacity style={{width:100, height:40, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Play Game</Text>        

                        </TouchableOpacity>
                        <View style={{width:100, height:40, backgroundColor:DARK.TERTIARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

        <View style={{width:105,height:44, marginTop:20, marginLeft:10}}>
                        <TouchableOpacity style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('buyPack')}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Buy Pack</Text>        

                        </TouchableOpacity>
                        <View style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

    
    </View>

    <View style={{width:WIDTH-24, alignSelf:'center', marginTop:24,}}>

        <View style={{marginLeft:10, height:45,width:200 }}>

            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>your monsters</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>your monsters</Text>

        </View>

        <View style={{marginLeft:10, height:20,width:'100%' }}>
            <Text style={{width:'62%',fontSize:13, fontFamily:'Biryani-Bold', color:DARK.TERTIARY_TEXT_COLOR, textAlign: 'left', alignSelf:'flex-start'}} ellipsizeMode='middle' numberOfLines={1} >{domainName}</Text>
        </View>



    </View>

    <View style={{width:WIDTH-24, height:HEIGHT-267, alignSelf:'center', marginTop:10}}>
        <FlatList
          data={monstersOwned}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {

            let evolvesAt = null;
            let evolveAvailable = false;
            if((item.rarity=='Common'))
            {
                if(item.assetInGameId=='101'||item.assetInGameId=='104'||item.assetInGameId=='107')
                {
                    evolvesAt = 20
                    if(item.count >= 20){
                        evolveAvailable = true;
                    }
                }
            }

            if((item.rarity=='Rare'))
            {
                if(item.assetInGameId=='102'||item.assetInGameId=='105'||item.assetInGameId=='108')
                {
                    evolvesAt = 5
                    if(item.count >= 5){
                        evolveAvailable = true;
                    }
                }
            }

            return (
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
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>level: {item.count}</Text>
                            {(evolvesAt!=null)?
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.TERTIARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>evolves at: {evolvesAt}</Text>:null}
                            
                            <View style={{width:100, height:30, backgroundColor:DARK.PRIMARY_TEXT_INPUT, marginLeft:10, borderRadius:5, marginTop:4, justifyContent:'center'}}>
                                <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:12, textAlign:'center',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center'}}>{item.rarity}</Text>
                            </View>

                        </View>
                    </View>


                  <View style={{width:(WIDTH-24), height:50, borderRadius:3, alignSelf:'center', flexDirection:'row', marginLeft:2, marginTop:10,}}>
                            
                        {(evolveAvailable == true)?
                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{buy(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>evolve</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>:null}

                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{buy(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>list/sell</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                  </View>

              </View>
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>

    </View>
  );
};


export default GameHome;
