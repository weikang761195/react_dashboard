import React from 'react';
import './Lead.css';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';


const Lead = (props) => {
	return (
		<div>
		    <div className="lead-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-chalkboard-teacher"></i>&nbsp;&nbsp;Total Lead</h5>
			          <div className="card-text text-white lead-data">
			          {props.total_lead}
			          {props.total_lead == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />}      
			          </div>
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Lead;

