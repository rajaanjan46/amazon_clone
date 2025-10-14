import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar(){
  const items = ['all','best-sellers','mobiles','electronics','fashion','home','appliances','toys-baby','grocery'];
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation-bar" role="navigation" aria-label="Main navigation">
      <div className="container nav-scroll nav-inner">
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={()=>setOpen(v=>!v)}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {items.map((it,idx)=> (
            <NavLink
              key={idx}
              to={`/category/${it}`}
              className={({isActive})=> 'nav-link' + (isActive ? ' active' : '')}
              onClick={()=> setOpen(false)}
            >
              {it.replace(/-/g,' ')}
            </NavLink>
          ))}
        </div>
      </div>

      {/* backdrop for mobile menu */}
      {open && <div className="mobile-backdrop" onClick={()=>setOpen(false)} aria-hidden="true" />}
    </div>
  );
}
