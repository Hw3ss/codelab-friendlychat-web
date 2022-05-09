/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  const firebaseConfig = {
  apiKey: "AIzaSyACN0jPVz5wUd754G5Ms709yHCA4HtvORw",
  authDomain: "friendly-chat-47420.firebaseapp.com",
  projectId: "friendly-chat-47420",
  storageBucket: "friendly-chat-47420.appspot.com",
  messagingSenderId: "578095008714",
  appId: "1:578095008714:web:1e492830c2ef3a07289d33",
  measurementId: "G-D2MY132ZG4"
};
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
