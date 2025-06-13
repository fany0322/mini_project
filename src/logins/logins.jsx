import { useNavigate } from "react-router-dom"
import './logins.css'

function Logins({ onLogin }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    onLogin()         // 로그인 처리
    navigate('/')     // 메인으로 이동
  }

  return (
    <header>
      <div className="auth-container">
        <h1>로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="이메일"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            required
          />
          <button type="button" onClick={handleLogin}>로그인</button>
          <p className="par">
            아직 회원이 아니신가요?{' '}
            <button type="button" onClick={() => navigate('/signup')}>
              회원가입
            </button>
          </p>
        </form>
      </div>
    </header>
  )
}

export default Logins
