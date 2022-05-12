import React from 'react';
import {View, ScrollView, FlatList, Text, StyleSheet} from 'react-native';
import {images} from '../assets/styles/global';
import {Card, TopBarView} from '../component';

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
      baseColor: '#FF9900',
      shadowColor: 'rgba(255, 153, 0, 0.6)',
    },
    {
      index: 1,
      name: 'Valorant',
      token: '$VALO 1.2K',
      image: images.art_two,
      baseColor: '#F8424F',
      shadowColor: 'rgba(248, 66, 79, 0.6)',
    },
    {
      index: 2,
      name: 'Clash Royal',
      token: '$CRL 117',
      image: images.art_three,
      baseColor: '#45BDCB',
      shadowColor: 'rgba(69, 189, 203, 0.6)',
    },
    {
      index: 3,
      name: '',
      token: '',
      image: images.plus_icon,
      baseColor: '#272727',
      shadowColor: 'rgba(51, 51, 51, 0.6)',
    },
  ];

  return (
    <View>
      <TopBarView
        headline={'your games'}
        asset={images.user_placeholder}
        size={[40, 40]}
      />
      <ScrollView style={styles.mainSection}>
        <View>
          <FlatList
            data={sampleArtData}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <View style={styles.artItem}>
                  {item && (
                    <>
                      <Card
                        image={item && item.image}
                        height={150}
                        width={150}
                        colors={[item.baseColor, item.shadowColor]}
                      />
                      {item.name !== '' && (
                        <Text style={styles.artTitle}>{item && item.name}</Text>
                      )}
                      {item.token !== '' && (
                        <View style={styles.artTokenContiner}>
                          <Text style={artToken(item.baseColor)}>
                            {item && item.token}
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                </View>
              );
            }}
            keyExtractor={item => item.index}
          />
        </View>
        {/* extra navigation icons */}
        <View style={styles.extraNavContainer}>
          <View style={styles.extraNav}>
            <Card image={images.market_icon} height={50} width={50} />
          </View>
          <View style={styles.extraNav}>
            <Card image={images.bored_ape} height={50} width={50} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    height: '100%',
  },
  artItem: {
    flex: 1,
    margin: 20,
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
  },
  extraNavContainer: {
    alignItems: 'flex-end',
    paddingRight: 40,
    marginBottom: 90,
  },
  extraNav: {
    marginVertical: 20,
  },
});

const artToken = color => ({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: 16,
  marginTop: 4,
  backgroundColor: color,
  width: 'auto',
  padding: 9,
  borderRadius: 4,
});

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Home;
