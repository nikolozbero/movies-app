import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

const Card = React.memo(({id, title, posterUrl, plot, navigation}) => {
  const cardPressHandler = () => {
    navigation.navigate('SingleItem', {
      id,
      title,
      plot,
      posterUrl,
    });
  };

  return (
    <Pressable onPress={cardPressHandler}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{plot}</Text>
        <Image source={{uri: posterUrl}} style={styles.cardImage} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#bcbcbc',
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    marginBottom: 12,
  },
  cardDesc: {
    textAlign: 'center',
    marginBottom: 12,
  },
  cardImage: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    width: 300,
    height: 300,
  },
});

export default Card;
