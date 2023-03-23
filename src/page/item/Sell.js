import Header from "../../component/Header"
import * as S from "../../styled/sell";

function Sell() {

  const banklist = ['NH 농협', '카카오뱅크', 'KB 국민', '신한', '우리', '토스뱅크', 'IBK 기업은행', '하나', '새마을', '부산', '대구', '케이뱅크', '신협', '우체국', 'SC 제일', '경남', '광주', '수협', '전북', '저축은행', '제주','씨티', 'KDB 산업', '산림조합', 'SBI 저축은행', 'BOA', '중국', 'HSBC', '중국공상', '도이치', 'JP모건', 'BNO파라바', '중국건설']

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
              {
                banklist.map((a, i)=>{
                  return(
                    <S.bankoption>{a}</S.bankoption>
                  )
                })
              }
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