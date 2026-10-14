import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Footer from './components/Footer'
import About from './components/Abouts'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Work />
      </main>
      <Footer />
    </>
  )
}