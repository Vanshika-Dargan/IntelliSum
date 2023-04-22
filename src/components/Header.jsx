import React from 'react'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <header className="w-full items-center flex flex-col">
    <nav className="w-full flex justify-between items-center flex-row mb-10 pt-3">
    <img src={logo} alt="intellisum_logo" className="w-14 object-contain"/>
    
    <button type="button" className="black_btn" onClick={()=>window.open('')}>GitHub</button>
    </nav>
    <h1 className="heading">Read Smartly with <br/>
    <span className="purple_gradient">Open AI GPT-4</span></h1>
    <h2 className="desc">IntelliSum is the ultimate app for busy professionals and avid readers who want to stay up-to-date on the latest news and trends without spending hours reading long articles. Our advanced AI algorithms can summarize articles into bite-sized pieces, making it easy for you to quickly digest the most important information.</h2>
    </header>
  )
}

export default Header