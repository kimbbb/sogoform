import {Routes, Route} from "react-router-dom";
import Buy from "./page/item/Buy";
import Sell from "./page/item/Sell";
import Main from './page/main/Main'
import Login from './page/user/Login'
import Sign from './page/user/Sign'
import Form from "./page/form/Form";
import Detail from "./page/item/Detail";
import SellForm from "./page/form/Sell";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/buy" element={<Buy/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/form/sell" element={<SellForm/>}/>
    </Routes>
    </>
  );
}

export default App;