export function Description({title, description, colors}: {title: string, description: string, colors: string[]}) {

	return (
		<div className="w-[340px] p-2.5 m-2.5 flex flex-col ">
			<h1 className="text-black text-[28px] font-bold break-words mt-0">{title}</h1>
			<form className="mt-7">
				<fieldset className="border-none p-0 flex flex-col">
					<label className="text-black text-3 font-bold" htmlFor="color">Color</label>
					<select
						className="w-full h-10 bg-white rounded-[10px] border-[1px] border-[#eaeaea] border-solid
						my-2.5 mx-0 p-2.5 box-border"
						typeof="text"
						aria-placeholder="Selecciona un color"
						id="color"
					>
						{colors.map(color => <option value={color} key={color}>{color}</option>)}
					</select>
				</fieldset>
			</form>
			<div className="mt-[30px] leading-20 text-sm text-[#383838] mb-1">
				<span className="text-black text-3 font-bold">Descripción</span>
				<p>
					{description}
				</p>
			</div>
		</div>
	)
}