import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/home/home';
import { Addmenu } from './Components/addmenu/addmenu';
import { Viewmenu } from './Components/viewmenu/viewmenu';
import { UpdateMenu } from './Components/updatemenu.js/updatemenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addmenu" element={<Addmenu/>}/>
        <Route path="/viewmenu" element={<Viewmenu/>}/>
        <Route path='/updatemenu' element={<UpdateMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
