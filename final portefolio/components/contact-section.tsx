import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "idrissi.ghizlane2019@gmail.com",
    href: "mailto:idrissi.ghizlane2019@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "El-Idrissi Ghizlane",
    href: "https://linkedin.com/in/El-Idrissi-Ghizlane",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "06 87 51 05 93",
    href: "tel:+212687510593",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Rabat / Fes, Maroc",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="flex items-center gap-2 font-mono text-sm text-primary">
            <Send className="h-4 w-4" />
            CONTACT
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Left - message */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground text-balance">
              {"Travaillons ensemble"}
            </h3>
            <p className="mb-8 leading-relaxed text-muted-foreground text-pretty">
              {"Je suis ouverte aux opportunites de stage, de collaboration sur des projets analytiques et innovants, et a toute discussion autour de l'IA et la Data. N'hesitez pas a me contacter !"}
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - visual card */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                Disponible
              </div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Ghizlane El-Idrissi
              </h4>
              <p className="mb-6 text-sm text-muted-foreground">
                {"Ingenieure IA & Data en formation"}
              </p>
              <a
                href="mailto:idrissi.ghizlane2019@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
