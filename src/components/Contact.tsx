import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          <p className={`mt-6 text-lg text-gray-700 max-w-3xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            Have a project in mind or want to chat? Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${inView ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-purple-600 transition-colors">
                      jhenifferbaldi@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="https://wa.me/5534984254856?text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" className="text-lg font-medium hover:text-blue-600 transition-colors">
                      +55 (34) 98425-4856
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium">Frutal, MG</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/jheniffer-araujo-baldi/"
                  target="_blank"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-blue-100"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="https://github.com/jhenifferaraujo20"
                  target="_blank"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800"
                >
                  <Github className="w-6 h-6 text-gray-700 hover:text-gray-100 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/jheniffer_araujo_b/"
                  target="_blank"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-pink-500"
                >
                  <Instagram className="w-6 h-6 text-gray-700 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className={`${inView ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                    placeholder="Hello! I'd like to discuss a project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;