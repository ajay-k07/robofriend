import React from 'react';

const card = ({name ,email ,id}) =>{
	
	return(
		<div className ='bg-blue dib  pa3 ma2 grow bw2 shadow5'>
		<img  alt ='robot'src={`https://robohash.org/${id}?200x200`}/>
		<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
		</div>

		);
}
export default card;