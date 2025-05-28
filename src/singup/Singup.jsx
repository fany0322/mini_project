import './singup.css'

function Signup({ onSignupComplete, onBackToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSignupComplete()
  }

  return (
    <header className="back">
      <div className="auth-container">
        <h1 className="name">회원가입</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="이름" required />
          <input type="email" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">가입하기</button>
        </form>
        <p>
          이미 회원이신가요?{' '}
          <button type="button" onClick={onBackToLogin}>로그인</button>
        </p>
      </div>
    </header>
  )
}

export default Signup
