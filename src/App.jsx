import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Registration from './components/Registration'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
