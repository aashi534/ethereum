import React,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

//const campaignIndex =new CampaignIndex();
//campaignindex.render();


class CampaignIndex extends Component{
	static async getInitialProps(){
	return campaigns=await factory.methods.getDeployedCampaigns().call();	

}
	renderCampaigns(){
		const items=this.props.campaigns.map(address=>{
		return{
			header:address,
			description:(
				<Link route={`/campaigns/${address}`
				<a>View Campaign<a>
			fluid:true

		};
	});
	
	return <Card.Group items={items}/>;		
}

	/*async componentDidmount(){
		const campaigns=await factory.methods.getDeployedCampaigns().call();
		console.log(campaigns);
	}*/
	render(){
		return( 
		<div>
		<Layout/>
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		<h3>Open campaigns</h3>
		//{this.props.campaigns[0]}
		{this.renderCampaigns()}

		<Link route="/campaigns/new">
		<a>
		<Button floated="right" content="Create Campaign" icon="add circle" primary />
		</a>/Link>
		{this.renderCampaigns()}
		</div>
		);
	}

} 
