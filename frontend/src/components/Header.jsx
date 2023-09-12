import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { FaShoppingBasket, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant="dark"expand='lg'>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <FaShoppingCart />
            <div className="mx-2">E-Shopping</div>
          </Navbar.Brand>
          <Nav className="ml-auto"> {/* Use ml-auto to push content to the right */}
          <Nav.Link href='\cart' className="d-flex align-items-center">
              <FaShoppingBasket className="me-2" style={{ fontSize: '0.8em' }} /> {/* Adjust font size */}
              cart
            </Nav.Link>
            <Nav.Link href='\login' className="d-flex align-items-center">
              <FaUser className="me-2" style={{ fontSize: '0.8em' }} /> {/* Adjust font size */}
              sign in
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
