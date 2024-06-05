import { useEffect, useRef, useState } from "react"
import styles from "./Checkout.module.css"


export function Checkout({ product }) {
	const cart = JSON.parse(localStorage.getItem("cart") ?? "{}")
	const units = useRef<HTMLInputElement>(null);
	const [quantity, setQuantity] = useState(1)
	const [button, setButton] = useState(Object.keys(cart).includes(product.title))

	function updateInCart() {
		if (!button) {
			product.units = quantity
			cart[product.title] = product
		} else {
			delete cart[product.title]
		}
		localStorage.setItem("cart", JSON.stringify(cart))
		setButton(!button)
	}

	useEffect(() => {
		const isInCart = Boolean(cart[product.title])
		setButton(isInCart)
		setQuantity(isInCart ? cart[product.title].units : 1)
	}, [product.id])

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
							<input
								type="number"
								min="1"
								value={quantity}
								ref={units}
								onChange={(e) => setQuantity(Number(e.target.value))} />
							<button type="button" className={button ? styles["remove-btn"] : styles["cart-btn"]} onClick={updateInCart}>
								{button ? "Remove from cart" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}