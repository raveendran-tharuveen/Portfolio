import React from 'react'; 
import Navbar from '../components/Navbar'

export default function About() {
  return (

    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      {/* Kicker + headline */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
        <span className="h-[1px] w-6 bg-neutral-700" /> About
      </div>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Who I Am
      </h2>

      {/* Small tagline */}
      <p className="mt-4 max-w-prose text-neutral-300">
        <span className="text-emerald-300 font-medium">Languages</span>, <span className="text-emerald-300 font-medium">frameworks</span>
            , and <span className="text-emerald-300 font-medium">tools</span> I use to build innovative software applications. Here’s my current stack:
      </p>

      {/* Programming Languages */}
      <h3 className="mt-10 text-xl md:text-2xl font-semibold">Programming Languages</h3>
      <TechGrid
        items={[
          { label: 'Java', icon: 'devicon-java-plain colored' },
          { label: 'Python', icon: 'devicon-python-plain colored' },
          { label: 'C', icon: 'devicon-c-plain colored' },
          { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
          { label: 'TypeScript', icon: 'devicon-typescript-plain colored' }
        ]}
      />

      {/* Frameworks / Libraries */}
      <h3 className="mt-10 text-xl md:text-2xl font-semibold">Frameworks & Libraries</h3>
      <TechGrid
        items={[
          { label: 'React', icon: 'devicon-react-original colored' },
          { label: 'Next.js', icon: 'devicon-nextjs-original' },       // Next icon is monochrome—intentional
          { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
          { label: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
          { label: 'React Native', icon: 'devicon-react-original colored' }
        ]}
      />

      {/* Tools / Platforms */}
      <h3 className="mt-10 text-xl md:text-2xl font-semibold">Tools & Platforms</h3>
      <TechGrid
        items={[
          { label: 'Git', icon: 'devicon-git-plain colored' },
          { label: 'Docker', icon: 'devicon-docker-plain colored' },
          { label: 'SQLite', icon: 'devicon-sqlite-plain colored' },
          { label: 'Node.js', icon: 'devicon-nodejs-plain colored' },
          { label: 'VS Code', icon: 'devicon-vscode-plain colored' }
      // monochrome
        ]}
      />
    </section>
  )
}

/** Small reusable grid with icons + labels (accessible, responsive) */
function TechGrid({ items = [] }) {
  return (
    <ul
      className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
      role="list"
    >
      {items.map((it) => (
        <li
          key={it.label}
          className="group flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4
                     hover:border-neutral-700 hover:shadow-2xl transition will-change-transform hover:-translate-y-[2px]"
          aria-label={it.label}
          title={it.label}
        >
          <i className={`${it.icon} text-[40px] md:text-[44px]`} aria-hidden="true"></i>
          <span className="text-xs text-neutral-300">{it.label}</span>
        </li>
      ))}
    </ul>
  )
}
