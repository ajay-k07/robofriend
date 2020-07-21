import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className ='p2 tc'>
			<input className ='p3 ba b--green bg-lightest-blue tc'type='search' placeholder='search' onChange={searchChange}/>
		</div>
	);

}
export default SearchBox;