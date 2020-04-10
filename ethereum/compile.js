const path=require('path');
const solc=require('solc');
const fs=require('fs-extra');

const buildpath=path.resolve(_dirname,'build');

fs.removeSync(buildPath);

const campaignPath=path(_dirname,'contracts','Campaign.sol');
const source=fs.readFileSync(campaignpath,'utf8');
const output=solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output){
	fs.outputJsonSync(
	path.resolve(buildPath,contract.replace(':','')+'.json'),
	output[contract]
	);
}
