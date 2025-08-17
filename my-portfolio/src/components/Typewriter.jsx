import React from 'react'

/**
 * Typewriter
 * - Types `text` one character at a time.
 * - `speed`: ms per character
 * - `startDelay`: delay before typing starts
 * - `loop`: if true, erases and retypes forever
 */
export default function Typewriter({
  text,
  className = '',
  speed = 90,
  startDelay = 300,
  loop = false,
}) {
  const [idx, setIdx] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    let t
    // initial delay before typing starts
    if (idx === 0 && !deleting) {
      t = setTimeout(() => setIdx(1), startDelay)
      return () => clearTimeout(t)
    }

    const doneTyping = idx === text.length && !deleting
    const doneDeleting = idx === 0 && deleting

    if (doneTyping) {
      if (loop) {
        t = setTimeout(() => setDeleting(true), 1000) // pause at full text
      }
    } else if (doneDeleting) {
      t = setTimeout(() => setDeleting(false), 400) // pause at empty
    } else {
      t = setTimeout(() => {
        setIdx((i) => i + (deleting ? -1 : 1))
      }, speed)
    }

    return () => clearTimeout(t)
  }, [idx, deleting, loop, speed, startDelay, text.length])

  const visible = text.slice(0, idx)

  return (
    <span className={className} aria-label={text}>
      {visible}
      {idx < text.length && (
      <span className="caret text-emerald-400 align-baseline" aria-hidden="true">|</span>
    )}
    </span>
  )
}
