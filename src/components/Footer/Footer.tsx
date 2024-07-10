import React, { FC } from 'react';
import './Footer.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer">  
  <footer>
    <p>&copy; 2024 michal golombek photography</p>
  </footer>
  </div>
);

export default Footer;
