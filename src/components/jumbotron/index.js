import React, { useState } from 'react';
import austinPic from '../../assets/images/Austin3.jpg';
// import abyssCss from "../../assets/css/abyss.css";
import './style.css';

// function useForceUpdate() {
//   const [value, setValue] = useState(0);
//   return () => {
//     setValue((value) => value + 1);
//   };
// }

export default function Jumbotron() {
  //   const forceUpdate = useForceUpdate();
  //   function setTheme(event) {
  //     let mode = event.target.dataset.mode;
  //     if (mode === "light") {
  //       document.getElementById("theme-style").href = "styles.css";
  //     }

  //     if (mode === "dark") {
  //       document.getElementById("theme-style").href = "dark.css";
  //     }

  //     if (mode === "abyss") {
  //       //   document.getElementById("theme-style").href = abyssCss;
  //       document.getElementById("theme-style").href =
  //         "../../assets/css/abyss.css";
  //     }

  //     if (mode === "elysium") {
  //       document.getElementById("theme-style").href = "elysium.css";
  //     }
  //     forceUpdate();
  //     localStorage.setItem("theme", mode);
  //   }
  return (
    <section className='sec1'>
      <div className='main-container'>
        <div className='head-wrapper'>
          <h1>Hi, I'm Sam Perez</h1>
        </div>

        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <div className='dots-wrapper'>
              <div id='dot-1' className='browser-dot'></div>
              <div id='dot-2' className='browser-dot'></div>
              <div id='dot-3' className='browser-dot'></div>
            </div>
          </div>

          <div className='left-column'>
            <img id='profile-pic' src={austinPic} alt='self portrait' />
            <h5 className='theme-title'>Customize Theme</h5>
            <div id='theme-options-wrapper'>
              <div
                data-mode='light'
                id='light-mode'
                className='theme-dots'
              ></div>
              <div data-mode='dark' id='dark-mode' className='theme-dots'></div>
              <div
                data-mode='abyss'
                id='abyss-mode'
                className='theme-dots'
                // onClick={setTheme}
              ></div>
              <div
                data-mode='elysium'
                id='elysium-mode'
                className='theme-dots'
              ></div>
            </div>

            <p id='setting-note'>
              *Custom settings will be saved for <br />
              your next visit
            </p>
          </div>

          <div className='right-column'>
            <div id='preview-shadow'>
              <div id='preview'>
                <div id='corner-tl' className='corner'></div>
                <div id='corner-tr' className='corner'></div>
                <h3>What Is My Deal?</h3>
                <p>
                  Full-stack web developer certified by the University of San
                  Diego eager to make on impact on all my web endeours.
                </p>
                <div id='corner-br' className='corner'></div>
                <div id='corner-bl' className='corner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
