import Header from "../../component/Header";
import * as M from "../../styled/main"
import Carousel from "../../images/main-img.png"

function Main() {
  return(
    <>
      <Header/>
      <M.carousel src={Carousel}/>
      <M.box>
        <M.gidebox>
          <M.faq/>
          <M.tip/>
        </M.gidebox>
        <M.footer/>
      </M.box>
    </>
  )
}

export default Main;