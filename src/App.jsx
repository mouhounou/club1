import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import One from './components/one/One'
import Two from './components/two/Two'
import Three from './components/exo3/Three'
import Four from './components/exo4/Four'
import Five from './components/exo5/Five'
import Six from './components/exo6/Six'
import Seven from './components/exo7/Seven'
import Eight from './components/exo8/Eight'
import Nine from './components/exo9/Nine'
import Ten from './components/exo10/Ten'


function App() {
  return (
    <>  
        <Navbar/>
        <Routes>
          <Route path='/' element ={<One/>}/>
          <Route path='/exo2' element = {<Two/>}/>
          <Route path='/exo3' element = {<Three/>}/>
          <Route path='/exo4' element = {<Four/>}/>
          <Route path='/exo5' element = {<Five/>}/>
          <Route path='/exo6' element = {<Six/>}/>
          <Route path='/exo7' element = {<Seven/>}/>
          <Route path='/exo8' element = {<Eight/>}/>
          <Route path='/exo9' element = {<Nine/>}/>
          <Route path='/exo10' element = {<Ten/>}/>
        </Routes>
    </>
  )
}

export default App
