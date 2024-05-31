import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div> 
      <h2>Bài 2:</h2>
        <h3>Đây là trang liên hệ</h3>
      <h2>Bài 6:</h2>
      <nav>
            <Link style={{marginLeft:'20px'}} to='/'>home</Link>
            <Link style={{marginLeft:'20px'}} to='/contact'>contact</Link>
            <br />
            <Link style={{ marginLeft: '50px' }} to='/contact' >contact</Link>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
