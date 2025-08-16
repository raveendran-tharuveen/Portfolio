import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [open,setOpen]=React.useState(false)
    const item=({isActive})=>isActive?'opacity-100':'opacity-70 hover:opacity-100'
    React.useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>document.body.style.overflow=''},[open])

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(0,0,0,.6)] border-b border-neutral-800/60">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link to="/" className="font-semibold tracking-tight">{'Tharuveen Raveendran'}</Link>
                <div className="hidden md:flex gap-6 text-sm">
                    <NavLink to="/about" className={item}>About</NavLink>
                    <NavLink to="/projects" className={item}>Projects</NavLink>
                    <NavLink to="/articles" className={item}>Experience</NavLink>
                    <NavLink to="/contact" className={item}>Contact</NavLink>
                </div>
                <button className="md:hidden rounded p-2 border border-neutral-800/60" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
                    {open?'✕':'☰'}
                </button>
            </nav>
            {open && (
                <div className="md:hidden border-t border-neutral-800/60 bg-[rgba(0,0,0,.9)]">
                    <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 text-sm">
                        <NavLink to="/about" onClick={()=>setOpen(false)} className={item}>About</NavLink>
                        <NavLink to="/projects" onClick={()=>setOpen(false)} className={item}>Projects</NavLink>
                        <NavLink to="/experiences" onClick={()=>setOpen(false)} className={item}>Experiences</NavLink>
                        <NavLink to="/contact" onClick={()=>setOpen(false)} className={item}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}