import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import userStore from '../../stores/UserStore';
import Provider from './Provider';

import NavBar from '../NavBar/NavBar.jsx';

export const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <Provider userStore={userStore}>
            <NavBar pathname={matchProps.location.pathname} {...matchProps} />
            <Component {...matchProps} />
          </Provider>
        );
      }}
    />
  );
};

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
