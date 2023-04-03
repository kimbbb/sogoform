import styled from "styled-components";

export const box=styled.div`
  width:100%;
  height:90vh;
  position:absolute;
  top:80px;
`

export const title = styled.div`
  width:100%;
  height:80px;
  background-color:#000;
  color:#fff;
  font-size:24px;
  font-weight:600;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const close = styled.img`
  width:40px;
  height:40px;
  position:absolute;
  left:15%;
  cursor: pointer;
`

export const innerbox = styled.div`
  width:100%;
  height:90%;
  overflow:auto;
  margin-top:10px;
  padding:30px;
  display:flex;
  justify-content:center;
`

export const inbox = styled.div`
  width:50%;
  min-width:500px;
`

export const top = styled.div`
  width:100%;
  border:1px solid #000;
  padding:20px;
`

export const imgbox = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const topimg = styled.img`
  max-width:100%;
  max-height:100%;
  min-height:20%;
`

export const cotent = styled.div`
  width:100%;
  height:38%;
  margin-top:2%;
  overflow:auto;
`

export const bottom = styled.div`
  width:100%;
  height:550px;
  padding-top:10px;
`

export const contenttext = styled.div`
  font-size:22px;
  font-weight:800;
  margin:16px 0px 10px 0px;
  display: flex;
  align-items: center;
`

export const copy=styled.button`
  width:60px;
  height:30px;
  background-color:#74E9A3;
  font-size:14px;
  color:#fff;
  border:none;
  border-radius:6px;
  margin-left:10px;
`


export const bank = styled.p`
  margin:0px;
`

export const information=styled.input`
  width:100%;
  height:50px;
  border-radius:6px;
  border:1px solid #828282;
  margin-bottom:8px;
  padding:10px;
  &:focus{
    outline:none;
    border:2px solid #74E9A3;
  }
`

export const submit = styled.button`
  width:100%;
  height:60px;
  background-color:#74E9A3;
  border:none;
  border-radius:14px;
  margin-top:30px;
  font-size:18px;
  font-weight:600;
  color:#fff;
`



