import { useInView } from "react-intersection-observer";
import { User, Code, PenTool, Lightbulb } from "lucide-react";

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${inView ? "animate-fade-in-left" : "opacity-0"}`}>
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-lg text-gray-700">
              I'm a passionate full-stack developer focused on creating modern, efficient, and user-friendly web applications. My work blends creativity and logic — I love building projects that not only look great but also solve real problems.
            </p>
            <p className="text-lg text-gray-700">
                My journey began through coding bootcamps and self-driven learning, where I discovered how much I enjoy turning ideas into functional systems. I’ve been deepening my skills in technologies like React, Node.js, and Tailwind CSS, and I’m always excited to learn and explore new stacks.
            </p>
            <p className="text-lg text-gray-700">
                I believe great development comes from curiosity, structure, and passion. When I’m not coding, I’m usually studying new tech trends, improving my projects, or designing new interfaces that challenge my creativity.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${inView ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl card-hover">
              <User className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-medium mb-2">User-Focused</h4>
              <p className="text-gray-600">Creating intuitive experiences that users love</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl card-hover">
              <Code className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="text-xl font-medium mb-2">Clean Code</h4>
              <p className="text-gray-600">Writing efficient, maintainable, and scalable code</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl card-hover">
              <PenTool className="w-10 h-10 text-indigo-500 mb-4" />
              <h4 className="text-xl font-medium mb-2">Creative Design</h4>
              <p className="text-gray-600">Crafting visually stunning interfaces</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl card-hover">
              <Lightbulb className="w-10 h-10 text-amber-500 mb-4" />
              <h4 className="text-xl font-medium mb-2">Problem Solver</h4>
              <p className="text-gray-600">Finding elegant solutions to complex challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;