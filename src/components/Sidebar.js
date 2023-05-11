import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [activeButton, setActiveButton] = useState('dashboardBtn');
  const navigate = useNavigate();

 


  useEffect(() => {
    const currentPath = window.location.pathname;
    // console.log(window.location.pathname,"path")
    if (currentPath === '/') {
      setActiveButton('dashboardBtn');
    } else if (currentPath === '/orders') {
      setActiveButton('orders');
    } else if (currentPath === '/settings') {
      setActiveButton('settings');
    }
  }, []);




  const handleClick = (button) => {
    setActiveButton(button);
    if (button === 'dashboardBtn') {
      navigate('/');
    } else if (button === 'orders') {
      navigate('/orders');
    } else if (button === 'settings') {
      navigate('/settings');
    }
    }

  

  return <>
  <div className="sidebar-container">
  <div className="sidebar">
      <button style={{marginTop:"70px"}}
        className={activeButton === 'dashboardBtn' ? 'active' : ''}
        onClick={() => handleClick('dashboardBtn')}
      >
        Dashboard
      </button>
      <button
        className={activeButton === 'orders' ? 'active' : ''}
        onClick={() => handleClick('orders')}
      >
        Orders
      </button>
      <button
        className={activeButton === 'settings' ? 'active' : ''}
        onClick={() => handleClick('settings')}
      >
        Settings
      </button>
    </div>
  </div>
  
    </>
  }

  export default Sidebar;