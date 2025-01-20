import React from 'react';
import {Route,Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import './App.css';
import Store from './component/Store';
import Recommend from './component/Recommend';
import Product from './component/Product';
import Event from './component/Event';
import Notice from './component/Notice';
import Cs from './component/Cs';
import Search from './component/Search';
import Mypage from './component/Mypage';
import Cart from './component/Cart';
import Home from './Home';
 
function App() {
  return (
    <div className='body'>
      <header className='header'>
        <h1 className='logo'><Link to = '/'><img src='/images/logo.png' alt=""/></Link></h1>
        <nav className='nav'>
          <ul>
            <li><Link to='/component/Store'>스토어</Link></li>
            <li><Link to='/component/Recommend'>추천제품</Link></li>
            <li><Link to='/component/Product'>상품</Link></li>
            <li><Link to='/component/Event'>기획전</Link></li>
            <li><Link to='/component/Notice'>알림</Link></li>
            <li><Link to='/component/Cs'>고객서비스</Link></li>
          </ul>
        </nav>
          <div className='info_mn'>
            <ul>
            <li><Link to='/component/Search'>검색</Link></li>
            <li><Link to='/component/Mypage'>마이페이지</Link></li>
            <li><Link to='/component/Cart'>장바구니</Link></li>
            </ul>
          </div>
      </header>
      <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/component/Store"  component={Store}/>
      <Route path="/component/Recommend"  component={Recommend}/>
      <Route path="/component/Product"  component={Product}/>
      <Route path="/component/Event"  component={Event}/>
      <Route path="/component/Notice"  component={Notice}/>
      <Route path="/component/Cs"  component={Cs}/>
      <Route path="/component/Search"  component={Search}/>
      <Route path="/component/Mypage"  component={Mypage}/>
      <Route path="/component/Cart"  component={Cart}/>
      </div>
      <Carousel/>
      
    </div>
  );
}

export default App;
