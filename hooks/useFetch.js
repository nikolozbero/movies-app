import React from 'react';

const useFetch = url => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const addMoviesHandler = React.useCallback(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const dataArr = Object.values({json});
        const filteredData = dataArr.filter(item => {
          return !movies.some(stateItem => stateItem.imdbID === item.imdbID);
        });
        if (filteredData.length) {
          setMovies(prev => [...prev, ...filteredData]);
          setLoading(false);
        }
      })
      .catch(err => setError(err));
  }, [movies, url]);

  return {movies, loading, error, addMoviesHandler};
};

export default useFetch;
