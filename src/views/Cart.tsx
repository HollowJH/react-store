import { CartCard } from "../components/CartCard";
import { CartTotal } from "../components/CartTotal";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { useCart } from "../hooks/useCart";

export function Cart() {
	const { cart, updateQuantity, total } = useCart()

	return (
		<>
			<NavBar />
			<Hero first="mi" second="carrito" />
			<main className="w-full flex justify-center items-center grow p-5">
				<CartCard cart={cart} updateQuantity={updateQuantity} />
				<CartTotal total={total} />
			</main>
			<Footer />
		</>
	)
}