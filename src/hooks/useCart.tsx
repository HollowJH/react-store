import { useCallback, useEffect, useState } from "react"

interface product {
	colors: string[]
	id: string
	images: string[]
	onsale: boolean
	price: number
	stock: number
	title: string
}

export function useCart() {
	const [cart, setCart] = useState<{[key: string]: product}>(JSON.parse(localStorage.getItem("cart") ?? "{}"))

	const isInCart = useCallback((product: product) => {
		console.log(product.id);
		
		return Object.values(cart).some((elem: product) => elem.id === product.id);
	}, [cart])

	const updateInCart = useCallback((product: product) => {
		setCart(prevState => {
			const newCart = { ...prevState }
			if (isInCart(product)) {
				delete newCart[product.title]
			} else {
				newCart[product.title] = product
			}
			return newCart
		})
		return isInCart(product)

	}, [isInCart])

	useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart])

	return { cart, isInCart, updateInCart }
}