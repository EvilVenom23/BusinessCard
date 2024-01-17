

import Card from "./pages/Card.jsx"
import CreateCard from "./pages/CreateCard.jsx"
import AppBar from "./components/AppBar.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div > 
 
 <BrowserRouter>
    <AppBar/>
      <Routes>
        <Route path = "/see" element = {<Card/>}/>
        <Route path='/add' element ={<CreateCard/>}/>
      </Routes>

    </BrowserRouter>
    
    </div>
  )
}

export default App
