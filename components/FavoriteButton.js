import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FavoriteContext} from '../context/context';
import React from 'react';

function FavoriteButton({id, title, posterUrl, plot}) {
  const {favoriteMovies, setFavoriteMovies} = React.useContext(FavoriteContext);

  const existingObj = favoriteMovies.some(movie => movie.title === title);

  function onPressHandler() {
    if (!existingObj) {
      setFavoriteMovies(prev => [...prev, {id, title, posterUrl, plot}]);
    } else {
      setFavoriteMovies(state => state.filter(movie => movie.imdbID === id));
    }
  }

  return (
    <Pressable onPress={onPressHandler}>
      <Icon name={existingObj ? 'heart' : 'heart-o'} size={20} color="red" />
    </Pressable>
  );
}

export default FavoriteButton;
