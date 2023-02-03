import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import {FavoriteContext} from '../context/context';

function FavoritesScreen() {
  const {favoriteMovies} = React.useContext(FavoriteContext);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={favoriteMovies}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.plot}>{item.plot}</Text>
            <Image source={{uri: item.posterUrl}} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    borderWidth: 1,
    borderColor: '#bcbcbc',
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    alignItems: 'center',
  },
  title: {fontSize: 24},
  plot: {textAlign: 'center', marginVertical: 12},
  image: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    width: 300,
    height: 300,
  },
});

export default FavoritesScreen;
