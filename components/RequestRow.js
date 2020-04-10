import React,{Componenet} from 'react';
import {Table,Button} from'emantic-ui-react';
import web3 from '../ethreum/web3';
import Campaign from '../ethereum/campaign';


class RequestRow extends Component{
	onApprove= async() =>{
		const campaign=Campaign(this.props.address);
		const accounts=await web3.eth.getAccounts();
		await campaigns.methods.approveRequests(this.props.id).send({from:accounts[0]
	});		
};
	onFinalize=async () =>{
		const campaign=Campaign(this.props.address);
		const accounts=await web3.eth.getAccounts();
		await campaigns.methods.finalizeRequests(this.props.id).send({from:accounts[0]
	});		
};
	render(){
		const {Row,Cell}=table;
		const {id,request,approverCount}=this.props;
		const readyToFinalize=request.approvalCount>approversCount/2;		

		return(
		<Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
			<Cell>{id}</Cell>
			<Cell>{request.description}</Cell>
			<Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
			<Cell>{request.recipient}</Cell>
			<Cell>{request.approvalCount}/{approversCount}</Cell>
			<Cell>
			{request.complete?null:(
			<Button color="green" basic onClick={this.onApprove}>
			Approve
			</Button>
			)}
			</Cell>
			<Cell>
			{request.complete?null:(
			<Button color="teal" basic onClick={this.onFinalize}>
			Finalize
			</Button>
			)}
			</Cell>
			
		</Row>
		);
	}
}

export default RequestRow;
			
