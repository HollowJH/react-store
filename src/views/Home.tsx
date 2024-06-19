import { NavBar } from '../components/NavBar.tsx'
import { Hero } from '../components/Hero.tsx'
import { Footer } from '../components/Footer.tsx'
import { ProductCard } from '../components/ProductCard.tsx'
import { Product } from '../interfaces/Product'
import { useProducts } from '../hooks/useProducts.tsx'
import { useSelector } from 'react-redux'

export function Home() {
  const { products } = useProducts()
  const filter = useSelector((store: {products: {text: string}}) => store.products.text)
  

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="max-w-[1080px] grid grid-cols-auto-fit-minmax gap-[25px] mx-auto" id="products">
          {products.filter(elem => elem.title.toLocaleLowerCase().includes(filter.trim())).map((elem: Product) => <ProductCard product={elem} key={elem.id}/>)}
        </div>
      </main>
      <Footer />
    </>
  )
}