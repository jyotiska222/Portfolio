import { CodeIcon, CogIcon, CloudIcon, TrophyIcon, CertificateIcon, StarIcon } from './Icons'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "code",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      icon: "cog",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "Flask", level: 82 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: "star",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Scikit-learn", level: 78 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 82 }
      ]
    },
    {
      title: "Tools & Databases",
      icon: "cloud",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 70 }
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary font-medium">{skill.name}</span>
        <span className="text-text-secondary text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-surface-elevated rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background border border-border-color rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center">
                  {category.icon === 'code' && <CodeIcon className="w-10 h-10 text-primary" />}
                  {category.icon === 'cog' && <CogIcon className="w-10 h-10 text-secondary" />}
                  {category.icon === 'cloud' && <CloudIcon className="w-10 h-10 text-accent" />}
                  {category.icon === 'star' && <StarIcon className="w-10 h-10 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6 sm:mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://www.udemy.com/certificate/UC-d6f72e20-3baf-44ff-8244-2c1fff0cabb8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border-color rounded-lg p-4 sm:p-6 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              <div className="mb-3 flex justify-center">
                <CertificateIcon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Machine Learning with R Studio</h4>
              <p className="text-text-secondary text-sm">Complete ML Course - Udemy</p>
              <p className="text-primary text-xs mt-2 font-medium">View Certificate →</p>
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-73e05f8c-78bf-4bbc-b3b4-c26d2b3c59f0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border-color rounded-lg p-4 sm:p-6 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              <div className="mb-3 flex justify-center">
                <TrophyIcon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Python Bootcamp</h4>
              <p className="text-text-secondary text-sm">Master Python Visually - Udemy</p>
              <p className="text-accent text-xs mt-2 font-medium">View Certificate →</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills