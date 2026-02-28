import { User, Brain, Code, Globe } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "IA & Machine Learning",
    description: "Supervised Learning, modelisation predictive, pretraitement des donnees.",
  },
  {
    icon: Code,
    title: "Developpement Full Stack",
    description: "Laravel, Django, React.js, ASP.NET, Java Swing.",
  },
  {
    icon: Globe,
    title: "Bases de Donnees",
    description: "MySQL, SQL Server, Oracle, PL/SQL, MongoDB, NoSQL.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="flex items-center gap-2 font-mono text-sm text-primary">
            <User className="h-4 w-4" />
            A PROPOS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {"Eleve ingenieure en Genie Informatique a l'Ecole Marocaine des Sciences de l'Ingenieur (EMSI), specialisation Intelligence Artificielle et Data."}
            </p>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              {"Dotee de competences solides en Python, Machine Learning supervise, bases de donnees et developpement backend. Interessee par l'analyse de donnees, la modelisation predictive et l'optimisation des performances. Prete a contribuer a des projets analytiques et innovants."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Arabe : Maternelle", "Francais : C1", "Anglais : B2"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
