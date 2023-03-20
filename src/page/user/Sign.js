import { useNavigate } from "react-router-dom";
import * as L from "../../styled/login"


function Sign() {
  
  let navigate=useNavigate();

  return(
    <>
    <L.bg>
      <L.box>

        <L.main>
          <L.contents>
            <L.header>SIGN UP</L.header>
            <L.detail placeholder="ID" type='text'/>
            <L.detail placeholder="PASSWORD" type='password'/>
            <L.go onClick={()=>{navigate('/')}}>SIGN UP</L.go>
            <L.text>이미 회원이라면? <L.move href="/">로그인</L.move></L.text>
          </L.contents>
        </L.main>

        <L.sidebar>
          <L.icon/>
          <L.sidelogo>SOGOFORM</L.sidelogo>
        </L.sidebar>
      </L.box>
    </L.bg>
    </>
  )
}

export default Sign;