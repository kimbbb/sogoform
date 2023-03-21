import Header from "../../component/Header";
import * as M from "../../styled/main"
import Carousel from "../../images/main-img.png"
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";

function Main() {

  let navigate=useNavigate();
  return(
    <>
      <Header/>
      <M.carousel src={Carousel}/>
      <M.box>
        <M.gidebox>
          <M.faq onClick={()=>{navigate('')}}/>
          <M.tip/>
        </M.gidebox>
        <M.footer/>
      </M.box>
      <Button/>
    </>
  )
}

export default Main;