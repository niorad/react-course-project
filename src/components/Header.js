import React from 'react';

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
          <div className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </div>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  );
}


export default Header;