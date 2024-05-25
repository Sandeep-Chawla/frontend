import React from 'react';
import '../assets/sidebar.css';

export default function Sidebar({ isActive }) {
  return (
    <>
      <div id="sidebar" className={isActive ? 'active' : ''}> 
        <div className="w-10/12 mx-auto pt-5">
              <ul className="menu">
                <li>
                  <h5>HOME</h5>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
        </div>
      </div>
    </>
  )
}
