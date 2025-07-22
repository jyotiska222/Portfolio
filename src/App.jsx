import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-text-primary relative overflow-hidden">
        {/* Unified animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }}></div>
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2000ms' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1500ms' }}></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2000ms' }}></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-10" style={{ animationDelay: '1000ms' }}></div>
          <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '3000ms' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '2500ms' }}></div>
        </div>

        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          {/* <Experience /> */}
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App