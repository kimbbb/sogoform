import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as L from "../../styled/login"
import axios from "axios";


function Sign() {
  
  let navigate=useNavigate();

  let [selected, setSelected]=useState("");
  let [id, setId]=useState();
  let [password, setPassword]=useState();
  let [phone, setPhone]=useState();

  useEffect(()=>{
    console.log(selected);
  },[selected])

  return(
    <>
    <L.bg>
      <L.box>

        <L.main>
          <L.contents>
            <L.header>SIGN UP</L.header>
            <L.detail placeholder="ID" type='text' onChange={(e)=>{setId(e.target.value)}}/>
            <L.detail placeholder="PASSWORD" type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <L.detail placeholder="PHONE NUMBEER" type='number' onChange={(e)=>{setPhone(e.target.value)}}/>
            <L.go onClick={()=>{
              axios
              .post('/', { id: id, password: password, phone:phone, type: selected })
              .then((result) => {navigate("/")})
              .catch(()=>{alert('회원가입에 실패하셨습니다😥')})
            }}>SIGN UP</L.go>
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