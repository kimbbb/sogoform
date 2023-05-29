import Header from "../../component/Header";
import * as D from "../../styled/detail";
import back from "../../images/close.png"
import { useNavigate } from "react-router-dom";

function Detail(){

  let nav = useNavigate();

  return(
    <>
    <D.box>
      <D.title>제목이지롱
        <D.close src={back} onClick={()=>{nav('/buy')}}/>
      </D.title>
      <D.innerbox>
        <D.inbox>
          <D.top>
            <D.imgbox>
              <D.topimg/>
            </D.imgbox>

            <D.cotent>
              
            </D.cotent>
          </D.top>

          <D.bottom>
            <D.contenttext>입금 정보
              <D.copy>copy</D.copy>
            </D.contenttext>
            <D.bank>카카오뱅크 7777010840188 김민지</D.bank>

            <D.contenttext>주문자 정보</D.contenttext>
            <D.information placeholder="이름"/>
            <D.information placeholder="학번 ex) 3201"/>
            <D.information placeholder="연락처 ex) 010 7101 4619"/>

            <D.contenttext>기타 요청 사항</D.contenttext>
            <D.information placeholder="기타 요청 사항 입력 (최대 30자 입력)"/>

            <D.submit>폼 제출</D.submit>
          </D.bottom>
        </D.inbox>
      </D.innerbox>
    </D.box>
    <Header/>

    </>
  )
}

export default Detail;