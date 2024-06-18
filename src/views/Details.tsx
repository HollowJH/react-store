import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar"
import { NotFound } from "./NotFound.tsx"
import { ProductCard } from "../components/ProductCard.tsx"
import { Thumbs } from "../components/Thumbs.tsx"
import { Description } from "../components/Description.tsx"
import { Checkout } from "../components/Checkout.tsx"
import { Product } from "../interfaces/Product"
import { useProducts } from "../hooks/useProducts.tsx"

export function Details() {
	const query = useParams()
	const { products } = useProducts()
	const product = products.find((elem: Product) => elem.id === query.id)

	return (
		product ? <>
			<NavBar />
			<main className="w-full flex justify-center items-center p-5">
				<div className="w-[1080px] flex flex-wrap justify-between">
					<div id="details" className="flex justify-center gap-10">
						<Thumbs title={product.title} images={product.images} />
						<Description title={product.title} description={product.description} colors={product.colors} />
						<Checkout product={product} />
					</div>
					<div className="w-[1080px] flex flex-wrap justify-center my-5 mx-0">
						<h2 className="text-center text-[40px] font-bold">Ofertas de la semana</h2>
						<div id="product-container" className="w-[1080px] flex flex-wrap justify-between">
							{products.filter((prod: Product) => prod.onsale === true).map((elem: Product) => <ProductCard product={elem} key={elem.id} />).slice(0, 3)}
						</div >
					</div >
				</div >
			</main >
			<Footer />
		</> : <NotFound />
	)
}