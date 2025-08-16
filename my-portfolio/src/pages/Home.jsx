import React from 'react'
import Navbar from '../components/Navbar'
import content from '../data/content.json'
export default function Home(){
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{content.name}</h1>
            <p className="mt-3 text-lg text-neutral-300">{content.tagline}</p>
            <p className="mt-6 text-neutral-300">{content.about}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {content.headline_links?.map(l=>(
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                   className="rounded-md px-4 py-2 border border-neutral-700/60 hover:bg-neutral-900">{l.label} →</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-neutral-800/60 p-6 bg-[#111827]">
              <h2 className="font-medium">Skills</h2>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
                {content.skills?.map(s=>(
                  <li key={s} className="rounded border border-neutral-700/60 px-2 py-1">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
