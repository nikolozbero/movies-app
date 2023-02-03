import React from 'react';
import {View, StyleSheet} from 'react-native';

import Form from '../components/Form';
import List from '../components/List';

const Home = React.memo(({navigation}) => {
  const [input, setInput] = React.useState('');
  const [movies, setMovies] = React.useState([]);

  const addMoviesHandler = React.useCallback(() => {
    fetch(`https://www.omdbapi.com/?apikey=7d8ece08&t=${input}`)
      .then(res => res.json())
      .then(json => {
        const dataArr = Object.values({json});
        const filteredData = dataArr.filter(item => {
          return !movies.some(stateItem => stateItem.imdbID === item.imdbID);
        });
        if (filteredData.length) {
          setMovies(prev => [...prev, ...filteredData]);
          setInput('');
        }
      })
      .catch(err => console.log(err));
  }, [input, movies]);

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
