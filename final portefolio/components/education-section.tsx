import { GraduationCap } from "lucide-react"

const educations = [
  {
    degree: "Diplome d'Ingenieur d'Etat",
    status: "En cours",
    school: "Ecole Marocaine des Sciences de l'Ingenieur (EMSI)",
    location: "Rabat",
    period: "2024 - 2027",
    description: "Genie Informatique, specialisation Intelligence Artificielle & Data.",
  },
  {
    degree: "Classe Preparatoire MP",
    status: "Attestation de reussite",
    school: "Benghazi Academy",
    location: "Fes",
    period: "2022 - 2024",
    description: "Classes preparatoires aux grandes ecoles, filiere Mathematiques-Physique.",
  },
  {
    degree: "Baccalaureat Scientifique",
    status: "Option Francais",
    school: "Fes City Lycee",
    location: "Fes",
    period: "2021 - 2022",
    description: "Baccalaureat scientifique avec option langue francaise.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="flex items-center gap-2 font-mono text-sm text-primary">
            <GraduationCap className="h-4 w-4" />
            FORMATION
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="flex flex-col gap-12">
            {educations.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <span className="font-mono text-xs text-primary">
                      {edu.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-primary/80">{edu.status}</p>
                    <p className="mt-2 text-sm font-medium text-foreground/80">
                      {edu.school} — {edu.location}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
