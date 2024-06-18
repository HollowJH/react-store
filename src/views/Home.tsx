import { NavBar } from '../components/NavBar.tsx'
import { Hero } from '../components/Hero.tsx'
import { Footer } from '../components/Footer.tsx'
import { ProductCard } from '../ProductCard.tsx'
import { Product } from '../interfaces/Product'
import { useProducts } from '../hooks/useProducts.tsx'

export function Home() {
  const { products } = useProducts()

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-[1080px] flex flex-wrap justify-between" id="products">
          {products.map((elem: Product) => <ProductCard product={elem} key={elem.id} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}