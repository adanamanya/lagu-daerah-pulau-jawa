import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tentang from './components/Tentang';
import Profil from './components/Profil';
import Vidsjkt from'./components/Vidsjkt';
import Vidsjatim from'./components/Vidsjatim';
import Vidsjateng from'./components/Vidsjateng';
import Menu from './components/menu';
import Listjateng from './components/Listjateng';
import Listjakarta from './components/Listjakarta';
import Listjatim from './components/Listjatim';
import Home from './components/Home';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const Example = () => {
  return (
    <Router createReducer={reducerCreate} tintColor='red' getSceneStyle={getSceneStyle}>
            <Scene key="root" hideNavBar hideTabBar>
              <Scene key="menu" component={Menu} title="Menu"/>
              <Scene key="home" component={Home} title="Home" initial/>
              <Scene key="vidsjkt" component={Vidsjkt} title="Video"/>
              <Scene key="vidsjatim" component={Vidsjatim} title="Video"/>
              <Scene key="vidsjateng" component={Vidsjateng} title="Video"/>
              <Scene key="profil" component={Profil} title="Profil"/>
              <Scene key="tentang" component={Tentang} title="Tentang"/>
              <Scene key="listjakarta" component={Listjakarta} title="Jakarta"/>
              <Scene key="listjatim" component={Listjatim} title="Jawa Timur"/>
              <Scene key="listjateng" component={Listjateng} title="Jawa Tengah"/>
            </Scene>
    </Router>
  );
}

export default Example;
