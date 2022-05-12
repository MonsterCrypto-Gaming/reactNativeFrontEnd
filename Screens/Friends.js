import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {images} from '../assets/styles/global';
import {Card, TopBarView} from '../component';

const Friends = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const sampleArtData = [
    {
      index: 0,
      username: 'ferhat',
      userDomain: 'ferhat.crypto',
      image: images.bored_ape,
      baseColor: '#DBFF00',
      shadowColor: 'rgba(219, 255, 0, 0.6)',
    },
    {
      index: 1,
      username: 'maej',
      userDomain: 'maej.crypto',
      image: images.bored_ape,
      baseColor: '#DBFF00',
      shadowColor: 'rgba(219, 255, 0, 0.6)',
    },
    {
      index: 2,
      username: 'freddie',
      userDomain: 'freddie.crypto',
      image: images.bored_ape,
      baseColor: '#DBFF00',
      shadowColor: 'rgba(219, 255, 0, 0.6)',
    },
    {
      index: 3,
      username: 'marcus',
      userDomain: 'marcus.crypto',
      image: images.bored_ape,
      baseColor: '#DBFF00',
      shadowColor: 'rgba(219, 255, 0, 0.6)',
    },
    {
      index: 4,
      username: 'vitalik',
      userDomain: 'vitalik.crypto',
      image: images.bored_ape,
      baseColor: '#DBFF00',
      shadowColor: 'rgba(219, 255, 0, 0.6)',
    },
  ];

  return (
    <View>
      <TopBarView headline={'friends'} />
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
      <View style={styles.artItemContainer}>
        <FlatList
          data={sampleArtData}
          renderItem={({item}) => {
            return (
              <View key={item.index} style={styles.artItem}>
                <Card
                  image={item && item.image}
                  height={60}
                  width={60}
                  colors={[item.baseColor, item.shadowColor]}
                />
                <View style={styles.content}>
                  <Text style={styles.username}>{item.username}</Text>
                  <Text style={styles.userDomain}>{item.userDomain}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artItemContainer: {
    margin: 20,
    height: '100%',
    paddingBottom: '80%',
  },
  artItem: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  content: {
    marginLeft: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 32,
    color: 'white',
  },
  userDomain: {
    fontSize: 13,
    lineHeight: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#515151',
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

// (WIDTH - 0.4 * WIDTH) / 2 + 5

export default Friends;
