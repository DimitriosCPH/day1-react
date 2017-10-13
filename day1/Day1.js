import React from  'react';
import upper, {text1,text2, text3} from "./dataStore";
import person from "./dataStore2"
import jokes from "./jokeStore"

const { firstName, lastName, email, phone } = person;
jokes.addJoke("One day there was light. There is no more light");

class App extends React.Component {	
	constructor(){
		super();
		jokes.addJoke("Bla blabla");
	}
	render(){
		return (
			<div>
				<p>{upper("please upper case me")}</p>
				<p>{firstName}, {lastName}, {email}, {phone}</p>
				<p>{text2}</p>
				<p>{jokes.getRandomJoke()}</p>
				<p>{jokes.getRandomJoke()}</p>
				<p>{jokes.getRandomJoke()}</p>
			</div>
			)
	}
}


export default App;
