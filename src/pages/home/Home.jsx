import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import ShortAbout from './components/shortAbout/ShortAbout';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Projects />
			<ShortAbout />
			<Contact />
			<Footer />
		</>
	);
}
