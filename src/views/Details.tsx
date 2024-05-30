import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar"
import { products } from "../assets/products.js"
import styles from "./Details.module.css"
import { NotFound } from "./NotFound.tsx"
import { ProductCard } from "../ProductCard.tsx"
import { Thumbs } from "../components/Thumbs.tsx"
import { Description } from "../components/Description.tsx"
import { Checkout } from "../components/Checkout.tsx"

export function Details() {
	const query = useParams()
	const product = products.find(elem => elem.id === query.id)



	return (
		product ? <>
			<NavBar />
			<main>
				<div className={styles["details-container"]}>
					<div id="details" className={styles["columns-container"]}>
						<Thumbs title={product.title} images={product.images} />
						<Description title={product.title} description={product.description} colors={product.colors} />
						<Checkout product={product}/>
					</div>
					<div className={styles["sales-block"]}>
						<h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
						<div id="product-container" className={styles["product-container"]}>
							{products.filter(prod => prod.onsale === true).map(elem => <ProductCard product={elem} key={elem.id}/>)}
						</div >
					</div >
				</div >
			</main >
			<Footer />
		</> : <NotFound />
	)
}