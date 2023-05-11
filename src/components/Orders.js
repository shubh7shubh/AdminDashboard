import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Orders = () => {
  const navigate = useNavigate();
  return <>
  <Sidebar/>
  <div className="orders-container">
  <h1>Orders</h1>
  <div className="box-container">
      <div className="box">
    <p>Orders</p>
  </div>
  <div className="box">
    <p>Actions</p>
  </div>

      </div>
  </div>

  
  </>
}

export default Orders
