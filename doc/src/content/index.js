import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Serverless Design System</h1>
    <nav>
      <li><Link to='/button'>Button</Link></li>
      <li><Link to='/heading'>Heading</Link></li>
      <li><Link to='/image'>Image</Link></li>
      <li><Link to='/imgCard'>Image Card</Link></li>
      <li><Link to='/logo'>Logo</Link></li>
      <li><Link to='/testimonial'>Testimonial</Link></li>
      <li><Link to='/text'>Text</Link></li>
      <li><Link to='/textField'>Text Field</Link></li>
      <li><Link to='/textWithIcon'>Text With Icon</Link></li>
      <li><Link to='/typography'>Typography</Link></li>
    </nav>
  </div>
)