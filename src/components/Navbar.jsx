import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';

const logoUrl1 =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1656892877/website%20pics%20family/development_logo_hpyyun.jpg';

const logoUrl2 =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1647322071/website%20pics%20family/logo-banner_js0mkp.jpg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logoUrl1}
            alt='Woodard Solutions'
            // style={{ width: '18rem' }}
            className='logo'
          />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='nav-links'>
            <ul>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* <div className='social-icons'>
          <ul>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
