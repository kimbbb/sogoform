import styled from "styled-components";

export const head = styled.div`
  display: flex;
  align-items:center;
  width:100%;
  height:80px;
  background-color:#fff;
  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.08);
  position:fixed;
`

export const logobox = styled.div`
  position: absolute;
  left: 15%;
`

export const logo = styled.img`
  width:240px;
  height:24px;
  margin-right:20px;
`

export const move = styled.a`
  text-decoration:none;
  color:#828282;
  margin-left:20px;
  &:hover{
    color:#74E9A3;
  }
  &:focus{
    color:#74E9A3;
  }
`

export const logout = styled.a`
  text-decoration:none;
  color:#828282;
  position: absolute;
  right: 15%;
  &:hover{
    color:#74E9A3;
  }
  &:focus{
    color:#74E9A3;
  }
`