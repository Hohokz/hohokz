import './App.css';
import Homepage from './componect/homepage';
import Cv from './componect/cv';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className ={App}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/cv' element={<Cv/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
