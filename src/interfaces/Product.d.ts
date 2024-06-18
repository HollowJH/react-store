export interface Product {
	id: string
	title: string
	description: string
	price: number
	stock: number
	images: string[]
	colors: string[]
	onsale: boolean
}

export interface CartItem extends Product {
	quantity: number
}

export interface Cart {
	[key: string]: CartItem
}