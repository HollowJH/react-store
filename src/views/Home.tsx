import { NavBar } from '../components/NavBar.tsx'
import { Hero } from '../components/Hero.tsx'
import { Footer } from '../components/Footer.tsx'
import styles from "./Home.module.css"
import { ProductCard } from '../ProductCard.tsx'
import { products } from "../assets/products.js"

export function Home() {

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map(elem => <ProductCard product={elem} key={elem.id} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}