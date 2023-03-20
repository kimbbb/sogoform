import styled from "styled-components";
import foot from "../images/footer.png";
import gide from "../images/faq.png";
import point from "../images/point.png"

export const carousel = styled.img`
  width:100%;
  height:480px;
  margin-top:80px;
`
export const box = styled.div`
  width:100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`

export const gidebox = styled.div`
  width:70%;
  height:100%;
`

export const faq = styled.div`
  background-image:url(${gide});
  width:100%;
  height:170px;
  margin: 60px 0px;
`

export const tip = styled.div`
  background-image:url(${point});
  width:100%;
  height: 1328px;
  margin-bottom:80px;
`

export const footer = styled.div`
  background-image:url(${foot});
  width:100%;
  height:320px;
`