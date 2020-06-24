import React,{Component} from 'react';
import './Sold_GDV_Graph.css';
import tachyons from 'tachyons';
import {Line} from 'react-chartjs-2';


class Sold_GDV_Graph extends Component {
	constructor(props){
		super(props);
		this.state = {
			 ChartData : {
		      labels : [],
		      datasets : [
		        {
		          type: 'line',
		          label:'Total sold GDV',
		          data:[],
		         
		         
		        }  
		      ],
		    
		    }
		}

	}
	componentDidMount(){
	this.set_data(this.props)
	
}

componentWillReceiveProps(nextProps){
   this.set_data(nextProps);
  }

set_data = (props) => {
	const month = Object.keys(props.sold_gdv_2018);
	const gdv = Object.values(props.sold_gdv_2018);
	

	this.setState({
		 ChartData : {
		      labels : ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
		      datasets : [
		        {
		          type: 'line',
		          label:'Total sold gdv',
		          borderColor: 'rgb(234, 187, 56)',
		          backgroundColor: 'rgba(237, 204, 113,0.5)',
		          data: gdv,
		          
		         
		        }  
		      ],
		     
		    }
	})
	
}
	render(){
		return (
		<div>
		    <div className="sold-graph-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-chart-line"></i>&nbsp;&nbsp;Sold GDV Graph [ 2018 ]</h5>
			          <div className="card-text text-white sold-graph-data">
			          <Line
						    data={this.state.ChartData}
						    width={100}
						    height={160}
						    options={{
						    	 scales: {
								    yAxes: [{
								      scaleLabel: {
								        display: true,
								        labelString: 'GDV (RM)/ million'
								      }
								    }],
								     xAxes: [{
								      scaleLabel: {
								        display: true,
								        labelString: 'month'
								      }
								    }]
								  },

						        maintainAspectRatio: false,
						         tooltips: {
						          callbacks: {
						          	  title: function(tooltipItem, data) {
								           return data['labels'][tooltipItem[0]['index']];
								        },
								       label: function(tooltipItem, data) {
								          return '[ RM ' + data['datasets'][0]['data'][tooltipItem['index']] + ' million ]'; ;

								        },
								    
						         	},
							      backgroundColor: '#FFF',
							      titleFontSize: 16,
							      titleFontColor: 'rgba(237, 204, 113,1)',
							      bodyFontColor: '#000',
							      bodyFontSize: 14,
							      displayColors: false,

							    }
						    }}

						/>
			          </div>
			        </div>
			      </div>
			</div>
		</div>
	);
	}
	
}

export default Sold_GDV_Graph;

