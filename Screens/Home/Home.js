import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import {DARK} from '../../Theme/Theme';


const ArtItem = ({art}) => (
  <View style={styles.artItem}>
    <Card image={art.image} height={150} width={150} />
    <Text style={styles.artTitle}>SAMPLE</Text>
    <Text style={styles.artToken}>$MOP 34</Text>
  </View>
);


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const monsterIcon = require('../../assets/images/monsterIcon.png')
const plusIcon = require('../../assets/icons/plusIconNeon.png')
const MARKET_ICON = require('../../assets/icons/marketIcon.png');
const FRIENDS_ICON = require('../../assets/icons/friendsIcon.jpg');
const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";


const Home = ({navigation}) => {
  
  const gamesData = [
    {
      index:0,
      name:'Add Game',
      token:null,
      image: plusIcon,
      imageType:'asset',
      baseColor:DARK.SECONDARY_BUTTON,
    },
    {
      index: 1,
      name: 'Monster Pad',
      token: '$MOP',
      image: monsterIcon,
      imageType:'asset',
      baseColor: '#FF9900',
    },
  ];

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', height:80, justifyContent:'space-between', flexDirection:'row', marginBottom:10}}>

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>your games</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>your games</Text>

        </View>


        <View style={{width:44,height:44, marginRight:24,marginTop:18}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('friends')}}>

                      <Image source={FRIENDS_ICON} style={{width:30, height:30, alignSelf:'center', borderRadius:2}}/>          

                    </TouchableOpacity>
                    <View style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

      </View>

      <View style={{width:WIDTH-24, height:HEIGHT-90, alignSelf:'center'}}>
        <FlatList
          data={gamesData}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={{width:(WIDTH-24)/2,height:(WIDTH-24)/2 + 100, flexDirection:'column',borderColor:'black'}}> 
    
                  <View>
                      <TouchableOpacity style={{width:((WIDTH-24)/2)-20, height:((WIDTH-24)/2)-20, backgroundColor:item.baseColor, position:'absolute', left:10,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{
                        if(item.index == 1){
                          navigation.navigate('gameHome');
                        }
                      }}>
                          {
                          (item.imageType == 'asset')?
                          <Image source={item.image} style={{marginLeft:5,width:((item.name == 'Add Game')?((WIDTH-24)/2)*0.5:((WIDTH-24)/2)-30), height:((item.name == 'Add Game')?((WIDTH-24)/2)*0.5:((WIDTH-24)/2)-30),backgroundColor:item.gameColor,resizeMode:'cover', alignSelf:'center'}}/>
                          :
                          <Image source={{uri:item.image}} style={{marginLeft:5,width:((WIDTH-24)/2)-30, height:((WIDTH-24)/2)-30,backgroundColor:item.gameColor,resizeMode:'cover'}}/>
                          }

                      </TouchableOpacity>
                      <View style={{width:((WIDTH-24)/2)-20, height:((WIDTH-24)/2)-20, backgroundColor:item.baseColor, position:'absolute',zIndex:1,opacity:0.6,left:17,top:7, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                  </View>

                  <View style={{width:((WIDTH-24)/2)-20,borderRadius:3, alignSelf:'center', flexDirection:'row', marginTop:((WIDTH-24)/2), marginLeft:2}}>
                      <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:15, textAlign:'center',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center'}}>{item.name}</Text>
                  </View>

                  {(item.token != null)?
                  <View style={{width:80, height:30, borderRadius:3, alignSelf:'center', flexDirection:'row', marginLeft:2, marginTop:10, backgroundColor:item.baseColor, borderRadius:5}}>
                      <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>{item.token}</Text>
                  </View>:null}

              </View>  
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>

      <View style={{width:44,height:44, right:24, position:'absolute',zIndex:3, bottom:90, elevation:5}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('marketPlace')}}>
                      <Image source={MARKET_ICON} style={{width:35, height:35, alignSelf:'center', borderRadius:2}}/>
                    </TouchableOpacity>
                    <View style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
      </View>


      <View style={{width:44,height:44, right:24, position:'absolute',zIndex:3, bottom:30, elevation:5}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('profile')}}>           
                      <Image source={{uri:DP}} style={{width:35, height:35, alignSelf:'center', borderRadius:2}}/>
                    </TouchableOpacity>
                    <View style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

    </View>
  );
};


export default Home;
