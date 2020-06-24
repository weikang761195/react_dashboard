import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';


class Login_Form extends Component {
	render(){
		return(
			<div>
			           	<div className='text-center mt-5 body'>
			            <form className="form-signin" onSubmit = {this.props.handleSubmit}>
			                <img className="mb-4" src="sam.png" alt="" width="250" height="95" />
			                <h5 className='text-light das-title'>SAM Dashboard</h5>
			                <br/> { this.props.login_status == 'ERROR' && <Fade left><h5 className='text-warning'>Login fail</h5></Fade>}

			                <label htmlFor="inputUsername" className="sr-only">Username</label>
			                <input type="text" id="inputUsername" className="form-control" placeholder="test Username" name="username" required autoFocus onChange={this.props.handleUsername} />
			                <label htmlFor="inputPassword" className="sr-only">Password</label>
			                <input type="password" id="inputPassword" className="form-control" placeholder="test Password" name='password' required onChange={this.props.handlePassword}/>

			                <button className="btn btn-lg btn-secondary btn-block" type="submit">Sign in</button>
			                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
			          </form>
			          </div> 
			         
			         
           </div>
		);
	}
}

export default Login_Form;