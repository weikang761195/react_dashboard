import React from 'react';
import { ClipLoader } from 'react-spinners';
import tachyons from 'tachyons';
import './SPA_GDV.css';


const SPA_GDV = (props) => {
	return (
		<div>
		    <div className="spa-gdv-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-hand-holding-usd"></i>&nbsp;&nbsp;Total SPA GDV</h5>
			          <div className="card-text text-white spa-gdv-data">
			           RM {props.total_spa_gdv}{props.total_spa_gdv == '' && <ClipLoader color={'rgba(157, 164, 173,0.3)'} />} M
			          </div>   
			        </div>
			      </div>
			</div>
		</div>
	)
}

export default SPA_GDV;