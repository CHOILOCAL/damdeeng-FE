import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <div>
        <ul>
        <li>
          <Link to="/">담딩투어 소개</Link>
        </li>
        <li>
          <Link to="/products">투어 코스</Link>
        </li>
        <li>
          <Link to="/custom">여행 만들기</Link>
        </li>
        <li>
          <Link to="/makeTogether">동행찾기</Link>
        </li>
        <li>
          <Link to="/qna">QnA</Link>
        </li>
      </ul>
        
      </div>
    );
  }
  
  export default Header;
  