import './App.css';
import Homepage from './componect/homepage';
import Cv from './componect/cv';
import Everyday from './componect/everyday';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Withher from './componect/withher';


function App() {
  return (
    <div className ={App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/cv' element={<Cv/>}/>
          <Route path='/everyday' element={<Everyday/>}/>
          <Route path='/withher' element={<Withher/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
