import React from 'react';
import {View, StyleSheet} from 'react-native';

import Form from '../components/Form';
import List from '../components/List';
import useFetch from '../hooks/useFetch';

const Home = React.memo(({navigation}) => {
  const [input, setInput] = React.useState('');

  const {movies, addMoviesHandler} = useFetch(
    `https://www.omdbapi.com/?apikey=7d8ece08&t=${input}`,
  );

  return (
    <View style={styles.container}>
      <Form
        input={input}
        setInput={setInput}
        addMoviesHandler={addMoviesHandler}
      />
      <List movies={movies} navigation={navigation} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
});

export default Home;
