import React from 'react';
import Elm from '../../utils/ReactElm';
import ElmComponents from '../Landing.elm';

export default class Main extends React.PureComponent {
  render() {
    return <Elm src={ElmComponents.Elm.Landing} />;
  }
}
