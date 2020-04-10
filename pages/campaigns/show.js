import React,{Component} from 'react';
import {Card,Grid,Button} from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../components/ContributeForm;
import ContributeForm from '../../components/ContributeForm;
import {Link} from '../../routes';

class CampaignShow extends Component{
	static async getInitialProps(props){
		const campaign=Campaign(props.query.address);
		const summary=await campaign.methods.getSummary.call();
		
		return{
			address:props.query.address,
			minimumContribution:summary[0]
			balance:summary[1]
			requestsCount:summary[2]
			approversCount:summary[3]
			manager:summary[4]
		};
}
	renderCards(){
		const{
			balance,	
			manager,
			minimumContribution,
			requestsCount,
			approversCount
			}=this.props;


		const items=[
		{
			header:manager
			meta:'Address of manager'
			description:'The manager created this campaign and can create requests to withdraw money',
			style:{overflowWrap:'break-word'}
		}
		{
			header:minimumContribution
			meta:'Minimum Contribution(wei)'
			description:'You must contribute atleast this much wei to became an approver',
			style:{overflowWrap:'break-word'}
		}
		{
			header:requestsCount
			meta:'Number of requests'
			description:'Request must be approved by approvers',
			style:{overflowWrap:'break-word'}
		}
		
		
		];

		return <Card.Group items={items}/>;
}
	render(){
		return (
		<Layout>
			<h3>Campaign Show</h3>
			<Grid>
			<Grid.Row>
			<Grid.Column width={10}>
				{this.renderCards()}
			</Grid.Column>
			<Grid.Column width={6}>
				
				<ContributeForm address={this.props.address}/>
			</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Link route={`/campaigns/${this.props.address}
			
			<a>
			<Button primary>View requests</Button>
			</a>
			</Link>
			</Grid.Row>
			
		</Layout>
		)
	}

}
export default CampaignShow;
