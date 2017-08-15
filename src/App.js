import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
