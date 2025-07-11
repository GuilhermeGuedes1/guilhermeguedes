import About from './about/About';
import Header from '../home/components/header/Header';
import Capabilities from './capabilities/Capabilities';
import Contact from '../home/components/contact/Contact';

export default function AboutPage() {
	return (
		<>
			<Header />
			<About />
			<Capabilities />
			<Contact />
		</>
	);
}
