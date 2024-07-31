import { ApplicationForm } from '../application-form'
import { Footer } from '../footer'
import { Gallery } from '../gallery'
import { Header } from '../header'
import { Laboratory } from '../laboratory'
import { Preview } from '../preview'

export function App() {
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
