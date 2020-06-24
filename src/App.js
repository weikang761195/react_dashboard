import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import tachyons from 'tachyons';
import Logo from './Logo/Logo';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Link ,Switch, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login_Form from './Login_Form';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'username':'',
      'password':'',
      'login_status':'',
      'auth_name':'',
      'list': [],
      'bool': null,
      
    }
  }


  handleUsername = (e) => {
    
    this.setState({
      'username':e.target.value,
    })
  }

  handlePassword = (e) =>{
    var password = e.target.value;
    this.setState({
      'password':password,
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const user = this.state.username;
    const pass = this.state.password;



    axios.post(`http://api.dev.samproperty.com/api/1.0/user/login`, {"username":{user},"password":{pass}})
      .then(res => {
        this.setState({
          'login_status' : res.data.status,
          
        })

        if (this.state.login_status == 'SUCCESS') {

        this.setState({
          'auth_name': res.data.user.display_name,

        })
         // update localStorage

         localStorage.setItem('username', this.state.auth_name);
          this.setState({
          'bool':true,
          'display_name':this.state.auth_name
        })
      }else{

      }
      })


     
  }

  StorageDestroy = () => {
    console.log('destroy');
    localStorage.setItem("username", "");
     window.location.reload(true);
    
  }


  //keep data in App.js
 hydrateStateWithLocalStorage() {
        // get the key's value from localStorage
        let value = localStorage.getItem('username');
       if (value) {
        this.setState({
          'bool':true,
          'display_name':value
        })
       }
  }
   componentWillMount() {
    this.hydrateStateWithLocalStorage();
 }

 componentWillReceiveProps(){
  this.hydrateStateWithLocalStorage();
 }
 //EnD keep data in App.js

 


  render() {
   
    return (
     
     <div>
          {!this.state.bool&& <Login_Form 
                handleUsername = {this.handleUsername}
                handlePassword = {this.handlePassword}
                handleSubmit = {this.handleSubmit}
                login_status = {this.state.login_status}
                display_name = {this.state.auth_name}
              />}
          {this.state.bool && 
                  <Dashboard 
                  display_name = {this.state.display_name} 
                  StorageDestroy = {this.StorageDestroy}
                />}
</div>
         
     
     
 

        
    );
  }
}

export default App;
