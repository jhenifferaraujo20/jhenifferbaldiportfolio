import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}

export default Index;