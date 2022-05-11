import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {images} from '../assets/styles/global';
import {Card} from '../component';

const Home = () => {
  return (
    <View>
      <View style={styles.topBarPanel}>
        <Text style={styles.headline}>your games</Text>
        <Card image={images.user_placeholder} height={40} width={40} />
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
});

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Home;
