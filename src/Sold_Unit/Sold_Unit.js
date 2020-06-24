import React from 'react';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';
import './Sold_Unit.css';


const Sold_Unit = (props) => {
	return (
		<div>
		    <div className="sold-unit-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-university"></i>&nbsp;&nbsp;Total Sold unit</h5>
			          <div className="card-text text-white sold-unit-data">
				          {props.total_sold_unit}
				          {props.total_sold_unit == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'}  />}    
			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default Sold_Unit;