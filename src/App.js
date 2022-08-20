import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/index";
import SearchBox from "./components/SearchBox";

const App = () => {

	//states
	const [monster, setMonster] = useState([])
	const [filteredMonsters, setFilteredMonster] = useState([])

	//methods
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				setMonster(users)
				setFilteredMonster(users)
			}
			)
			.catch((error) => console.log(error));
	}, [])

	const onSearchChange = (e) => {
		let searchString = e.target.value.toLowerCase();
		const filteredMonst = monster.filter((item) => {
			return item.name.toLowerCase().includes(searchString);
		});
		setFilteredMonster(filteredMonst)
	}

	// templates
	return (
		<div className='App'>
			<h1 className="appTitle">Monster Rolodex</h1>
			<SearchBox className='monsterSearchBox' placeholder='Search Monsters' name='monsterSearch' onChangeHandler={onSearchChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	);
}


// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monster: [],
// 			filteredMonsters: [],
// 		};
// 		this.onSearchChange = this.onSearchChange.bind(this);
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return {
// 						monster: users,
// 						filteredMonsters: users,
// 					};
// 				}),
// 			)
// 			.catch((error) => console.log(error));
// 	}

// 	onSearchChange(e) {
// 		let searchString = e.target.value.toLowerCase();
// 		const filteredMonst = this.state.monster.filter((item) => {
// 			return item.name.toLowerCase().includes(searchString);
// 		});
// 		this.setState(() => {
// 			return {
// 				filteredMonsters: filteredMonst,
// 			};
// 		});
// 	}

// 	render() {
// 		const { filteredMonsters } = this.state;
// 		const { onSearchChange } = this;
// 		return (
// 			<div className='App'>
// 				<h1 className="appTitle">Monster Rolodex</h1>
// 				<SearchBox className='monsterSearchBox' placeholder='Search Monsters' name='monsterSearch' onChangeHandler={onSearchChange} />
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }
export default App;
