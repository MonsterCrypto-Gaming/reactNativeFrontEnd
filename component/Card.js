import React from 'react';
import {View, Image} from 'react-native';
import {
  cardContainer,
  cardImageContainer,
  cardImage,
  cardShadow,
} from '../assets/styles/cardStyles';

const Card = ({image, height, width, colors}) => {
  const cHeight = height || 30;
  const cWidth = width || 30;
  const cColor = colors || ['#DBFF00', '#DBFF00'];

  return (
    <View style={cardContainer(cHeight, cWidth, cColor)}>
      <View style={cardImageContainer(cHeight, cWidth)}>
        <Image source={image} style={cardImage(cHeight, cWidth)} />
      </View>
      <View style={cardShadow(cHeight, cWidth, cColor)} />
    </View>
  );
};

export default Card;
