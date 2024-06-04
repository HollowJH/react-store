import { useCallback, useState } from "react"

interface product {
	id: string
	title: string
	description: string
	price: number
	stock: number
	images: string[]
	colors: string[]
	onsale: boolean
}

export function useCart() {
	const [cart, setCart] = useState<{[key: string]: product & {quantity: number}}>(JSON.parse(localStorage.getItem("cart") ?? "{}"))

	const isInCart = useCallback((product: product) => Object.values(cart).some((elem: product) => elem.id === product.id), [cart])

	const updateInCart = useCallback((product: product, quantity: number) => {
		setCart(prevState => {
			const newCart = { ...prevState }
			if (isInCart(product)) {
				delete newCart[product.title]
			} else {
				newCart[product.title] = {...product, quantity}
			}
			localStorage.setItem("cart", JSON.stringify(newCart))
			return newCart
		})
		return isInCart(product)

	}, [isInCart])
	
	const updateQuantity = useCallback((product: product, quantity: number) => {
		console.log(cart[product.title].quantity, quantity);
		const newCart = {... cart}
		newCart[product.title].quantity = quantity
		setCart(newCart)
		localStorage.setItem("cart", JSON.stringify(newCart))
	}, [cart])

	return { cart, isInCart, updateInCart, updateQuantity }
}