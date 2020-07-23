import React, { Component }from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey:"AIzaSyD8DnHp9y8K0P1dq4b7mml9S7CZKhSNBKM",
  authDomain:"fir-auth-react-e5a7d.firebaseapp.com"
})

class App extends Component {
  state = {isSignedIn : false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions : [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => { 
    firebase.auth().onAuthStateChanged( user => {
      this.setState({isSignedIn: !! user})
    })
  }

  

  render(){

  return (
    <div className="App">
      {this.state.isSignedIn ?(
        <span>
      <div>Logeado!!!</div>
      <button onClick={() => { 
        firebase.auth().signOut()
        }}>Salir</button>
        <img alt="picture" src={firebase.auth().currentUser.photoURL} />
        <h1>Bienvenido {firebase.auth().currentUser.displayName}</h1>
      </span>
      )       
      :(
       <StyledFirebaseAuth
       uiConfig={this.uiConfig}
       firebaseAuth={firebase.auth()}
       />

      )}      
    </div>
  );
}
}
export default App;
