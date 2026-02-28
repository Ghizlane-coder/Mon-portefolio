"use client"

import { Wrench } from "lucide-react"

const skillCategories = [
  {
    category: "Langages",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "Django", "React.js", "ASP.NET", "Java Swing"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Bases de Donnees",
    skills: ["MySQL", "SQL Server", "Oracle", "PL/SQL", "T-SQL", "MongoDB", "NoSQL"],
  },
  {
    category: "Machine Learning",
    skills: ["Supervised Learning", "Modelisation Predictive", "Pretraitement", "MSE", "Accuracy"],
  },
  {
    category: "Modelisation",
    skills: ["Merise", "UML"],
  },
  {
    category: "Systemes & Outils",
    skills: ["Unix/Linux", "Word", "PowerPoint", "Excel"],
  },
]

const softSkills = [
  "Gestion de projets",
  "Esprit d'equipe",
  "Resolution de problemes",
  "Communication",
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="flex items-center gap-2 font-mono text-sm text-primary">
            <Wrench className="h-4 w-4" />
            COMPETENCES
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft skills */}
          <div className="group rounded-xl border border-primary/30 bg-primary/5 p-6 transition-colors hover:border-primary/60">
            <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-primary/10 px-3 py-1.5 text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
