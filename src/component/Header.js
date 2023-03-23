import * as H from "../styled/header"
import Logo from "../images/logo.png";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  function click() {
    
  }

  return(
    <>
      <H.head>
        <H.logobox>
          <H.logo src={Logo} onClick={()=>{navigate('/main')}}/>
          <H.move onClick={()=>{navigate('/sell')}}>판매</H.move>
          <H.move onClick={()=>{navigate('/buy')}}>구매</H.move>
          <H.move onClick={()=>{navigate('/form')}}>폼관리</H.move>
        </H.logobox>
        <H.logout onClick={()=>{navigate('/')}}>로그아웃</H.logout>
      </H.head>
    </>
  )
}

export default Header;