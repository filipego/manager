import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB9MN2c_Jh6H0Ut266EYI9WwZdL3rER6gc',
      authDomain: 'manager-7c33b.firebaseapp.com',
      databaseURL: 'https://manager-7c33b.firebaseio.com',
      projectId: 'manager-7c33b',
      storageBucket: 'manager-7c33b.appspot.com',
      messagingSenderId: '598938197029'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}


export default App;
