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
          <M.faq onClick={() => window.open('https://boom-repair-1d9.notion.site/SOGOFORM-284badabb58f4a94a40ebd0b80f8138c', '_blank')}/>
          <M.tip/>
        </M.gidebox>
        <M.footer/>
      </M.box>
      <Button/>
    </>
  )
}

export default Main;