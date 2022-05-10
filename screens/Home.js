import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Home = () => {
  return (
    <View>
      <View style={styles.topBarPanel}>
        <Text style={styles.headline}>your games</Text>
        <View style={styles.smallImageContainer}>
          <Image />
        </View>
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
  smallImageContainer: {
    backgroundColor: '#DBFF00',
    height: 40,
    width: 40,
    border: 1,
    borderColor: '#000',
    borderRadius: 3,
    shadowColor: 'rgba(219, 255, 0, 0.6)',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    // shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
