import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {

	return (
		<div>
		    <div className="profile-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Profile</h5>
			          <div className="card-text text-white profile-data">
			              <h6 className='welcome'>Welcome, {props.display_name}</h6>
				          <i className="fas fa-user-alt"></i>
				          &nbsp;
				          <button  className="btn btn-warning btn-sm text-light" to='/' onClick={props.StorageDestroy}>Logout</button> 

				          

			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Profile;