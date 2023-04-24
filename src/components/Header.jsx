import React from 'react'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <header className="w-full items-center flex flex-col">
    <nav className="w-full flex justify-between items-center flex-row mb-10 pt-3">
    <img src={logo} alt="intellisum_logo" className="w-14 object-contain"/>
    
    <button type="button" className="black_btn" onClick={()=>window.open('https://github.com/Vanshika-Dargan/IntelliSum')}>GitHub</button>
    </nav>
    <h1 className="heading">Read Smartly with <br/>
    <span className="purple_gradient">Open AI GPT-4</span></h1>
    <h2 className="desc">IntelliSum is the intelligent way to stay informed. Our AI-powered app summarizes long articles into bite-sized insights, so you can read less and know more.</h2>
    </header>
  )
}

export default Header