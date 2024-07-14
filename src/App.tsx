import { Logo } from './components/logo'
import { ArrowIcon } from './components/arrow-icon'
import './App.scss'

export default function App() {
  return (
    <main>
      <header className='header-container'>
        <Logo/>

        <nav className="menu-options">
          <a href="">What we offer</a>
          <a href="">How it works</a>
          <a href="">Portfolio</a>
        </nav>

        <button>
          <div className='btn-face-white'>
          Contact Us <ArrowIcon/>  
          </div>

          <div className='btn-face-purple'>
            Contact Us <ArrowIcon/>
          </div>
        </button> 
      </header>

      <div className="content-container">
        <div className="heading-container">
          <h2>Let's grow your</h2>
          <h2>social presence</h2>
        </div>

        <div className="bubble target">
          🎯
        </div>

        <div className="bubble shop">
          🛍️
        </div>

        <div className="bubble rocket">
          🚀
        </div>

        <div className="bubble fire">
          🔥
        </div>
      </div>
    </main>
  )
}