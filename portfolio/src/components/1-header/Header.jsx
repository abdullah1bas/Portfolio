import React from "react";
import "./header.css";
import { Tooltip, Zoom } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({ setShowModal, theme, setTheme, showModal }) => {
  return (
    <header className="flex" style={{ position: "relative" }}>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
        style={{ position: "relative" }}
      ></button>
      <div />

      <nav>
        <ul className="flex" style={{ position: "relative" }}>
          {["About", "Articles", "Projects", "Speaking", "Contact"].map(
            (link) => {
              return (
                <li key={link}>
                  <a
                    href={
                      link == "About"
                        ? "#about"
                        : link == "Projects"
                        ? "#projects"
                        : link == "Contact"
                        ? "#contact"
                        : "#speaking"
                    }
                  >
                    {link}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </nav>

      <Tooltip TransitionComponent={Zoom} title={theme === "dark" ? "Dark" : "Light"}>
        <button
          onClick={() => {
            // Send value to LS
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );
        
            // get value from LS
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode flex"
          style={{ position: "relative" }}
        >
          {theme === "dark" ? (
            <span className="icon-moon-o"> </span>
          ) : (
            <span className="icon-sun"> </span>
          )}
        </button>
      </Tooltip>

      {showModal && (
        <div className="fixed" style={{ position: "absolute" }}>
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            {["About", "Articles", "Projects", "Speaking", "Uses"].map(
              (link) => {
                return (
                  <li key={link}>
                    <a
                      href={
                        link == "About"
                          ? "#about"
                          : link == "Projects"
                          ? "#projects"
                          : link == "Contact"
                          ? "#contact"
                          : "#speaking"
                      }
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
