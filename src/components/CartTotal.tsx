export function CartTotal({total}) {

	return (<>
		<article className="w-[340px] h-[220px] flex flex-col p-8 m-2.5 bg-[#f2f2f2] rounded-[5px] break-word">
			<div className="flex grow flex-col justify-between">
				<h4 className="text-2xl font-bold">Resumen del pedido</h4>
				<div className="flex justify-between items-center font-bold">
					<p>Total</p>
					<p>${total}</p>
				</div>
				<div className="pb-2.5 text-[13px]">Incluye impuesto País y percepción AFIP</div>
			</div>
			<button className="w-full h-10 border-none bg-[#ff3b3c] text-white font-bold rounded-[10px]">COMPRAR</button>
		</article>
	</>)
}