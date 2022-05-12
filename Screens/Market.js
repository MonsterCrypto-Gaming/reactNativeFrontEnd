import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {images} from '../assets/styles/global';
import {Card, TopBarView} from '../component';
import {DARK} from '../Theme/Theme';

const Market = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const sampleArtData = [
    {
      index: 0,
      token: '$MOP 15',
      image: images.art_one,
      baseColor: '#FF9900',
      shadowColor: 'rgba(255, 153, 0, 0.6)',
    },
    {
      index: 1,
      token: '$MOP 5',
      image: images.art_six,
      baseColor: '#FF9900',
      shadowColor: 'rgba(255, 153, 0, 0.6)',
    },
    {
      index: 2,
      token: '$MOP 9',
      image: images.art_four,
      baseColor: '#FF9900',
      shadowColor: 'rgba(255, 153, 0, 0.6)',
    },
    {
      index: 3,
      token: '$MOP 6',
      image: images.art_five,
      baseColor: '#FF9900',
      shadowColor: 'rgba(255, 153, 0, 0.6)',
    },
  ];

  const onPress = () => {
    console.log('press');
  };

  return (
    <View>
      <TopBarView headline={'market'} text={'sell an asset'} size={[35, 110]} />
      <View style={styles.searchInputContainer}>
        <Card
          height={60}
          width={350}
          colors={['#272727', 'rgba(39, 39, 39, 0.6)']}>
          <TextInput
            style={styles.searchInput}
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
            placeholder="search a game or tag to buy"
          />
        </Card>
      </View>
      <ScrollView style={styles.mainSection}>
        <View style={styles.artItemContainer}>
          {sampleArtData.map(item => (
            <View style={styles.artItem}>
              <Card
                image={item && item.image}
                height={150}
                width={150}
                colors={[item.baseColor, item.shadowColor]}
              />
              {item.token !== '' && (
                <View style={styles.artTokenContiner}>
                  <Text style={artToken(item.baseColor)}>
                    {item && item.token}
                  </Text>
                  <View style={styles.buyButtonContainer}>
                    <Card
                      height={35}
                      width={60}
                      colors={[
                        DARK.SECONDAY_BACKGROUND_COLOR,
                        DARK.SECONDAY_BACKGROUND_COLOR,
                      ]}>
                      <TouchableOpacity
                        style={styles.buyButton}
                        onPress={onPress}>
                        <Text style={styles.buyButtonText}>Buy</Text>
                      </TouchableOpacity>
                    </Card>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    height: '100%',
  },
  artItemContainer: {
    flex: 1,
    margin: 20,
  },
  artItem: {
    marginVertical: 10,
  },
  artTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 25,
    color: 'white',
  },
  artTokenContiner: {
    alignItems: 'flex-start',
    marginVertical: 30,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  buyButtonContainer: {
    marginLeft: 50,
  },
  buyButton: {
    paddingVertical: 5.5,
  },
  buyButtonText: {
    fontSize: 13,
    lineHeight: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchInputContainer: {
    marginHorizontal: 20,
  },
  searchInput: {
    color: '#787878',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

const artToken = color => ({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: 16,
  marginTop: 4,
  backgroundColor: color,
  width: 'auto',
  paddingHorizontal: 15,
  paddingVertical: 9,
  borderRadius: 3,
});

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Market;
