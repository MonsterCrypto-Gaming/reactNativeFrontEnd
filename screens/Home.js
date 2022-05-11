import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {DARK} from '../Theme/Theme';
import {images} from '../assets/styles/global';
import {Card} from '../component';

const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

const Home = () => {
  return (
    <View>
      <View style={styles.topBarPanel}>
        <Text style={styles.headline}>your games</Text>
        <Card image={images.user_placeholder} height={40} width={40} />
        {/* <View style={styles.smallImageContainer}>
          <View style={styles.smallIconContainer}>
            <Image source={images.user_placeholder} />
          </View>
          <View style={styles.customBoxShadow} />
        </View> */}
      </View>
      <View>
        <Text>B</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarPanel: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  headline: {
    color: '#fff',
    fontSize: 26,
    textShadowColor: 'rgba(219, 255, 0, 0.6)',
    textShadowOffset: {width: 1.8, height: 1.5},
    textShadowRadius: 0,
    // fontFamily: 'Biryani-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  // smallImageContainer: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 3,
  // },
  // smallIconContainer: {
  //   position: 'absolute',
  //   backgroundColor: '#DBFF00',
  //   height: 40,
  //   width: 40,
  //   borderRadius: 3,
  //   borderWidth: 2,
  //   borderColor: '#000',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 5,
  // },
  // customBoxShadow: {
  //   width: 40,
  //   height: 38,
  //   backgroundColor: 'rgba(219, 255, 0, 0.6)',
  //   opacity: 0.8,
  //   position: 'absolute',
  //   zIndex: -1,
  //   left: 4.3,
  //   top: 6,
  //   borderRadius: 3,
  // },
});

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Home;
