import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../../styled/login"
import axios from "axios";


function Login() {
  
  let navigate=useNavigate();
  let [id, setId]=useState();
  let [password, setPassword]=useState();

  return(
    <>
    <L.bg>
      <L.box>

        <L.main>
          <L.contents>
            <L.header>LOGIN</L.header>
            <L.detail placeholder="ID" type='text' onChange={(e)=>{
              setId(e.target.value)
            }}/>
            <L.detail placeholder="PASSWORD" type='password' onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <L.go onClick={()=>{
              axios
              .post('/', { id: id, password: password })
              .then((result) => {navigate("/main")})
              .catch((result)=>{alert('로그인에 실패하셨습니다 😥')});
            }}>LOGIN</L.go>
            <L.text>아직 회원이 아니라면? <L.move href="/sign">회원가입</L.move></L.text>
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

export default Login;