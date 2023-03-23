import Header from "../../component/Header";
import * as M from "../../styled/main"
import Carousel from "../../images/main-img.png"
import Button from "../../component/Button";

function Main() {
  return(
    <>
      <Header/>
      <M.carousel src={Carousel}/>
      <M.box>
        <M.gidebox>
          <M.faq onClick={() => window.open('', '_blank')}/>
          <M.tip/>
        </M.gidebox>
        <M.footer/>
      </M.box>
      <Button/>
    </>
  )
}

export default Main;