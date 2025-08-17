import React from 'react'

/**
 * TypewriterCycle
 * - Cycles through an array of `phrases`, typing and deleting each.
 * - Speeds/pause are configurable; accessible with aria-live.
 */
export default function TypewriterCycle({
  phrases = [],
  className = '',
  typingSpeed = 85,     // ms per character when typing
  deletingSpeed = 45,   // ms per character when deleting
  startDelay = 300,     // initial delay before the very first character
  holdTime = 1200,      // pause at full word before deleting
  loop = true,
}) {
  const safePhrases = phrases.length ? phrases : ['React Developer', 'Full-stack Engineer', 'API Builder']
  const [phraseIdx, setPhraseIdx] = React.useState(0)
  const [charIdx, setCharIdx] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)
  const full = safePhrases[phraseIdx]
  const visible = full.slice(0, charIdx)

  React.useEffect(() => {
    let t

    // initial startup delay
    if (charIdx === 0 && !deleting && phraseIdx === 0) {
      t = setTimeout(() => setCharIdx(1), startDelay)
      return () => clearTimeout(t)
    }

    const finishedTyping = charIdx === full.length && !deleting
    const finishedDeleting = charIdx === 0 && deleting

    if (finishedTyping) {
      // hold, then start deleting
      t = setTimeout(() => setDeleting(true), holdTime)
    } else if (finishedDeleting) {
      // move to next phrase
      const next = (phraseIdx + 1) % safePhrases.length
      setPhraseIdx(next)
      setDeleting(false)
      t = setTimeout(() => setCharIdx(1), 250) // tiny pause before typing next
    } else {
      // keep typing or deleting
      t = setTimeout(() => {
        setCharIdx((i) => i + (deleting ? -1 : 1))
      }, deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(t)
  }, [charIdx, deleting, phraseIdx, full.length, typingSpeed, deletingSpeed, holdTime, startDelay])

  // If not looping and we’ve typed the last phrase, stop (optional behavior)
  React.useEffect(() => {
    if (!loop && phraseIdx === safePhrases.length - 1 && charIdx === full.length && !deleting) {
      // stop updates by no-op (leaving effect without scheduling next)
    }
  }, [loop, phraseIdx, charIdx, full.length, deleting, safePhrases.length])

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {visible}
      <span className="caret text-emerald-400 align-baseline" aria-hidden="true">|</span>
    </span>
  )
}
