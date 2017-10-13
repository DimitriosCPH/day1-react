import React from  'react';

function Welcome(props){
	return <h1>Hello, {props.name} </h1>;
}
const Hi = (props) => 
	<h1>Hello {props.name} </h1>



class App extends React.Component {		
	render(){
		return (
				<div>
					<h1>Hello World</h1>
					<Welcome name="Sarah"/>	
					<Hi name="Pedro"/>				
				</div>
			)
	}
}



export default App;


 