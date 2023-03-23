import styled from "styled-components";

export const box = styled.div`
  width:70%;
  height: 86%;
  overflow:auto;
  top:80px;
  position:absolute;
  left:50%;
  top:54%;
  transform:translate(-50%, -50%);
  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    border-radius: 10px;
    background: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background: #74E9A3;
    border-radius: 10px;
    height: 30%;
  }
`

export const list = styled.div`
  width:70%;
  position:absolute;
  left:50%;
  transform:translate(-50%);
  `
  
export const imgbox = styled.div`
  width:100%;
  height:300px;
  background-color:#F5F5F5;
  margin:30px 0px;
  border:none;
  position:relative;
`

export const uplode = styled.input`
  margin:20px;
  position:relative;
`

export const preview = styled.div`
  height:100%;
  width:100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const title = styled.input`
  width:100%;
  height:60px;
  border:1px solid #828282;
  border-radius:15px;
  padding:20px;
  &:focus{
    outline:none;
  }
`

export const bank = styled.div`
  
`

export const bankname = styled.select`
  width:28%;
  height:50px;
  border-radius:15px;
  margin-right:2%;
  border:1px solid #828282;
`

export const bankoption = styled.option`
  text-align:center;
`

export const account = styled.input`
  width:40%;
  height:50px;
  border-radius:15px;
  border:1px solid #828282;
  padding:10px;
  &:focus{
    outline:none;
  }
`

export const name = styled.input`
  width:28%;
  height:50px;
  border-radius:15px;
  margin-left:2%;
  border:1px solid #828282;
  padding:10px;
  &:focus{
    outline:none;
  }
`

export const contents = styled.div`
  width:100%;
  border-radius:15px;
  height:300px;
  background-color:#fff;
  border:1px solid #828282;
  padding:10px;
`

export const content = styled.textarea`
  width:100%;
  height:100%;
  border:none;
  resize: none;
  overflow:auto;
  padding:10px;
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
  &:focus{
    outline:none;
  }
`

export const text = styled.p`
  margin:20px 0px 6px 0px;
  font-weight:600;
  font-size:18px;
`

export const create = styled.button`
  width:100%;
  height:70px;
  background-color:#74E9A3;
  font-size:20px;
  font-weight:600;
  color:#fff;
  border:none;
  border-radius:15px;
  margin-top:30px;
  &:focus{
    outline: 3px solid rgba(116, 233, 163, 0.5);
  }
`
