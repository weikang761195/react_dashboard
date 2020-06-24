import React from 'react';
import { ClipLoader } from 'react-spinners';
import './User.css';

const User = (props) => {
	return (
		<div>
		    <div className="user-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-users"></i>&nbsp;&nbsp;Total User</h5>
			          <div className="card-text text-white data">
				          {props.total_user}
				          {props.total_user === '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'}  />}    
			          </div>
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default User;