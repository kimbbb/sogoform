import {Routes, Route} from "react-router-dom";
import Main from './page/Main'
import Login from './page/user/Login'


function App() {
  return (
    <>
    <Routes>
      <Route path="/main" element={<Main/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;