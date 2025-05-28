import { VscChevronDown } from "react-icons/vsc";
import './App.css'

function App() {

  return (
    <>
      <header className="header">"
        <div className="head">
          <div className="head-left">
            <img src="/image1.png" alt="logo" className="logo" />
          </div>
          <div className="head-center">
            <span className="title">학습계획</span>
          </div>
          <div className="head-right">
            <img alt="계정사진" className="account-img" />
            <div id="account_name">계정이름</div>
          </div>
        </div>
        <div className='naljja_body'>
            <span className='naljja'>2025.05</span><div className="Icon"><VscChevronDown size="30"/></div>
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
        </div>
      </header>
      <main>
        <div className="calendar">
          {[...Array(35)].map((_, i) => (
            <div className="cell" key={i}></div>
          ))}
        </div>
      </main>
      <div className='bottom'>
      <div className="toolbar1">
        <button className="toolbutton">+</button>
      </div>
      <div className="toolbar2">
        <button className="toolbutton">+</button>
      </div>
      </div>

    </>
  )
}

export default App
