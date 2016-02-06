import React from 'react';
import ReactDOM from 'react-dom';

import ReactBootstrap from 'react-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';


var MainLink = React.createClass({
  render: function(){
    return(
      <a href="#">Flippy</a>
    )
  }
});


class HeaderBar extends React.Component {
  render() {
    //return (React.createElement(headerInstance))
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            {MainLink}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Something I&#039;ll make up later</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HeaderBar;