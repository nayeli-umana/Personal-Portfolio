import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
