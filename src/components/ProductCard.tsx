import { Link } from "react-router-dom";

export function ProductCard({product}) {
	const {id, title, price, images, colors} = product
	
	
	return (
		<>
			<Link className="bg-[#f0f0f0] text-[#383838] rounded-[15px]
			w-[250px] m-1 no-underline mx-auto" to={"/details/"+id}>
				<img
					className="w-full h-[250px] object-cover object-center rounded-t-[15px]"
					src={images[0]}
					alt={title}
				/>
				<div className="p-5 box-border">
					<span className="text-[20px]/[25px] font-bold break-words block">{title}</span>
					<span className="text-[12px] text-[#383838] mb-[5px]">{colors[0]}</span>
					<div className="flex my-[5px] mx-0 justify-between items-center">
						<span className="text-[20px] font-bold">{price}</span>
						<span className="font-bold text-[12px] text-[#428f13]">50% Off</span>
					</div>
					<div className="text-[10px] font-light">
						Incluye impuesto País y percepción AFIP
					</div>
				</div>
			</Link>
		</>
	)
}