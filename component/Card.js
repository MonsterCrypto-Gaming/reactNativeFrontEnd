import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
// import {styles} from '../assets/styles/cardStyles';

// let CUSTOM_HEIGHT = 40;
// let CUSTOM_WIDTH = 40;

const Card = ({image, height, width}) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        CUSTOM_HEIGHT: height,
        CUSTOM_WIDTH: width,
      }}>
      <View style={styles.cardImageContainer}>
        <Image source={image} />
      </View>
      <View style={styles.customBoxShadow} />
    </View>
  );
};

export default Card;

export const styles = (CUSTOM_HEIGHT, CUSTOM_WIDTH) =>
  StyleSheet.create({
    cardContainer: {
      height: CUSTOM_HEIGHT,
      width: CUSTOM_WIDTH,
      borderRadius: 3,
    },
    cardImageContainer: {
      position: 'absolute',
      backgroundColor: '#DBFF00',
      height: CUSTOM_HEIGHT,
      width: CUSTOM_WIDTH,
      borderRadius: 3,
      borderWidth: 2,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    customBoxShadow: {
      width: CUSTOM_WIDTH,
      height: CUSTOM_HEIGHT,
      backgroundColor: 'rgba(219, 255, 0, 0.6)',
      opacity: 0.8,
      position: 'absolute',
      zIndex: -1,
      left: 4.3,
      top: 6,
      borderRadius: 3,
    },
  });
