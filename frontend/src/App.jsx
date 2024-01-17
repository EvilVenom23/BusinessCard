import { useEffect, useState } from 'react'

import Card from "./pages/Card.jsx"
import AppBar from "./components/AppBar.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // const nam = "Sinchan";
  // const dis = "Meri umar 5 sal hai aur mai Nohara family se hun"
  // const inst = ['ladkiyan',' aur ladkiyan', 'bahut saari ladkiyan'
  const [bcards, setBcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/see")
      .then(async (res) => {
        const json = await res.json();
        setBcards(json.cards);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching business cards:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // You can render a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div > 
 
    <BrowserRouter>
    <AppBar>
      <Routes>
        <Route path = "/see" element = {<Card bcards={bcards}/>}/>
        {/* <Route path='/add' element ={<CreateCard/>}/> */}
      </Routes>
    </AppBar>
    </BrowserRouter>
    </div>
  )
}

export default App
