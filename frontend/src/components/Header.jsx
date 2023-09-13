import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { FaShoppingBasket, FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant="dark"expand='lg'>
        <Container>
            <LinkContainer to= '/'>
          <Navbar.Brand  className="d-flex align-items-center">
            <FaShoppingCart />
            <div className="mx-2">E-Shopping</div>
          </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto"> {/* Use ml-auto to push content to the right */}
          <LinkContainer to='/cart'>
          <Nav.Link  className="d-flex align-items-center">
              <FaShoppingBasket className="me-2" style={{ fontSize: '0.8em' }} /> {/* Adjust font size */}
              cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link  className="d-flex align-items-center">
              <FaUser className="me-2" style={{ fontSize: '0.8em' }} /> {/* Adjust font size */}
              Sign In
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
