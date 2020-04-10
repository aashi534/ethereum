import React,{Component} from 'react';
import Layout from '../../../cmoponents/Layout';
import {Link} from '../../../routes';
import {Button} from 'semantic-ui-react';


class RequestIndex extends Component{
	static async getInitialProps(props){
		const {address}=props.query;
		return {address};
}
	render(){
		return(
		<Layout>
		<h2>Requests</h2>
		<Link route={`/campaigns/${this.props.address}/requests/new`}>
		<a>
			<Button primary>Add request</Button>
		</a>
		</Link>
		</Layout>
	
		);
	}
}
export default RequestIndex;
