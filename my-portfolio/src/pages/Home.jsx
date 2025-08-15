import React from 'react'
import content from '../data/content.json'

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {content.name}
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-lg text-neutral-300">{content.tagline}</p>

      {/* About */}
      <p className="mt-6 text-neutral-300">{content.about}</p>

      {/* Links */}
      <div className="mt-6 flex gap-4 text-sm">
        {content.headline_links && content.headline_links.map((l) => {
          return (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-300"
            >
              {l.label} →
            </a>
          )
        })}
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-2xl font-medium">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
          {content.skills && content.skills.map((s) => {
            return (
              <li
                key={s}
                className="rounded border border-neutral-700/60 px-2 py-1"
              >
                {s}
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
