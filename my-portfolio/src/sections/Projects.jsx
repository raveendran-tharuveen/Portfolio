import React from 'react'; 
import content from '../data/content.json'

export default function Projects() {
  const items = content.projects || []

  return (
    <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
        <span className="h-[1px] w-6 bg-neutral-700" /> Selected Work
      </div>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Projects
      </h2>
      <p className="mt-2 text-neutral-400">A few things I’ve built recently.</p>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

/* --- Local Card component (keeps this file self-contained) --- */
function ProjectCard({ project }) {
  const { title, description, tech = [], repo, demo, image } = project || {}

  return (
    <article
      className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5
                 shadow-lg transition hover:border-neutral-700 hover:shadow-2xl"
    >
      {/* Cover image (optional) */}
      {image && (
        <figure className="mb-4 overflow-hidden rounded-lg border border-neutral-800">
            <div className="aspect-video w-full"> {/* 16:9 ratio */}
                <img
                    src={image}
                    alt={`${title} cover`}
                    className="w-full h-48 object-contain bg-neutral-950"
                    loading="lazy"
                />
            </div>
        </figure>
      )}

      {/* Title + actions */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium">{title}</h3>

        <div className="flex items-center gap-3">
          {/* GitHub icon → repo link (always visible if repo exists) */}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} GitHub repository`}
              className="opacity-80 hover:opacity-100"
              title="View code on GitHub"
            >
              {/* Devicon GitHub mark */}
              <i className="devicon-github-original text-[22px]"></i>
            </a>
          )}

          {/* External link icon → live demo (only if provided) */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
              className="opacity-80 hover:opacity-100"
              title="Open live demo"
            >
              {/* simple external-link svg so we don't add a lib */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor" className="w-5 h-5">
                <path d="M11 3a1 1 0 100 2h2.586L8.293 10.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      {description && <p className="mt-2 text-sm text-neutral-400">{description}</p>}

      {/* Tech chips */}
      {tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="rounded border border-emerald-600/40 text-emerald-300 px-2 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>
      )}

      {/* Footer actions (buttons) */}
      <div className="mt-4 flex gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black
                       px-3 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Live
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700/60 px-3 py-1.5 rounded-md text-sm hover:bg-neutral-900 transition"
          >
            Code
          </a>
        )}
      </div>
    </article>
  )
}
