import firebase from 'firebase';
import {initialState} from './redux/reducers/itemsReducer';

class fbManager {
  constructor() {
    console.log('new manager');
  }

  init(setUser) {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBKglDHKQalwTKYwo9VgbQZn9bo_Zyh2Fk",
      authDomain: "todo-6fc3f.firebaseapp.com",
      databaseURL: "https://todo-6fc3f.firebaseio.com",
      projectId: "todo-6fc3f",
      storageBucket: "",
      messagingSenderId: "816418465201"
    };

    firebase.initializeApp(config);

    this.database = firebase.database();
    this.subscribeToAuth(setUser);
  }
  
  subscribeToAuth = (setUser) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // fire action for set user
        setUser(user);
      } else {
        // User is signed out.
        // fire action for logout
      }
    });
  };

  get(path) {
    return this.database.ref(path).once('value');
  }

  subscribe(path, callback) {
    this.database.ref(path).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  add(item) {
    console.log(item);
    //this.database.ref('items/' + item.id).set(item);
    this.database.ref('items/').push(item);
  }

  // https://firebase.google.com/docs/reference/js/firebase.database.Reference#remove
  remove(id) {
    return this.database.ref(`/items/${id}`).remove();
  }

  reset() {
    this.database.ref('items').set(initialState);
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {});
  }
}

export default fbManager;