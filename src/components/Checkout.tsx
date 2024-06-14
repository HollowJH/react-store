import { useEffect, useState } from "react"
import { useCart } from "../hooks/useCart"

export function Checkout({ product }) {
	const { cart, isInCart, updateInCart, updateQuantity } = useCart()
	const [quantity, setQuantity] = useState(isInCart(product) ? cart[product.title].quantity : 1)
	const [button, setButton] = useState(isInCart(product))

	useEffect(() => {
		setButton(isInCart(product))
		setQuantity(isInCart(product) ? cart[product.title].quantity : 1)
	}, [cart, isInCart, product])

	function handleClick() {
		updateInCart(product, quantity)
	}

	function changeQuantity(e) {
		if (e > product.stock) {
			alert("No existen tantas unidades de este producto")
			return
		}

		setQuantity(() => {
			if (isInCart(product)) updateQuantity(product, e)
			return e
		})
	}

	return (
		<>
			<div className="w-[340px] p-2.5 m-2.5 ">
				<div className="bg-[#ebebeb] p-[33px] rounded-[2px]">
					<span className="text-[#ff3b3c]">Total:</span>
					<h2 id="price" className="text-[28px] font-bold mt-2">${(product.price * quantity).toLocaleString()}</h2>
					<p className="break-words leading-5">
						Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
						50711 haciendo la solicitud en AFIP.
					</p>
					<ul className="p-0 list-none mb-[30px]">
						<li className="flex my-[15px] mx-0">
							<span className="mr-[15px]">
								<img src="../../public/truck.png" alt="Truck"/>
							</span>
							<span>
								Agrega el producto al carrito para conocer los costos de
								envío
							</span>
						</li>
						<li className="flex my-[15px] mx-0">
							<span className="mr-[15px]">
								<img src="../../public/plane.png" alt="Plane" />
							</span>
							<span>
								Recibí aproximadamente entre 10 y 15 días hábiles,
								seleccionando envío normal
							</span>
						</li>
					</ul>
					<div className="gap-x-5">
						<div className="flex mb-2.5">
							<input type="number" min="1" 
							className="h-10 w-[62px] border-none rounded-[10px] mr-2.5 py-0 pr-2.5 pl-5 box-border"
							value={quantity} onChange={(e) => changeQuantity(Number(e.target.value))} />
							<button type="button" className={button ? 
							"w-full h-10 bg-[#202020] text-white font-bold border-none rounded-[10px] hover:bg-[#404040]" 
							: 
							"w-full h-10 bg-[#ff3b3c] text-white font-bold border-none rounded-[10px] hover:bg-[#ff5151]"
								} onClick={handleClick}>
								{button ? "Remove from cart" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}