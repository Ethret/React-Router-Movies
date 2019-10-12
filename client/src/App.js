import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  const [id, setId] = useState();

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route
        path="/"
        render={ (props) => {
          return <MovieList id={id} {...props}/>
        }}
      />
      <Route
        path ="/movies/:id"
        render={ props => <Movie id={id} {...props} />}
      />
      </div>
    </div>
  );
};

export default App;
