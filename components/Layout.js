import React from 'reactjs';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props =>{
	return(
		<div>
		<Container>
		<Head>
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		<Header/>	
		{props.children}
		</Head>
		</Container>
		</div>
		);


};
