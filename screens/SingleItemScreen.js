import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const SingleItem = ({route, navigation}) => {
  const {title, posterUrl, plot} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: posterUrl}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.plot}>{plot}</Text>
      </View>
    </ScrollView>
  );
};

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
  },
});

export default SingleItem;
