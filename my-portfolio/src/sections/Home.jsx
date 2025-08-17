import React from 'react'
import content from '../data/content.json'
import TypeWriter from '../components/TypeWriter'
import TypeWriterCycle from '../components/TypeWriterCycle' // make sure the filename matches exactly

export default function Home() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        {/* LEFT: Name, blurb, CTAs */}
        <div className="md:col-span-7 animate-slide-up">
          {/* Kicker line */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
            <span className="h-[1px] w-6 bg-neutral-700" />
            Hello, I’m
          </div>

          {/* Name with typewriter + gradient */}
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            <TypeWriter
              text={content.name}
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
              speed={85}
              startDelay={300}
              loop={false}
            />
          </h1>

          {/* Cycling subtitle below the name */}
          <div className="mt-1 text-xl md:text-2xl text-emerald-300">
            <TypeWriterCycle
              phrases={content.roles}
              typingSpeed={85}
              deletingSpeed={45}
              startDelay={250}
              holdTime={1000}
              loop={true}
            />
          </div>

          {/* Short description */}
          <p className="mt-12 text-neutral-300 animate-fade-in font-serif">
            {content.about}
          </p>

          {/* Primary calls-to-action */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="/Resume.pdf"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              View Resume
            </a>

            <a
              href="https://linkedin.com/in/tharuveen-raveendran"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/raveendran-tharuveen"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Github
            </a>
          </div>

          {/* Quick highlights strip */}
          <ul className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
            <li className="rounded border border-neutral-700/60 px-2 py-1">
              Winner — Best Hardware Hack (yuHacks)
            </li>
            <li className="rounded border border-neutral-700/60 px-2 py-1">
              Full-stack: React · FastAPI · SQLite
            </li>
            <li className="rounded border border-neutral-700/60 px-2 py-1">
              Toronto, Canada
            </li>
          </ul>
        </div>

        {/* RIGHT: Photo card */}
        <div className="md:col-span-5 animate-fade-in">
          <figure className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-2 shadow-lg">
            <img
              src="/images/IMG_1205.jpg"
              alt={`${content.name} headshot`}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

