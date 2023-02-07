import {Text, View, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectWatched} from '../redux/reducers/watched/watched.selectors';
function WatchedScreen() {
  const watched = useSelector(selectWatched);

  return (
    <FlatList
      data={watched}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.plot}>{item.plot}</Text>
          <Image source={{uri: item.posterUrl}} style={styles.image} />
        </View>
      )}
    />
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

export default WatchedScreen;
