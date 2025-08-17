import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 text-center"
    >
      {/* Header */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
        <span className="h-[1px] w-6 bg-neutral-700" /> Get in Touch
      </div>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Let’s connect
      </h2>
      <p className="mt-3 text-neutral-300">
        Always open to new opportunities and collaborations.  
        Feel free to reach out directly.
      </p>

      {/* Links */}
      <div className="mt-6 flex flex-col items-center gap-4 text-sm md:flex-row md:justify-center">
        <a
          href="mailto:tharravi07@gmail.com"
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          tharravi07@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/tharuveen-raveendran"
          target="_blank"
          rel="noreferrer"
          className="border border-neutral-700/60 px-5 py-2 rounded-md font-medium hover:bg-neutral-900 transition text-neutral-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
