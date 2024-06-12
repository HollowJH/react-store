import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styles from "./Checkout.module.css"
import { useCart } from "../hooks/useCart"

export function Checkout({ product }) {
	const {cart, isInCart, updateInCart, updateQuantity} = useCart()
	const [quantity, setQuantity] = useState(isInCart(product) ? cart[product.title].quantity : 1)
	const [button, setButton] = useState(isInCart(product))
	const location = useLocation()

	useEffect(() => {
		setButton(isInCart(product))
		setQuantity(isInCart(product) ? cart[product.title].quantity : 1)
	}, [cart, isInCart, location, product])

	function handleClick() {
		updateInCart(product, quantity)
		setButton(isInCart(product))
	}

	function changeQuantity(e){
		setQuantity(() => {
			if(isInCart(product))updateQuantity(product, Number(e.target.value))
			return Number(e.target.value)
		})
	}

	return (
		<>
			<div className={styles["product-checkout-block"]}>
				<div className={styles["checkout-container"]}>
					<span className={styles["checkout-total-label"]}>Total:</span>
					<h2 id="price" className={styles["checkout-total-price"]}>${(product.price * quantity).toLocaleString()}</h2>
					<p className={styles["checkout-description"]}>
						Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
						50711 haciendo la solicitud en AFIP.
					</p>
					<ul className={styles["checkout-policy-list"]}>
						<li>
							<span className={styles["policy-icon"]}
							><img src="../../public/truck.png" alt="Truck"
								/></span>
							<span className={styles["policy-desc"]}
							>Agrega el producto al carrito para conocer los costos de
								envío</span>
						</li>
						<li>
							<span className={styles["policy-icon"]}
							><img src="../../public/plane.png" alt="Plane"
								/></span>
							<span className={styles["policy-desc"]}
							>Recibí aproximadamente entre 10 y 15 días hábiles,
								seleccionando envío normal</span>
						</li>
					</ul>
					<div className={styles["checkout-process"]}>
						<div className={styles["top"]}>
							<input type="number" min="1" value={quantity} onChange={(e) => changeQuantity(e)} />
							<button type="button" className={button ? styles["remove-btn"] : styles["cart-btn"]} onClick={handleClick}>
								{button ? "Remove from cart" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}