import React, { useState } from 'react';
import '../styles/style.css';

function Header() {

    return (
        <header className="wrapper">
            <div className="title">
                <span className="coding">
                    <span className="letter">C</span>
                    <span className="letter">o</span>
                    <span className="letter">d</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter">g</span>
                </span>
                <span className="tools">
                  <span className="letter">T</span>
                  <span className="letter">o</span>
                  <span className="letter">o</span>
                  <span className="letter">l</span>
                  <span className="letter">s</span>
                </span>
            </div>
        </header>
    );
}

export default Header;