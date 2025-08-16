import React from 'react'; 
import Navbar from '../components/Navbar'

export default function Contact(){ 
    return (
    <><Navbar />
        <main className="mx-auto max-w-4xl px-4 py-10">
            <h1 className="text-3xl font-semibold">
                Contact
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:tharravi07@gmail.com" className="rounded-md px-4 py-2 text-sm font-medium bg-white text-black hover:opacity-90">
                    Email Me
                </a>
                <a href="https://linkedin.com/in/tharuveen-raveendran" target="_blank" rel="noreferrer" className="rounded-md px-4 py-2 text-sm font-medium border border-neutral-700/60 hover:bg-neutral-900">
                    LinkedIn →
                </a>
            </div>
        </main>
    </>) }