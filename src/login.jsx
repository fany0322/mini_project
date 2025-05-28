import { VscChevronDown } from "react-icons/vsc"
import './login.css'

function App({ onLogin, onSignup }) {
  return (
    <>
      <header className="header">
        <div className="head">
          <div className="head-left">
            <img src="/image1.png" alt="logo" className="logo" />
          </div>
          <div className="head-center">
            <span className="title">학습계획</span>
          </div>
          <div className="head-right">
            <div className="login">
              <button className="loginbutton" onClick={onLogin}>로그인</button>
            </div>
            <div className="signup">
            <button onClick={onSignup}>회원가입</button>
          </div>
          </div>
        </div>

        <div className="naljja_body">
          <span className="naljja">2025.05</span>
          <div className="Icon"><VscChevronDown size="30" /></div>
        </div>

        <div className="em"></div>

        <div className="week">
          <div className="weekdays">
            <div className="Sun">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="ser">
            회원가입 후 이용 가능합니다.
          </div>
        </div>
      </header>
    </>
  )
}

export default App
