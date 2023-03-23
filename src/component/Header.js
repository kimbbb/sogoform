import * as H from "../styled/header"
import Logo from "../images/logo.png";
import { event } from "jquery";
import $ from "jquery";

function Header() {


  return(
    <>
      <H.head>
        <H.logobox>
          <H.logo src={Logo}/>
          <H.move href="/sell" onClick={()=>{}}>판매</H.move>
          <H.move href="/buy">구매</H.move>
          <H.move href="/">폼관리</H.move>
        </H.logobox>
        <H.logout href="/">로그아웃</H.logout>
      </H.head>
    </>
  )
}

export default Header;