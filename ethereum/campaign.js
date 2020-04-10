import web3 from './web3';
import Campaign from './build/CampaignFactory.js';


export default (address)=>{
	return new web3.eth.Contracts(
		JSON.parse(Campaign.interface),address);


};
