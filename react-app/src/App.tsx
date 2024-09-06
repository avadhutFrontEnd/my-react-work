// ******************* Solution 1 :
// import { useState } from "react";

// const App = () => {
// 	const [game, setGame] = useState({
// 		id: 1,
// 		player: {
// 			name: "John",
// 		},
// 	});

// 	const handleClick = () => {
// 		setGame({ ...game, player: { name: 'Bob' } })
// 	}

// 	return (
// 		<div>
// 			<span>{game.player.name}</span>
// 			<button onClick={handleClick}>Click Me</button>
// 		</div>
// 	);
// }

// export default App;




// ******************* Best Solution 1 :
// import { useState } from "react";

// const App = () => {
// 	const [game, setGame] = useState({
// 		id: 1,
// 		player: {
// 			name: "John",
// 		},
// 	});

// 	const handleClick = () => {
// 		setGame({ ...game, player: { ...game.player, name: 'Bob' }})
// 	}

// 	return (
// 		<div>
// 			<span>{game.player.name}</span>
// 			<button onClick={handleClick}>Click Me</button>
// 		</div>
// 	);
// }

// export default App;




// ******************* Solution 2 :
// import { useState } from "react";

// const App = () => {
// 	const [pizza, setPizza] = useState({
// 		name: 'Spicy Pepperoni',
// 		toppings: ['Mushroom'],
// 	});

// 	const handleClick = () => {
// 		setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] })
// 	}

// 	return (
// 		<div>
// 			<span>{pizza.toppings}</span>
// 			<button onClick={handleClick}>Click Me</button>
// 		</div>
// 	);
// }

// export default App;



// ******************* Solution 3 :
import { useState } from "react";

const App = () => {
	const [cart, setCart] = useState({
		discount: .1,
		items: [
			{ id: 1, title: 'Product 1', quantity: 1 },
			{ id: 2, title: 'Product 1', quantity: 1 }
		],
	});

	const handleClick = () => {
		setCart({ 
			...cart, 
			items: cart.items.map(item => 
			  item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
			) 
		  })
	}

	return (
		<div>
			<span>{cart.items.map((item) => `Object-${item.id} "${item.quantity}" `)}</span>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;