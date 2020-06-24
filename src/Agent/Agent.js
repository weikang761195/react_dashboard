import React from 'react';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';
import './Agent.css';


const Agent = (props) => {
	return (
		<div>
		    <div className="agent-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fab fa-magento"></i>&nbsp;&nbsp;Total Agent</h5>
			          <div className="card-text text-white data">
			          {props.total_agent}
			          {props.total_agent == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />}
			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Agent;