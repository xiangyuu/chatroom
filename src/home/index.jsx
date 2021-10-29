import React, {useState} from 'react';
import AppStore from '../store/store'
import './index.scss'
import {useLocalStore, useObserver} from "mobx-react";


function Home() {
  const store = useLocalStore(() => AppStore)
  const [inputValue, setInputValue] = useState('')

  function chatroomInfo() {
    return (
      <ul>
        {store.chatroom.status.msg.map((e, key) => (
          <li key={key}>
            <div>{e.content}<span>{e.time}</span></div>
          </li>
        ))}
      </ul>
    )
  }

  function sendInputMsg() {
    if (!store.chatroom) {
      return ''
    }
    store.sendMsg(inputValue)
    setInputValue('')
  }

  function changeChatroom(e) {
    store.changeChatroom(e)
    setInputValue('')
  }

  return useObserver(() =>
    <div className='home'>
      <div className='chatroom-container'>
        <div className='friend-list'>
          <span>好友列表</span>
          <ul className='friend-list-body'>
            {store.userList.map((e, key) => (
              <li onClick={() => changeChatroom(e)} key={key}>
                <div className='head-img'><img src={e.img} alt=''></img></div>
                <span>{e.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='talk-panel'>
          <div className='chat-space'>
            {store.chatroom ? chatroomInfo() : '赶快和好友们共同聊天吧!'}
          </div>
          <div className='input-space'>
            <input onChange={(e) => setInputValue(e.target.value)} defaultValue={inputValue} value={inputValue}
                   type='text'/>
            <button onClick={sendInputMsg}>发送</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;