import {createContext, useState, useContext} from 'react';

const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
	const [cart, setCart] = useState([])
	
	function addItem(item) {
		if(isInCart(item.id)) {
			const updateQuantity = [...cart]
			updateQuantity.forEach(x => {
				if(x.id === item.id ) {
					x.quantity += 1
				}
			})
			return setCart(updateQuantity)
		}
		return setCart([...cart, {...item, quantity: 1}])
	}

	const isInCart = (id) => {
		const findItem = cart.find((i) => {
			return i.id === id
		})
		return findItem
	}

	const deleteOne = (id) => {
		const items = [...cart]
		const filterItems = items.filter(x => x.id !== id)
		return setCart(filterItems)
	}

	const clearCart = () => setCart([])
	
	return (
		<CartContext.Provider value={{addItem, cart, deleteOne, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}