import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Detail() {
  return (
    <div>
    <h2>Bài 1:</h2>
    <h3>Đây là trang chủ</h3>
    <br />
    <h2>Bài 6:</h2>
    <nav>
        <Link style={{marginLeft:'20px'}} to='/'>home</Link>
        <Link style={{marginLeft:'20px'}} to='/contact'>contact</Link>
        <br />
        <Link style={{ marginLeft: '50px' }} to='' >home</Link>
    </nav>
    <br />
    <h2>Bài 7:</h2>
    <nav>
        <NavLink style={{marginLeft:'20px'}} to='/'>Home</NavLink>
        <NavLink style={{marginLeft:'20px'}} to='/productEx7'>Product</NavLink>
        <NavLink style={{marginLeft:'20px'}} to='/detail'>Detail</NavLink>
        <br />
        <div style={{marginLeft:'50px'}} >Detail</div>
    </nav>

  <Outlet></Outlet>
</div>
  )
}
