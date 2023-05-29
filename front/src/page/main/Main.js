import Header from "../../component/Header";
import * as M from "../../styled/main"
import Carousel from "../../images/main-img.png"
import Button from "../../component/Button";
import foot from "../../images/footer.png";
import gide from "../../images/faq.png";
import point from "../../images/point.png"


function Main() {
  return(
    <>
      <Header/>
      <M.carousel src={Carousel}/>
      <M.box>
        <M.gidebox>
          <M.faq src={gide} onClick={() => window.open('https://boom-repair-1d9.notion.site/SOGOFORM-284badabb58f4a94a40ebd0b80f8138c', '_blank')}/>
          <M.tip src={point}/>
        </M.gidebox>
        <M.footer src={foot}/>
      </M.box>
      <Button/>
    </>
  )
}

export default Main;