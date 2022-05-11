import React from 'react';
import {View, Image} from 'react-native';
import {
  cardContainer,
  cardImageContainer,
  cardShadow,
} from '../assets/styles/cardStyles';

const Card = ({image, height, width}) => {
  const cHeight = height || 30;
  const cWidth = width || 30;

  return (
    <View style={cardContainer(cHeight, cWidth)}>
      <View style={cardImageContainer(cHeight, cWidth)}>
        <Image source={image} />
      </View>
      <View style={cardShadow(cHeight, cWidth)} />
    </View>
  );
};

export default Card;
