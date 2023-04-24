import Header from "../../component/Header";
import * as F from "../../styled/form";
function Sell() {
  return (
    <>
      <F.tablebox>
        <F.table>
          <F.head>
            <F.tr>
              <F.th width="70">번호</F.th>
              <F.th width="500">제목</F.th>
              <F.th width="100">조회</F.th>
              <F.th width="100">삭제</F.th>
            </F.tr>
          </F.head>
          <F.tbody>
            <F.tr>
              <F.td>1</F.td>
              <F.td>fdsdsfs</F.td>
              <F.td>fdsdsfs</F.td>
              <F.td>fdsdsfs</F.td>
            </F.tr>
          </F.tbody>
        </F.table>
      </F.tablebox>
      <Header />

    </>
  );
}

export default Sell;
