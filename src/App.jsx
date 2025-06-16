import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { VscChevronDown } from "react-icons/vsc"
import dayjs from "dayjs"
import './App.css'

function App({ loggedIn }) {
  const navigate = useNavigate()
  const date = dayjs().format('YYYY.MM')

  const [tagList, setTagList] = useState([])
  const [inputTag, setInputTag] = useState('')
  const [showTagModal, setShowTagModal] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [tags, setTags] = useState({})
  const [showTimeSelect, setShowTimeSelect] = useState(false)
const [selectedTime, setSelectedTime] = useState({})
const [activeTimeFilter, setActiveTimeFilter] = useState(null)

const timeOptions = [
  "1~2", "2~3", "3~4", "4~5", "5~6", "6~7","7~8","8~9","9~10"
]


  const openModal = (index) => {
    setSelectedDate(index)
    setModalOpen(true)
  }

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
              <button onClick={() => navigate('/logins')}>로그인</button>
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
          <>
            <div className="calendar">
              {[...Array(35)].map((_, i) => (
               <div
               key={i}
               className={`cell ${
                 activeTimeFilter && selectedTime[i] === activeTimeFilter ? 'highlight-cell' : ''
               }`}
               onClick={() => openModal(i)}
               onDragOver={(e) => e.preventDefault()}
               onDrop={(e) => {
                 const droppedTag = e.dataTransfer.getData("text/plain")
                 setTags(prev => {
                   const existing = prev[i] || ""
                   return { ...prev, [i]: existing ? existing + "," + droppedTag : droppedTag }
                 })
               }}
             >
               {tags[i] && <div className="tag">{tags[i]}</div>}
               {selectedTime[i] && <div className="cell-time">{selectedTime[i]} 시간</div>}
               
             </div>
             
              ))}
            </div>

            <div className="add-buttons">
              <button className="toolbutton" onClick={() => setShowTagModal(true)}>+</button>
              <div className="tag-container">
                {tagList.map((tag, idx) => (
                  <div
                    className="tag-item"
                    key={idx}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", tag)
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="time-filter">
          
  {timeOptions.map((time, idx) => (
    <button
      key={idx}
      className={`time-filter-btn ${activeTimeFilter === time ? 'active' : ''}`}
      onClick={() => {
        setActiveTimeFilter(activeTimeFilter === time ? null : time)
      }}
    >
      {time}
    </button>
    
  ))}
  {activeTimeFilter && (
  <div className="time-summary">
    이번달에 {activeTimeFilter} 시간만큼 공부한 날은{" "}
    {
      Object.values(selectedTime).filter(time => time === activeTimeFilter).length
    }일 입니다.
  </div>
)}

</div>

      </main>

      {modalOpen && (
  <div className="modal-overlay" onClick={() => setModalOpen(false)}>
    <div className="status-modal" onClick={(e) => e.stopPropagation()}>
      <h2>{selectedDate + 1}일</h2>

      <div className="tag-grid">
        {(tags[selectedDate]?.split(', ') || []).map((tag, i) => (
          <div key={i} className="tag-box">{tag}</div>
        ))}
      </div>

      <div className="time-add">
        <button
          className="time-button"
          onClick={() => setShowTimeSelect(!showTimeSelect)}
        >
          시간 추가하기
        </button>

        {showTimeSelect && (
          <select
            onChange={(e) => {
              const value = e.target.value
              setSelectedTime(prev => ({
                ...prev,
                [selectedDate]: value
              }))
              setShowTimeSelect(false)
            }}
            defaultValue=""
          >
            <option value="" disabled>시간 선택</option>
            {timeOptions.map((time, i) => (
              <option key={i} value={time}>{time}</option>
            ))}
          </select>
        )}

        {selectedTime[selectedDate] && (
          <p className="time-tip">선택된 시간: {selectedTime[selectedDate]}</p>
        )}
      </div>
    </div>
  </div>
)}


      {showTagModal && (
        <div className="modal-overlay" onClick={() => setShowTagModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>과목입력하세요</h3>
            <input
              type="text"
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
            />
            <button onClick={() => {
              if (inputTag.trim() !== '') {
                setTagList([...tagList, inputTag])
                setInputTag('')
              }
              setShowTagModal(false)
            }}>저장</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
