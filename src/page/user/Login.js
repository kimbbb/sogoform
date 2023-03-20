import * as L from "../../styled/login"


function Login() {
  return(
    <>
    <L.bg>
      <L.box>

        <L.main>
          <L.contents>
            <L.header>LOGIN</L.header>
            <L.detail placeholder="ID" type='text'/>
            <L.detail placeholder="PASSWORD" type='password'/>
            <L.go>LOGIN</L.go>
            <L.text>아직 회원이 아니라면? <L.move>회뭔가입</L.move></L.text>
          </L.contents>
        </L.main>

        <L.sidebar>
          <L.icon/>
          <L.sidelogo>SOGOFORM</L.sidelogo>
        </L.sidebar>
      </L.box>
    </L.bg>
    </>
  )
}

export default Login;