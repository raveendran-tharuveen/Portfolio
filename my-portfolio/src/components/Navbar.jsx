import React from 'react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  // Lock/unlock scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const item = 'opacity-80 hover:opacity-100'

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand -> scroll to top/hero */}
        <a href="#home" className="font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
          Tharuveen Raveendran
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className={item}>About</a>
          <a href="#projects" className={item}>Projects</a>
          <a href="#experience" className={item}>Experience</a>
          <a href="#contact" className={item}>Contact</a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden rounded p-2 border border-neutral-800"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 text-sm">
            <a href="#about" onClick={() => setOpen(false)} className={item}>About</a>
            <a href="#projects" onClick={() => setOpen(false)} className={item}>Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className={item}>Experience</a>
            <a href="#contact" onClick={() => setOpen(false)} className={item}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
