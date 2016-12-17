import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import Login from './components/login';
import Main from './components/main';
import {styles} from './style';

const onRight = () => {
  Actions.main();
  // let dbURL = "http://localhost:5810/github/"
}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='login'
          component={Login}
          title='Login'
          initial='true'
          rightButtonTextStyle={styles.title}
          rightTitle='&#xf013;'
          onRight={onRight} />
        <Scene
          key='main'
          component={Main}
          title='Main' />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
