import Header from "../../component/Header";
import * as F from "../../styled/form";

function Form() {
  return(
    <>
    <Header/>
    <F.box>
      <F.movebtn>판매 폼 관리</F.movebtn>
      <F.movebtn>구매 폼 관리</F.movebtn>
    </F.box>
    </>
  )
}

export default Form;