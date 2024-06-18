import { useCallback, useState } from "react"
import { Cart, Product } from "../interfaces/Product"

export function useCart() {
	const [cart, setCart] = useState<Cart>(JSON.parse(localStorage.getItem("cart") ?? "{}"))
	const [total, setTotal] = useState(Object.values(cart).reduce((acc, curr) => acc + (curr.price * curr.quantity), 0))

	const isInCart = useCallback((product: Product) => Object.values(cart).some((elem: Product) => elem.id === product.id), [cart])

	const updateTotal = useCallback(() => {
		const total = Object.values(cart).reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
		setTotal(total)
	}, [cart])

	const updateInCart = useCallback((product: Product, quantity: number) => {
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
	
	const updateQuantity = useCallback((product: Product, quantity: number) => {
		const newCart = {...cart}
		newCart[product.title].quantity = quantity
		setCart(newCart)
		localStorage.setItem("cart", JSON.stringify(newCart))
		updateTotal()
	}, [])

	return { cart, total, isInCart, updateInCart, updateQuantity }
}