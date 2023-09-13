import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#333', color: 'white' }}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#bbb' }}>
              footer content
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#bbb' }}>
              links
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <a href="#!" style={{ color: '#ddd' }}>
                  Frequently Asked Questions
                </a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: '#ddd' }}>
                  Delivery
                </a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: '#ddd' }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: '#ddd' }}>
                  Where we deliver?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear} Copyright:
        <Link className="text-white" to="/">
          E-Shopping
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
