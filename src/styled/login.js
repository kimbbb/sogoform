import styled from "styled-components";
import background from "../images/bg.png"
import iconbg from "../images/icon.png";

export const bg=styled.div`
  background-image:url(${background});
  width:100%;
  height:100vh;
`

export const box=styled.div`
  width:1100px;
  height:700px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  border-radius:20px;
  background: rgba(231, 246, 255, 0.56);
  backdrop-filter: blur(20px);
`

export const sidebar=styled.div`
  width: 300px;
  height:100%;
  position:absolute;
  right:0%;
  background: rgba(255, 255, 255, 0.6);
  border-radius:0px 20px 20px 0px;
`

export const icon=styled.div`
  width: 200px;
  height:200px;
  background-color:#fff;
  border-radius:100%;
  position:absolute;
  top:44%;
  left:50%;
  transform:translate(-50%, -50%);
  background-image:url(${iconbg});
`

export const sidelogo=styled.p`
  color:#828282;
  font-size:22px;
  position:absolute;
  bottom:20px;
  left:50%;
  transform:translate(-50%)
`

