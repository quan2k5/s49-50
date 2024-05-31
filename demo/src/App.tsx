import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Ex01/Home'
import Contact from './components/Ex02/Contact'
import Login from './components/Ex03/Login'
import Register from './components/Ex04/Register';
import NotFound from './components/Ex05/NotFound';
import Product from './components/Ex07/Product';
import Detail from './components/Ex07/Detail';
import Admin from './components/Ex08/Admin';
import ProductEx8 from './components/Ex08/ProductEx8';
import Account from './components/Ex08/Account';
import ListUser from './components/Ex10/ListUser';
import UserDetail from './components/Ex10/UserDetail';
import HomePage from './components/Ex09/HomePage';

export default function App() {
  return (
    <div>
      <Routes>
        
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/productEx7' element={<Product></Product>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/productEx8' element={<ProductEx8></ProductEx8>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
        <Route path='/home-page' element={<HomePage></HomePage>}></Route>
        <Route path='/list-user' element={<ListUser></ListUser>}></Route>
        <Route path="/user-detail/:userId" element={<UserDetail />} />

      </Routes>
    </div>
  )
}
