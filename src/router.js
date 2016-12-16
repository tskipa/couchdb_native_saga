import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import Login from './components/login';
import Main from './components/main';
import {styles} from './style';

const onRight = () => {
  Actions.main();
  let dbURL = "http://localhost:5810/github/"
  // fetch(dbURL).then((response) => {
  //   if (response.status !== 200) {
  //     return fetch(dbURL, {method:"PUT"})
  //     .then((response) => response.json()).then((data) => {
  //       console.log("create db", data)
  //       return data;
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   }
  // });
  // fetch(dbURL, {method:"POST", body : JSON.stringify({name: 'მთავარი გვერდი'})})
  // .then((response) => response.json()).then((data) => {
  //   console.log("create document", data)
  //   return data;
  // }).catch(err => {
  //   console.log(err);
  // });
  fetch(dbURL + '_all_docs?include_docs=true')
  .then((response) => response.json()).then((data) => {
    var docs = data.rows.map((row) => (row.doc));
    console.log('all documents', docs);
    return docs;
  }).catch(err => {
    console.log(err);
  });
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
