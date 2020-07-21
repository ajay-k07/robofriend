import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants.js'

const intialstatesearch ={
	searchField: ''
}

export const searchRobots  = (state=intialstatesearch, action={}) =>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		  return Object.assign({},state,{searchField:action.payload});
		default:
		  return state; 	
	}
} 
const intialstateRobots={
	isPendind:false,
	robots:[],
	error:''
}
export const requestRobots=(state=intialstateRobots,action={})=>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		   return Object.assign({},state,{isPendind:true})
		case REQUEST_ROBOTS_SUCCESS:
		   return Object.assign({},state,{robots:action.payload,isPendind:false})
		case REQUEST_ROBOTS_FAILED:
		   return Object.assign({},state,{robots:action.payload,isPendind:false})
		default:
			return state;
	}	
}  