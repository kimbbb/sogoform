import * as H from "../styled/header"
import Logo from "../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const {pathname} = useLocation();

  return(
    <>
      <H.head>
        <H.logobox>
          <H.logo src={Logo} onClick={()=>{navigate('/main')}}/>
          <H.move isHere={pathname === "/sell"} onClick={()=>{navigate('/sell')}}>판매</H.move>
          <H.move  isHere={pathname === "/buy"} onClick={()=>{navigate('/buy')}}>구매</H.move>
          <H.move  isHere={pathname === "/form"} onClick={()=>{navigate('/form')}}>폼관리</H.move>
        </H.logobox>
        <H.logout onClick={()=>{navigate('/')}}>로그아웃</H.logout>
      </H.head>
    </>
  )
}

export default Header;