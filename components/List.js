import {StyleSheet, View, FlatList} from 'react-native';

import Card from './Card';

const List = ({movies, navigation}) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => (
          <Card
            id={item.imdbID}
            title={item.Title}
            posterUrl={item.Poster}
            plot={item.Plot}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#10162f',
    paddingTop: 2,
  },
});

export default List;
