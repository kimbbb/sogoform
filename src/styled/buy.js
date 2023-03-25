import styled from "styled-components";

export const box=styled.div`
  width:70%;
  height:80vh;
  position:absolute;
  top:54%;
  left:50%;
  transform:translate(-50%, -50%);
  overflow:auto;
  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    border-radius: 10px;
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #74E9A3;
    border-radius: 10px;
    height: 30%;
  }
`

export const cardbox =styled.div`
  width:250px;
  height:300px;
  border-radius:15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  float:left;
  margin:0px 0px 50px 70px;
`

export const top = styled.div`
  width:100%;
  height:60%;
  background-color:#EAE9E9;
  border-radius:15px 15px 0px 0px;
`

export const bottom = styled.div`
  width:100%;
  height:40%;
  background-color:#fff;
  border-radius:0px 0px 15px 15px;
  padding:14px;
`

export const title = styled.h4`

`
export const gobtn = styled.button`
  width:100px;
  height:40px;
  background-color:#74E9A3;
  color:#fff;
  font-weight:600;
  border:none;
  border-radius:8px;
  margin-top:10px;
  :focus{
    outline:none;
  }
`

