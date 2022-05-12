import React from 'react';
import {View, Image} from 'react-native';
import {
  cardContainer,
  cardImageContainer,
  cardImage,
  cardShadow,
} from '../assets/styles/cardStyles';

const Card = ({children, image, height, width, colors}) => {
  const cHeight = height || 30;
  const cWidth = width || 30;
  const cColor = colors || ['#DBFF00', '#DBFF00'];

  return (
    <View style={cardContainer(cHeight, cWidth, cColor)}>
      {image && (
        <View style={cardImageContainer(cHeight, cWidth)}>
          <Image source={image} />
        </View>
      )}
      {children}
      <View style={cardShadow(cHeight, cWidth, cColor)} />
    </View>
  );
};

export default Card;
