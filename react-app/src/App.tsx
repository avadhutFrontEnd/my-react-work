import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
	const [cartItems, setCartItems] = useState([ 'product1', 'product2' ])
	
	return (
	<div>
		<NavBar cartItemsCount={cartItems.length} />
    	<Cart cartItems={cartItems}  onClear={() => setCartItems([]) } />
	</div>
	);
}

export default App;