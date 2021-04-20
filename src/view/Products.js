import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from '../config/router/RouterHookSample';
import Product from './Product';

function Products({ match }) {


  const a = "위에서";

    // useEffect(() => {
    //     console.log(history);
    //     const unblock = history.block('정말 떠나실껀가요?');
    //     return () => {
    //         unblock();
    //     }
    // }, [history]);
    
    return (
      <div>
        <h2>투어 상품 목록</h2>
        <ul>
            <li><NavLink to="/products/1" activeStyle={{background: 'black', color: 'white'}} exact={true}>product1</NavLink></li>
            <li><NavLink to="/products/2" activeStyle={{background: 'black', color: 'white'}}>product2</NavLink></li>
        </ul>

        <Route path="/products" exct render={() => <div>투어를 {a} 선택해주세요</div>} />
        <Route path="/products/:productid" component={Product} />

        <RouterHookSample />
        
      </div>
    );
  }
  
  export default Products;
  