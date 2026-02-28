import Image from "next/image"
import { Mail, Linkedin, MapPin, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="mb-3 font-mono text-sm text-primary opacity-0 animate-fade-in-up">
            {"Bonjour, je suis"}
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground opacity-0 animate-fade-in-up animation-delay-200 text-balance lg:text-5xl">
            Ghizlane El-Idrissi
          </h1>
          <h2 className="mb-6 text-lg text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 text-pretty lg:text-xl">
            {"Etudiante en Genie Informatique"}
            <span className="text-primary">{" — IA & Data"}</span>
          </h2>
          <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animation-delay-600">
            {"Eleve ingenieure a l'EMSI, specialisation Intelligence Artificielle et Data. Passionnee par l'analyse de donnees, la modelisation predictive et le developpement backend."}
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:idrissi.ghizlane2019@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </a>
            <a
              href="https://linkedin.com/in/El-Idrissi-Ghizlane"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Rabat / Fes, Maroc
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur-2xl" />
            <Image
              src="/images/profile.jpg"
              alt="Photo de Ghizlane El-Idrissi"
              width={360}
              height={360}
              className="relative rounded-full border-2 border-border object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll vers le bas"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
