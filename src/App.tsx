import Navbar from "./components/layouts/navbar/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"

function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
