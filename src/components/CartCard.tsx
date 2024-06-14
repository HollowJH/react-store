import { Link } from "react-router-dom"
import Product from "../interfaces/Product"

interface CartItem extends Product {
	quantity: number
}

interface CartCardProps {
	cart: { [key: string]: CartItem }
	updateQuantity: (product: Product, quantity: number) => void
}

export function CartCard({ cart, updateQuantity }: CartCardProps) {
	function handleClick(e, product: Product) {
		if(Number(e.target.value) > product.stock){
			alert("No hay tantas unidades de este producto")
			e.target.value = product.stock
			return
		}
		updateQuantity(product, Number(e.target.value))
	}

	return (<>
		<article>
			{Object.values(cart).map((elem) => {
				return (<div className="w-[680px] h-[220px] p-7 m-2.5 flex items-center text-black
					rounded-[5px] bg-[#f2f2f2] break-word no-underline" key={elem.id}>
					<Link className="w-[70%] h-[70%]" to={"/details/" + elem.id}>
						<img className="w-[100px] h-[100px] rounded-[15px] mr-2.5" src={elem.images[0]} alt={elem.title} />
					</Link>
					<div className="flex flex-col justify-between gap-0.5 w-[340px] ml-8">
						<strong>{elem.title}</strong><span className="whitespace-nowrap text-ellipsis overflow-hidden">- Silver</span>
						<p className="whitespace-nowrap text-ellipsis overflow-hidden">{elem.description}</p>
						<input className="w-[70px] h-10 rounded-[10px] border-[#eaeaea] border-[1px] border-solid p-[5px]"
							type="number" name="quantity" defaultValue={cart[elem.title].quantity} min="1" max={elem.stock}
							id={elem.id} onChange={(e) => handleClick(e, elem)} />
					</div>
					<strong className="w-full text-right">AR$ ${elem.price * cart[elem.title].quantity}</strong>
				</div>)
			})}
		</article>

	</>)
}