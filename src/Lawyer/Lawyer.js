import React from 'react';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';
import './Lawyer.css';


const Lawyer = (props) => {
	return (
		<div>
		    <div className="lawyer-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-gavel"></i>&nbsp;&nbsp;Total Lawyer</h5>
			          <div className="card-text text-white data">
				          {props.total_lawyer}
				          {props.total_lawyer == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />}    
			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Lawyer;