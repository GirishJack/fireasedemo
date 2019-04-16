import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBt3aRxOR9-Zdpl1AXSdxV7-2iJju6ElOM",
    authDomain: "fir-demo-eaa38.firebaseapp.com",
    databaseURL: "https://fir-demo-eaa38.firebaseio.com",
    projectId: "fir-demo-eaa38",
    storageBucket: "fir-demo-eaa38.appspot.com",
    messagingSenderId: "858671778882"
  };

let app= Firebase.initializeApp(config);
export const db = app.database();