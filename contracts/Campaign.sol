pragma solidity ^0.4.17;

contract CampaignFactory{
	address[] public deployedCampaigns;
	
	function createCampaign(uint minimum)public{
		address newCampaign=new Campaign(minimum,msg.sender);
		deployedCampaigns.push(newCampaign);
}

	
	function getDeployedCampaigns() public view returns(address[]){
	return deployedCampaigns;
}		


}


contract Campaign{
	struct Request{
		string description;
		uint value;
		address recipient;	
		bool complete;
		uint approvalCount;
		mapping(address=>bool)approvals;
}
	Request[] public requests;
	address public manager;
	unit public minimumContribution;
	mapping(address=>bool)public approvers;
	unit appoversCount;
	modifier restricted(){
		require(msg.sender==manager);
		_;
	}
	
	function Campaign(uint minimum,address creator) public{
		manager=msg.sender;
		minimumContribution=minimum;
	}
	function contribute() public payable{
		require(msg.value>minimumContribution);
		approvers[msg.sender]=true;
		approversCount++;
	
	}
	function createRequest(string description,uint value,address recipient) public restricted{	


		require(approvers[msg.sender]);
	Request newRequest=Request({
		description:description,
		value:value,
		recipient:recipient
		complete:false
	});	
	Request(description,value,recipient,false);
	
	requests.push(newRequest);
}

	function approveRequest(uint index) public{

		Request storage request=requests[index];
		require(approvers[msg.sender]);
		require(!request[index].approvals[msg.sender]);
		request[index].approvals[msg.sender]=true;
		request[index].approvalCount++;
}
	function finalizeRequest(uint index) public restricted{
		require(request.approvalCount>(approversCount/2));
		require(!request.complete);
		request.recipient.transfer(request.value)
		request.complete=true;
}
	function getSummary() public view returns (uint,uint,uint,uint,address){
	returns(
		minimumContribution,
		this.balance,
		requests.length,
		approversCount,
		manager

);

}
	function getRequestsCount() public view returns (unit){
		return requests.length;
}
}

