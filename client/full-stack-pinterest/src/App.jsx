import './app.css'
import Gallery from './components/gallery/gallery'
import Leftbar from './components/leftbar/leftbar'
import Topbar from './components/topbar/topbar'

const App = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='container'>
      <Topbar/>
      <Gallery/>

    </div>
    </div>
  )
}

export default App