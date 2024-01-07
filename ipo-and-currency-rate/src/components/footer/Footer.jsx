import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <p>Get connected with us on social networks:</p>
      <hr />
      <div className="footer-content">
        <div className="footer-col-1">
          <h5>Deepak Stock market</h5>
        </div>
        <div className="footer-col-1">
          <h5>UseFul Links</h5>
          <ul>
            <li>dashboard</li>
            <li>Login</li>
            <li>SignUp</li>
          </ul>
        </div>
        <div className="footer-col-1">
          <h5>
            Contacts
          </h5>
            <ul className='footer-ul'>
              <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li>info@yourdomain.com</li>
              <li>+2 392 3929 210</li>
            </ul>
        </div>

      </div>

      <div className="copyright">
      Copyright ©2023 All rights reserved
      </div>
    </div>
  );
}