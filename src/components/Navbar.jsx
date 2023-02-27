import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChatRio</span>
      <div className="user">
        <img src="https://yt3.googleusercontent.com/kAliDqACg0tKtwI3DEx00eBd9KLK2yLUP76vhou84zmh9xpCwg-kAFjwYoHj_RsmUbtxUxKk9w=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <span>Adil</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
