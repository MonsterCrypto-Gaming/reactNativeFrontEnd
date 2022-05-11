import React from 'react';
import {View, ScrollView, FlatList, Text, StyleSheet} from 'react-native';
import {images} from '../assets/styles/global';
import {Card} from '../component';

const ArtItem = ({art}) => (
  <View style={styles.artItem}>
    <Card image={art.image} height={150} width={150} />
    <Text style={styles.artTitle}>SAMPLE</Text>
    <Text style={styles.artToken}>$MOP 34</Text>
  </View>
);

const Home = () => {
  const sampleArtData = [
    {
      index: 0,
      name: 'Monster Pad',
      token: '$MOP 34',
      image: images.art_one,
    },
    {
      index: 1,
      name: 'Valorant',
      token: '$VALO 1.2K',
      image: images.art_two,
    },
    {
      index: 2,
      name: 'Clash Royal',
      token: '$CRL 117',
      image: images.art_three,
    },
  ];

  return (
    <View>
      <View style={styles.topBarPanel}>
        <Text style={styles.headline}>your games</Text>
        <Card image={images.user_placeholder} height={40} width={40} />
      </View>
      <ScrollView style={styles.mainSection}>
        <FlatList
          data={sampleArtData}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={styles.artItem}>
                <Card image={item && item.image} height={150} width={150} />
                <Text style={styles.artTitle}>{item && item.name}</Text>
                <View style={styles.artTokenContiner}>
                  <Text style={styles.artToken}>{item && item.token}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.index}
        />
      </ScrollView>
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
  mainSection: {
    height: '100%',
  },
  artItem: {
    flex: 1,
    margin: 10,
  },
  artTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 25,
    color: 'white',
  },
  artToken: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    marginTop: 15,
    backgroundColor: '#FF9900',
    width: 'auto',
    padding: 9,
    borderRadius: 4,
  },
  artTokenContiner: {
    alignItems: 'flex-start',
  },
});

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Home;
