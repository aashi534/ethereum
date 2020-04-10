const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
//const {interface,bytecode}=require('./compile');
const compiledFactory=require('./build/CampaignFactory.json');

const provider=new HDWalletProvider(
'damage snack fitness gun teach truck arrest parade congress fork ten sketch','http://rinkeby.infura.io/v3/5497a8bb90b743cb802ea54b209494eb');

const web3=new Web3(provider);


const deploy =async ()=>{
	const accounts=await web3.eth.getAccounts();
	console.log('attempting');
	const result =await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data:bytecode}).send({gas:'1000000',from:accounts[0]});

	console.log(interface);
	console.log('Contract deployed to',results.options.address);
};

deploy();

