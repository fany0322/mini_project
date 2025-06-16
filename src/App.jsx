import { useNavigate } from "react-router-dom"
import { VscChevronDown } from "react-icons/vsc"
import dayjs from "dayjs";
import './App.css'

function App({ loggedIn }) {
  const navigate = useNavigate()
    const date = dayjs().format('YYYY.MM');
    const month = dayjs().format('M');
    const year = dayjs().format('YYYY');
    console.log(date);

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
            {!loggedIn ? (
              <button onClick={() => navigate('/logins')}>
                로그인
              </button>
            ) : (
              <>
                <img src="/default_profile.png" alt="계정사진" className="account-img" />
                <div id="account_name">계정이름</div>
              </>
            )}
          </div>
        </div>

        <div className="naljja_body">
          <span className="naljja">{date}</span>
          <div className="Icon"><VscChevronDown size="30" /></div>
        </div>

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
        </div>
      </header>

      <main>
        {!loggedIn ? (
          <div className="auth-container">
            <div className="login-pil">로그인이 필요합니다</div>
            <button onClick={() => navigate('/logins')}>로그인하러 가기</button>
          </div>
        ) : (
          <div className="calendar">
            {[...Array(35)].map((_, i) => (
              <div className="cell" key={i}></div>
            ))}
          </div>
        )}
      </main>


    </>
  )
}

export default App
