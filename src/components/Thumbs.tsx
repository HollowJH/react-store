import { useEffect, useState } from "react";

export function Thumbs({title, images}: {title: string, images: string[]}) {
	const [thumb, setThumb] = useState(images[0] || "/mock1.jpg");
	
	function handleClick(src: string) {
		const [newThumb, newImg] = [src, thumb]

		src = newImg
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
						onClick={(e) => handleClick(e.currentTarget.src)}
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