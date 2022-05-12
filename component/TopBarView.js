import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './Card';

const TopBarView = ({headline, asset = null, text = null, size}) => {
  return (
    <View style={styles.topBarPanel}>
      <Text style={styles.headline}>{headline}</Text>
      {asset && <Card image={asset} height={size[0]} width={size[1]} />}
      {/* {asset && <Card image={asset} height={size[0]} width={size[1]} />} */}
      {text && (
        <Card image={asset} height={size[0]} width={size[1]}>
          <Text style={styles.text}>{text}</Text>
        </Card>
      )}
    </View>
  );
};

export default TopBarView;

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
  text: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 23,
    textAlign: 'center',
    paddingVertical: 5,
    flex: 1,
  },
});
