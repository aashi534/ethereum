import React,{Component} from 'react';
import Layout from '../../../components/Layout;
import {Form,Input,Message,Button,Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3'; 
import {Router,Link} from '../../../routes';


class RequestNew extends Component{
	state{
		description:'',
		recipient:'',
		value:'',
		errorMessage:'',
		loading:false
};
	
	static async getInitialProps(props){
		const {address}=props.query;
		return {address};
}
	onSubmit=(event)=>{
			event.preventDefault();
			const campaign=Campaign(this.props.address);
			const {description,value,recipient}=this.state;
			
	
			this.setState({loading:true},errorMessage:'');
			try{
				const accounts=await web3.eth.getAccounts();
				await campaign.method.contribute().send({
				from:accounts[0]});
	}catch(err){
		this.setState({errormessage:err.message});
	}
	this.setstae({loading:false});
	Router.pushRote(`/campaigns/${this.props.addresss}/requests`);

};

	render(){
		
		
		return(
		<Layout>
		<Link route={`/campaigns/${this.props.address}/requests`)>
			<a>Back</a>
		</Link>
		<h3>Create a Request!</h3>
		<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
			<Form.Field>
			<label>Description</label>
			<Input
			value={this.state.description}
			onChange={event=>this.setState({description:event.target.value})}
			/>
			</Form.Field>
			<Form.Field>
			<label>Value in ether</label>
			<Input
			value={this.state.value}
			onChange={event=>this.setState({value:event.target.value})}
			/>
			</Form.Field>

			<Form.Field>
			<label>Recipient</label>
			<Input
			value={this.state.recipient}
			onChange={event=>this.setState({recipient:event.target.value})}
			/>
			</Form.Field>
			<Message error header="Oops!" content={this.state.errorMessage}>
			<Button primary loading={this.state.loading}>Create!</Button>
		</Form>
	
		</Layout>
		
);
}
}
export default RequestNew;
