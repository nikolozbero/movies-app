import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

function SingleItem({posterUrl, title, plot}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: posterUrl}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.plot}>{plot}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {fontSize: 22, textAlign: 'center', marginVertical: 12},
  plot: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500,
    borderWidth: 2,
    borderColor: '#bcbcbc',
    borderRadius: 12,
  },
});

export default SingleItem;
