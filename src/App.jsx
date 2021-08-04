import Porfolio from './components/portfolio/Portfolio'
import Intro from './components/intro/Intro'
import TopBar from './components/topbar/TopBar'
import Contact from './components/contact/Contact'
import './app.scss'
import {useState} from 'react'
import Menu from './components/menu/Menu'


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Porfolio />
        <Contact />
      </div>
      
      
    </div>
  );
}

export default App;
