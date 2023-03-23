import {Routes, Route} from "react-router-dom";
import Sell from "./page/item/Sell";
import Main from './page/main/Main'
import Login from './page/user/Login'
import Sign from './page/user/Sign'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/sell" element={<Sell/>}/>
    </Routes>
    </>
  );
}

export default App;