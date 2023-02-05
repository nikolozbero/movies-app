import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

function FavoriteButton({id, title, posterUrl, plot}) {
  return (
    <Pressable onPress={() => {}}>
      <Icon name={'heart-o'} size={20} color="red" />
    </Pressable>
  );
}

export default FavoriteButton;
