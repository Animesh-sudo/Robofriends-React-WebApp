import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOOOOOOOO!!!');
	// }
	const cardArray = robots.map((user, i) => {
		return <Card key = {i} id = {user.id} name = {user.name} email = {user.email}/>
		// OR return <Card id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
	})
	return (
	<div>
		{cardArray}
    </div>
	);
}

export default CardList;

      // <Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
      // <Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
      // <Card id = {robots[2].id} name = {robots[2].name} email = {robots[2].email}/>