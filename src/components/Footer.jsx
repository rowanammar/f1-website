import React, { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <p className="disclaimer">
        Disclaimer: All information on this website is as of 5/2/2025 and may
        not be up to date.
      </p>
      <div className="links">
        <a href="https://github.com/rowanammar/f1-website" target="_blank">
          Repo on GitHub
        </a>
        <span className="separator">|</span>
        <button className="about-btn" onClick={openModal}>
          About Me
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="about-header">
              <img src="rue.png" alt="sorty" className="profile-photo" />
              <div className="about-title">
                <h2>About Me</h2>
                <p>
                  Helllooooooooooo, I'm Rawan. I'm a passionate developer and a Formula 1 fan who loves building web applications! I built this website to learn more about React and to share my love for Formula 1. Hope you enjoy it! 🏎️🏁
                  <br/><br/>If you have any feedback or suggestions, feel free to reach out to me on LinkedIn, Email or GitHub! 
                </p>
              </div>
            </div>
            <ul className="social-links example-2">
              <li className="icon-content">
                <a
                  href="www.linkedin.com/in/rawan523"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">LinkedIn</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://github.com/rowanammar"
                  aria-label="GitHub"
                  data-social="github"
                  target="_blank"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.74.81 1.19 1.84 1.19 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">GitHub</div>
              </li>
              <li className="icon-content">
                <a
                  href="mailto:rawanehab523@gmail.com"
                  aria-label="Email"
                  data-social="email"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.234l5.803-3.482L0 5.383zm6.761 3.396L16 5.383v6.234l-5.803-3.483L8 9.583l-1.239-.804zM16 12V5.383l-5.803 3.751L16 12zm-16 0l5.803-3.866L0 5.383V12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Email</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}
export default Footer;
