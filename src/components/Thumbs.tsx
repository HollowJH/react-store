import styles from "./Thumbs.module.css"

export function Thumbs({title, images}) {
	
	return (
		<section className={styles["product-images-block"]}>
			<div className={styles["product-images"]}>
				{images.slice(1).map(img =>
					<img
						className={styles["mini-img"]}
						src={img}
						alt={title}
						key={images.indexOf(img)}
					/>)}
			</div>
			<img
				className={styles["big-img"]}
				id="big-img"
				src={images[0]}
				alt={title}
			/>
		</section>
	)
}