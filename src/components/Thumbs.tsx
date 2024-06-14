import { useEffect, useState } from "react";

export function Thumbs({title, images}) {
	const [thumb, setThumb] = useState(images[0] || "/mock1.jpg");
	
	function handleClick(e) {
		const [newThumb, newImg] = [e.currentTarget.src, thumb]

		e.currentTarget.src = newImg
		setThumb(newThumb)
	}
	
	useEffect(() => setThumb(images[0] || "/mock1.jpg"), [images])

	return (
		<section className="flex">
			<div className="w-11 m-1">
				{images.slice(1).map(img =>
					<img
						className="w-[40px] h-[40px] object-cover rounded-[5px]"
						src={img}
						key={img}
						alt={title}
						onClick={handleClick}
					/>)}
			</div>
			<img
				className="w-[280px] h-[280px] object-cover rounded-[15px]"
				id="big-img"
				src={thumb}
				alt={title}
			/>
		</section>
	)
}