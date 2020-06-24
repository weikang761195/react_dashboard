import React from 'react';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';
import './SPA_Unit.css';


const SPA_Unit = (props) => {
	return (
		<div>
		    <div className="spa-unit-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-university"></i>&nbsp;&nbsp;Total SPA Unit</h5>
			          <div className="card-text text-white spa-unit-data">
			          {props.total_spa_unit}
			          {props.total_spa_unit == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />} 
			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default SPA_Unit;