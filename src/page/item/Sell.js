import Header from "../../component/Header"
import * as S from "../../styled/sell";

function Sell() {
  return(
    <>
    <Header/>
      <S.box>
        <S.list>
          <S.imgbox>
            <S.uplode type="file" accept="image/*"/>
          </S.imgbox>
          
          <S.text>상품명</S.text>
          <S.title placeholder="상품명을 입력해주세요."/>

          <S.text>은행 정보</S.text>
          <S.bank>
            <S.bankname>
              <S.bankoption>농협</S.bankoption>
              <S.bankoption>토스</S.bankoption>
            </S.bankname>
            <S.account type='number' min='1' placeholder="계좌번호 입력"/>
            <S.name placeholder="예금자명"/>
          </S.bank>

          <S.text>상세 내용</S.text>
          <S.contents>
            <S.content  placeholder="상세 내용을 입력해주세요."/>
          </S.contents>
          <S.create>폼 만들기</S.create>
        </S.list>
      </S.box>
    </>
  )
}

export default Sell