import "./header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ setshowModal, theme, setTheme, showModal }) => {
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
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

      {showModal && (
        <div className="fixed" style={{ position: "relative" }}>
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            {["About", "Articles", "Projects", "Speaking", "Uses"].map(
              (link) => {
                return (
                  <li key={link}>
                    <a href="">{link}</a>
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

export default Header;
