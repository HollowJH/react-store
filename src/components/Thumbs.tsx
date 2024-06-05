import { useEffect, useState } from "react";
import styles from "./Thumbs.module.css"

export function Thumbs({title, images}) {
	const [thumb, setThumb] = useState(images[0] || "/mock1.jpg");
	
	function handleClick(e) {
		const [newThumb, newImg] = [e.currentTarget.src, thumb]

		e.currentTarget.src = newImg
		setThumb(newThumb)
	}
	
	useEffect(() => setThumb(images[0] || "/mock1.jpg"), [images])

	return (
		<section className={styles["product-images-block"]}>
			<div className={styles["product-images"]}>
				{images.slice(1).map(img =>
					<img
						className={styles["mini-img"]}
						src={img}
						key={img}
						alt={title}
						onClick={handleClick}
					/>)}
			</div>
			<img
				className={styles["big-img"]}
				id="big-img"
				src={thumb}
				alt={title}
			/>
		</section>
	)
}