import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Book_7_graph.css';
import {Line} from 'react-chartjs-2';


class Book_7_graph extends Component {
	constructor(props){
		super(props);
		this.state = {
			 ChartData : {
		      labels : [],
		      datasets : [
		        {
		          type: 'line',
		          label:'Total lead',
		          data:[],
		         
		        }  
		      ],
		      projectSelected : {
		        phase :[]
		      },
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
	const date = Object.keys(props.book_7_data);
	const book = Object.values(props.book_7_data);
	this.setState({
		 ChartData : {
		      labels : date,
		      datasets : [
		        {
		          type: 'line',
		          label:'Total book',
		          borderColor: 'rgb(234, 187, 56)',
		          backgroundColor: 'rgba(237, 204, 113,0.5)',
		          data: book,
		         
		        }  
		      ],
		      projectSelected : {
		        phase :[]
		      },
		    }
	})

}

render(){
	return (
		<div>
		    <div className="book-7-graph-card">
				 <div className="">
			        <div className="">
			          <h5 className="card-title"></h5>
			          <h5 className="card-subtitle mb-2 text-muted"><i className="fas fa-chart-line"></i>&nbsp;&nbsp;Past 7 days Book Report</h5>
			          <div className="card-text text-white book-7-graph-data">
			          <Line
						    data={this.state.ChartData}
						    width={100}
						    height={160}
						    options={{
						        maintainAspectRatio: false,
						          scales: {
							        yAxes: [{
							            ticks: {
							                beginAtZero: true
							            }
							        }]
							    }
						    }}
						/>
			          </div>
			        </div>
			      </div>
			</div>
		</div>
	)
}
	
}

export default Book_7_graph;

