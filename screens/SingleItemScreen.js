import {View, Text, Image} from 'react-native';
import React from 'react';

const SingleItem = ({route, navigation}) => {
  const {title, posterUrl, plot} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation]);

  return (
    <View>
      <Text>{title}</Text>
      <Text>{plot}</Text>
      <Image source={{uri: posterUrl}} />
    </View>
  );
};

export default SingleItem;
