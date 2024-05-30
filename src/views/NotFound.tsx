import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export function NotFound(){
	return(
		<>
			<NavBar />
			<Hero first="" second="404 not found" />
			<Footer />
		</>
	)
}