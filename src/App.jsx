
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Collection from './pages/collections/index.jsx';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route  exact path='/' element={<Home />} />
           <Route  exact path='/collection' element={<Collection />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
