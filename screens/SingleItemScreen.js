import React from 'react';

import FavoriteButton from '../components/FavoriteButton';
import SingleItem from '../components/SingleItem';

const SingleItemScreen = ({route, navigation}) => {
  const {id, title, posterUrl, plot} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <FavoriteButton
            id={id}
            title={title}
            posterUrl={posterUrl}
            plot={plot}
          />
        );
      },
    });
  }, [navigation]);

  return <SingleItem posterUrl={posterUrl} title={title} plot={plot} />;
};

export default SingleItemScreen;
