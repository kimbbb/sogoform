import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import box from "../images/box.png";
import text from "../images/hover.png";

const BtnBox=styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:hover .hover{
    display:block;
  }
`

const Btn = styled.div`
  background-image:url(${box});
  width: 120px;
  height: 100px;
  border: none;
`

const Hover=styled.img`
  position: absolute;
  right: 100%;
  top: 30%;
  display:none;
  height: 50px;
`


function Button(){

  let navigate=useNavigate();
  return(
    <>
      <BtnBox>
        <Btn onClick={()=>{navigate('/sell')}}/>
        <Hover className="hover" src={text}/>
      </BtnBox>
    </>
  )
}

export default Button;