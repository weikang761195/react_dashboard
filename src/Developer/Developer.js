import React from 'react';
import './Developer.css';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';


const Developer = (props) => {
	return (
		<div>
		    <div className="developer-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fab fa-connectdevelop"></i>&nbsp;&nbsp;Total Developer</h5>
			          <div className="card-text text-white developer-data">
			          {props.total_developer}
			          {props.total_developer == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />}      
			          </div>
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Developer;

