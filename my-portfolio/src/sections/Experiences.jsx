import React from 'react'
import content from '../data/content.json'

export default function Experience() {
  const items = content.experiences || []

  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
        <span className="h-[1px] w-6 bg-neutral-700" /> Experience
      </div>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Where I’ve Worked
      </h2>

      {/* List (resume-style) */}
      <ol className="mt-8 space-y-6">
        {items.map((job) => (
          <li
            key={`${job.company}-${job.role}-${job.period}`}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5"
          >
            {/* Top row: role + company + dates/location */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div className="text-base md:text-lg font-medium">
                <span className="text-neutral-100">{job.role}</span>
                <span className="text-neutral-400"> — {job.company}</span>
              </div>

              <div className="text-sm text-neutral-400">
                {job.period}
                {job.location ? ` · ${job.location}` : ''}
              </div>
            </div>

            {/* Bullets */}
            {Array.isArray(job.bullets) && job.bullets.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-neutral-300 marker:text-neutral-500 space-y-1.5">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
