import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const logoUrl1 =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1656892877/website%20pics%20family/development_logo_hpyyun.jpg';

const logoUrl2 =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1647322071/website%20pics%20family/logo-banner_js0mkp.jpg';

import Navbar from './components/Navbar';
const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};
export default App;
