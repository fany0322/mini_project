import { VscChevronDown } from "react-icons/vsc";
import './logins.css'

function App({ onLogin }) {

  return (
    <>
    <header>
    <div class="auth-container">
        <h1>로그인</h1>
        <form id="loginForm">
        <input type="email" id="loginEmail" placeholder="이메일" required />
        <input type="password" id="loginPassword" placeholder="비밀번호" required />
        <button type="submit">로그인</button>
        <p>아직 회원이 아니신가요? <a href="signup.html">회원가입</a></p>
        </form>
    </div>
    <script src="auth.js"></script>
    </header>

    </>
  )
}

export default App