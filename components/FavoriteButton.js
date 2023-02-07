import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {setFavoriteMovie} from '../redux/reducers/favorites/favorites.actions';
import {selectFavorites} from '../redux/reducers/favorites/favorites.selectors';

function FavoriteButton({id, title, posterUrl, plot}) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const values = {id, title, posterUrl, plot};

  return (
    <Pressable onPress={() => dispatch(setFavoriteMovie(values))}>
      <Icon
        name={favorites.isFavorite ? 'heart' : 'heart-o'}
        size={20}
        color="red"
      />
    </Pressable>
  );
}

export default FavoriteButton;
