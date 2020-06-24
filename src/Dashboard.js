import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import tachyons from 'tachyons';
import SearchBar from './Searchbar/SearchBar';
import Developer from './Developer/Developer';
import User from './User/User';
import Lead from './Lead/Lead';
import Agent from './Agent/Agent';
import Lawyer from './Lawyer/Lawyer';
import Sold_Unit from './Sold_Unit/Sold_Unit';
import Sold_GDV from './Sold_GDV/Sold_GDV';
import SPA_Unit from './SPA_Unit/SPA_Unit';
import SPA_GDV from './SPA_GDV/SPA_GDV';
import Sold_GDV_Graph from './Sold_GDV_Graph/Sold_GDV_Graph';
import Lead_7_graph from './Lead_7_graph/Lead_7_graph';
import Book_7_graph from './Book_7_graph/Book_7_graph';
import Logo from './Logo/Logo';
import Login from './Login';
import Profile from './Profile/Profile';
import { BrowserRouter, Route, Link  } from 'react-router-dom';



class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      'search_dev':'',
      'total_developer':'',
      'total_user':'',
      'total_agent':'',
      'total_lawyer':'',
      'total_lead':'',
      'total_sold_unit':'',
      'total_sold_gdv':'',
      'total_spa_unit':'',
      'total_spa_gdv':'',
      'annual_sold_gdv':'',
      'lead_7_data':'',
      'book_7_data' :'',
      'load_gdv_2018' :'',
    }
  }

  componentDidMount(){
   this.interval = setInterval(() => this.load_api(), 5000);
   this.load_api();
   this.interval = setInterval(() => this.load_7_days_lead(), 5000);
   this.load_7_days_lead();
   this.interval = setInterval(() => this.load_7_days_book(), 5000);
   this.load_7_days_book();
   this.interval = setInterval(() => this.load_gdv_2018(), 5000);
   this.load_gdv_2018();
   

   
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

 // http://sale1.test
 // https://stephanie.samproperty.com

  load_api = () => {
     axios.get(`https://stephanie.samproperty.com/api/dashboard`).then(res => {
          this.setState({
            'total_developer':res.data.total_developer,
            'total_user':res.data.total_user,
            'total_agent':res.data.total_agent,
            'total_lawyer':res.data.total_lawyer,
            'total_lead':res.data.total_lead,
            'total_sold_unit':res.data.total_sold_unit,
            'total_sold_gdv':(res.data.total_sold_gdv/1000000).toFixed(2),
            'total_spa_unit':(res.data.total_spa_unit),
            'total_spa_gdv':(res.data.total_spa_gdv/1000000).toFixed(2),
          })
        })
  }

  load_7_days_lead = () => {
    axios.get(`https://stephanie.samproperty.com/api/past_7_lead_count`).then(res => {
         // console.log(res.data)
         this.setState({
          'lead_7_data' : res.data,
         })
        })
  }
 load_7_days_book = () => {
    axios.get(`https://stephanie.samproperty.com/api/past_7_book_count`).then(res => {
        
         this.setState({
          'book_7_data' : res.data,
         })
        })
  }

  load_gdv_2018 = () => {
     axios.get(`https://stephanie.samproperty.com/api/sold_gdv_2018`).then(res => {
      console.log(res.data);
         this.setState({
          'load_gdv_2018' : res.data,
         })
        })
  }
  


  developerSearch = (event)=>{
    var search_dev = event.target.value;
    this.setState({
      search_dev : search_dev,
    })
   
  }



  render() {
    return (

      
      
      <div className='dashboard'>
        <div className="flex-container">
          <div><Logo /></div>
          <Developer total_developer = {this.state.total_developer} />
          <User total_user = {this.state.total_user} />
          <Agent total_agent = {this.state.total_agent} />
          <Lawyer total_lawyer = {this.state.total_lawyer} />
        </div>
        <div className="flex-container">
          <Sold_Unit total_sold_unit = {this.state.total_sold_unit} />
          <Sold_GDV total_sold_gdv = {this.state.total_sold_gdv} />
          <SPA_Unit total_spa_unit = {this.state.total_spa_unit} />
          <SPA_GDV total_spa_gdv = {this.state.total_spa_gdv} />
          <Lead total_lead = {this.state.total_lead} />
        </div>
         <div className="flex-container">
          <Book_7_graph book_7_data = {this.state.book_7_data} />
          <Lead_7_graph lead_7_data = {this.state.lead_7_data} />
          <Profile 
             display_name = {this.props.display_name}
             StorageDestroy = {this.props.StorageDestroy}
           />
        </div>
         <div className="flex-container">
          <Sold_GDV_Graph  sold_gdv_2018 = {this.state.load_gdv_2018} />
        
        </div>
       
        
      </div>
 
    );
  }
}

export default Dashboard;
