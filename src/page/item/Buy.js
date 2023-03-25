import Header from "../../component/Header";
import Button from "../../component/Button";
import * as B from "../../styled/buy";

function Buy() {
  return(
    <>  
    <Header/>
    <B.box>
      <B.cardbox>
        <B.top/>
        <B.bottom>
          <B.title>제목</B.title>
          <B.gobtn>GO</B.gobtn>
        </B.bottom>
      </B.cardbox>

    </B.box>
    <Button/>
    </>
  )
}

export default Buy;