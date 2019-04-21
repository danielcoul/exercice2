import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

		constructor(){
			// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA3mnFxId6s944dPiwc1nQPv4IuzHEQRcw",
    authDomain: "exercice-43dc2.firebaseapp.com",
    databaseURL: "https://exercice-43dc2.firebaseio.com",
    projectId: "exercice-43dc2",
    storageBucket: "exercice-43dc2.appspot.com",
    messagingSenderId: "380560310214"
  };
  firebase.initializeApp(config);
		}




}
