import React,{Component} from 'react';
import {connect } from 'react-redux';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

import {setSearchField, requestRobots} from './Actions';

const mapStateToProps = state =>{
	return{
		searchField : state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error

	}
}

const mapDispachProps = (dispatch) => {
	return{
	onsearhChange: (event) => dispatch(setSearchField(event.target.value)), 
	onRequestRobots: () => dispatch(requestRobots())
} 
}


class App extends Component {
	
	componentDidMount(){
		this.props.onRequestRobots();
	}
	
	render(){
		
		const {searchField , onsearhChange ,robots,isPending} = this.props;
		const filteredRobots =  robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1>loading</h1>:
		(
			<div className='tc'>
				<h1>robots friends</h1>
				<SearchBox searchChange={onsearhChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				
			</div>
		);
		}
	}
	

export default connect(mapStateToProps,mapDispachProps)(App);