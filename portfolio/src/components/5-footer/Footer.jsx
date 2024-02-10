import "./footer.css";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        {["About", "Projects", "Speaking", "Uses"].map((link) => {
          return (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>

      <Typography sx={{ color: "rgb(113 113 122)" }}>
        © 2023 Spencer Sharp. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
