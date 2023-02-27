import React from 'react'
import cam from "../img/cam.png"
import add from "../img/add.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Adil</span>
        <div className="chatIcon">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
