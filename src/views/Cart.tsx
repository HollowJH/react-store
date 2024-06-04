import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { useCart } from "../hooks/useCart";
import styles from "./Cart.module.css";

export function Cart() {
	const {cart} = useCart()

	return (
		<>
			<NavBar />
			<Hero first="mi" second="carrito"/>
			<main>
				{Object.values(cart).map(elem => {					
					return (<article className={styles["product-cart"]} key={elem.id}>
					<img className={styles["product-img"]} src={elem.images[0]} alt="ipad" />
						<div className={styles["product-details"]}>
							<strong className={styles["product-title"]}>{elem.title}</strong><span className={styles["product-description"]}>- Silver</span>
							<p className={styles["product-description"]}>{elem.description}</p>
							<input className={styles["product-input"]} type="number" name="quantity" defaultValue={cart[elem.title].quantity} min="1" id={elem.id} />
						</div>
						<strong className={styles["price"]}>AR$ ${elem.price * cart[elem.title].quantity}</strong>
				</article>)
				} )}
			</main>
			<Footer />
		</>
	)
}