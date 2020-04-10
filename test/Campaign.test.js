const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());

const compiledFactory=require('../ethereum/build/CampaignFactory.json');
const compiledCampaign=require('../ethreum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async()=>{
	accounts=await web3.eth.getAccounts();
	factory=await new web3.eth.Conract(JSON.parse(compiledFactory.interface)).deploy({data:compiledFactory.bytecode}).send({from:accounts[0],gas:'1000000'});

	await factory.methods.createCampaign('100').send({from:accounts[0],gas:'100000'});
	
	const addresses=await factory.methods.getDeployedCampaigns().call();
	campaignAddress=addresses[0];
	
	campaign=await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);

});
describe('Campaigns',()=>{
	
	it('marks caller as the campaign manager',async()=>{	
		const manager=await campaign.methods.manager().call();
		assert.equal(manager,accounts[0]);
});
	it('allows people to contribute money and marks them as approvers',async()=>{
		await campaign.methods.contribute().send({value:'200',from;accounts[1]
	});

	const iscontributor=await campaign.methods.approvers(accounts[1]).call();
	assert(isContributor);
	
	it('requires a minimum Contribution',async()=>{
	
	try{
		await campaign.methods.contribute().send({value:5,from:accounts[1]});
	assert(false);
	}catch(err){
		assert(err);
}
});
	it('allows a manager to make a payment request',async ()=>{
	await campaign.methods.createRequest('buy bat','100',accounts[1]).send({
	from:acccounts[0],gas:'100000'});
	const request=await campaign.methods.requests(0).call();
	assert.equal('but bat',request.description);


	});


});


