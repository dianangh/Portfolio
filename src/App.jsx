import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import Models from "./components/Models";


const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<Models />
				<Slide />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
