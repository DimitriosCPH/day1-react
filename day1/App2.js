import React from  'react';
import cars from './carStore';

const car = cars.getCar(3);

class App extends React.Component {		
	render(){
		return (
			<div>
				<p>Hello App2</p>			
				<p>{car.make} {car.year}</p>				
			</div>
			)
	}
}


export default App;
