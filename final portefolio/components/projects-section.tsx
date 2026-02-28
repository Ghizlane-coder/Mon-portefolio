"use client"

import { useState } from "react"
import { FolderOpen, Briefcase, ExternalLink } from "lucide-react"

const academicProjects = [
  {
    title: "Plateforme de Cours en Ligne",
    module: "Developpement Web",
    description: "Realisation d'une plateforme complete de cours en ligne avec gestion des contenus et inscriptions.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Gestion de Parc Automobile",
    module: "Python avec Django",
    description: "Systeme de gestion d'un parc automobile avec suivi des vehicules et des maintenances.",
    tags: ["Python", "Django"],
  },
  {
    title: "Gestion d'un Centre Medical",
    module: "POO en C++",
    description: "Application de gestion d'un centre medical avec suivi des patients et rendez-vous.",
    tags: ["C++", "POO"],
  },
  {
    title: "Gestion des Cours Scolaires",
    module: "POO en C++",
    description: "Systeme de gestion des cours dans une ecole avec planification et suivi.",
    tags: ["C++", "POO"],
  },
  {
    title: "Gestion des Conferences",
    module: "Projet de fin d'annee",
    description: "Systeme complet de gestion des conferences avec inscriptions, planification et suivi.",
    tags: ["Python", "Django"],
  },
  {
    title: "Gestion Universitaire",
    module: "Laravel / MongoDB",
    description: "Systeme de gestion universitaire avec gestion des etudiants, modules et notes.",
    tags: ["Laravel", "MongoDB", "PHP"],
  },
  {
    title: "Gestion des Ressources Humaines",
    module: "Java Swing",
    description: "Application desktop de gestion des RH avec suivi des employes et des conges.",
    tags: ["Java", "Swing"],
  },
  {
    title: "Prediction du Taux d'Occupation",
    module: "Machine Learning",
    description: "Systeme de prediction du taux d'occupation d'un hotel utilisant des algorithmes de ML supervise.",
    tags: ["Python", "ML", "Supervised Learning"],
  },
]

const professionalProjects = [
  {
    title: "Site de Maintenance Informatique",
    company: "INFODIX",
    description: "Realisation d'un site web de maintenance et de gestion des equipements informatiques lors d'un stage de premiere annee.",
    tags: ["Web", "Stage"],
  },
]

type Tab = "academic" | "professional"

export function ProjectsSection() {
  const [tab, setTab] = useState<Tab>("academic")

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="flex items-center gap-2 font-mono text-sm text-primary">
            <FolderOpen className="h-4 w-4" />
            PROJETS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setTab("academic")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
              tab === "academic"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <FolderOpen className="h-4 w-4" />
            Projets Academiques
          </button>
          <button
            onClick={() => setTab("professional")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
              tab === "professional"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Stage Professionnel
          </button>
        </div>

        {/* Projects grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tab === "academic"
            ? academicProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))
            : professionalProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl border border-primary/30 bg-primary/5 p-6 sm:col-span-2 lg:col-span-3"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs text-primary">
                      {project.company}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-3 py-1.5 text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  module,
  description,
  tags,
}: {
  title: string
  module: string
  description: string
  tags: string[]
}) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1">
      <div className="mb-3 flex items-start justify-between">
        <span className="font-mono text-xs text-primary">{module}</span>
        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
