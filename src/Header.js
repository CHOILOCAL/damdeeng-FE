import React from 'react';
// import { Link } from 'react-router-dom';
import {Nav, Form} from 'react-bootstrap';


function Header() {
    return (

      <>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="link-1" href="/products">투어 코스</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href="/custom">여행 만들기</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href="/makeTogether">동행찾기</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href="/qna">QnA</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>

    <Form inline>
      {/* <FormControl type="text" placeholder="검색어를 입력해주세요. " className="mr-sm-2" /> */}
      <button type="button" class="btn btn-outline-secondary">로그인</button>
      <button type="button" class="btn btn-outline-secondary">회원가입</button>
      <button className="btn btn-lg btn-primary btn-block">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </button>
    </Form>

  </Nav>


</>
    );
  }
  
  export default Header;
  