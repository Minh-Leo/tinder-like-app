import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className='fl'>
        <button type='button'>
          <img src='/images/misc/user.png' alt='User setting' />
        </button>
      </div>
      <div className='fl'>
        <Logo />
      </div>
      <div className='fl'>
        <button type='button'>
          <img src='/images/misc/messages.png' alt='view Messages' />
        </button>
      </div>
    </header>
  );
}

export default Header;
