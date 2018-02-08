import firebase from 'firebase';

class fbManager {
  constructor() {
    console.log('new manager');
    this.init();
  }

  init() {
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
  }

  get(path) {
    return this.database.ref(path).once('value');
  }

  subscribe(path, callback) {
    this.database.ref(path).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }
}

export default fbManager;