import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Responsive Design', level: 80 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Prisma', level: 70 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
];

const Skills = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              inView ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          <p
            className={`mt-6 text-lg text-gray-700 max-w-3xl mx-auto ${
              inView ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            I've developed expertise in various technologies and tools, allowing
            me to tackle diverse projects and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white p-8 rounded-lg shadow-md ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${300 + skillIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
