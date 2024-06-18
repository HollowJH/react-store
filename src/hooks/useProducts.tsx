import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";

export function useProducts() {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		axios("/public/products.json")
		.then((res) => setProducts(res.data.products))
		.catch(err => console.log(err))
	},[])

	return { products }
}