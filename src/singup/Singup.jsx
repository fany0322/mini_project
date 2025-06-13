import { useNavigate } from 'react-router-dom'
import './singup.css'

function Singup({ onSignupComplete }) {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSignupComplete()
    navigate('/')
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="이름" required />
          <input type="email" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">가입하기</button>
        </form>
        <p className="signup-par">
          이미 회원이신가요?{' '}
          <button type="button" onClick={() => navigate('/logins')}>
            로그인
          </button>
        </p>
      </div>
    </div>
  )
}

export default Singup
