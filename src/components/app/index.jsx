import { useEffect } from 'react'
import { ApplicationForm } from '../application-form'
import { Footer } from '../footer'
import { Gallery } from '../gallery'
import { Header } from '../header'
import { Laboratory } from '../laboratory'
import { Preview } from '../preview'

export function App() {
  useEffect(() => {
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        let href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = document.getElementById('header').offsetHeight
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      })
    })
  })

  return (
    <>
      <Header />
      <Laboratory />
      <Gallery />
      <Preview />
      <ApplicationForm />
      <Footer />
    </>
  )
}
