import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProductEx8() {
  return (
    <div>
        <h2>Bài 8:</h2>
        <nav>
            
            <NavLink style={{marginLeft:'20px'}} to='/admin'>Admin</NavLink>
            <NavLink style={{marginLeft:'20px'}} to='/productEx8'>Product</NavLink>
            <NavLink style={{marginLeft:'20px'}} to='/account'>Account</NavLink>
            <h1>đây là trang product</h1>
        </nav>

      <Outlet></Outlet>
    </div>
  )
}
