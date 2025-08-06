import { ChevronDown } from "lucide-react";

const Hero = () => {
    const scrollToNextSection = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100"></div>

            <div className="absolute inset-0 h-screen bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center opacity-20"></div>
            

            <div className="max-w-4xl mx-auto text-center z-10">
                <h2 className="text-2xl font-medium text-gray-500 fade-in-left">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-6">
                    <span className="gradient-text">Jheniffer Baldi</span>
                </h1>
                <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">Full Stack Developer</h3>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
                    I create beautiful, functional websites and digital experiences that help businesses grow and engage their audience.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#about" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-2px hover:translate-y-[-2px]">
                        View My Work
                    </a>
                    <a href="#contact" className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button onClick={scrollToNextSection} aria-label="Scroll down" className="cursor-pointer">
                    <ChevronDown className="w-8 h-8 text-gray-400" />
                </button>
            </div>
        </section>
    );
};

export default Hero;