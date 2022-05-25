import React, { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Обо мне'

    return () => {
      document.title = 'UI / UX Designer'
    }
  }, [])

  return (
    <div>AboutPage</div>
  )
}
