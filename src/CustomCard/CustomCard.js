import React,{Component} from 'react';
import './CustomCard.css';
import tachyons from 'tachyons';

class CustomCard extends Component{
	render(){
		return(
			<div className="flex-container ">
				 <div className="card">
			        <div className="card-body">
			          <h5 className="card-title">Card title</h5>
			          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
			          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			         
			        </div>
			      </div>
			</div>
		);
	}
}

export default CustomCard;