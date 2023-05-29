import styled from "styled-components";
import iconbg from "../images/icon.png";

export const bg=styled.div`
  width:100%;
  height:100vh;
`

export const bgimg = styled.img`
  width:100%;
  height:100%;
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

export const main=styled.div`
  width:800px;
  height:100%;
  position: absolute;
  border-radius:20px 0px 0px 20px;
`

export const contents=styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const header=styled.h2`
  color:#fff;
  margin-bottom:50px;
`

export const detail=styled.input`
  width:600px;
  height:60px;
  border-radius:16px;
  background: rgba(255, 255, 255, 0.9);
  border:none;
  padding:20px;
  font-size:18px;
  margin-bottom:20px;
  &:focus{
    outline:none;
    background-color:#fff;
  }
`

export const go = styled.button`
  width:300px;
  height:70px;
  background-color:#74E9A3;
  color:#fff;
  border:none;
  border-radius:10px;
  font-size:20px;
  margin:10px 0px 6px 0px;
  &:focus{
    background-color:#83FFB4;
  }
`

export const move = styled.a`
  text-decoration:none;
  color:#fff;
  font-weight:600;
  &:hover{
    color:#74E9A3;
  }
  &:focus{
    color:#74E9A3;
  }
`

export const text = styled.p`
  color:#fff;
  font-size:14px;
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
  top:48%;
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
  transform:translate(-50%);
`

