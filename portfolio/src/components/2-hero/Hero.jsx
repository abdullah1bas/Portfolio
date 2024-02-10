/* eslint-disable no-undef */
// @ts-nocheck
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import myphoto from "../../../public/myphoto-modified.png";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <Stack direction={"row"} sx={{ marginTop: "3rem", alignItems: "center" }}>
      <Box
        sx={{
          maxWidth: "500px",
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "end",
            gap: "0.6rem",
            minHeight: "88px",
          }}
        >
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={myphoto}
            style={{
              width: "88px",
              borderRadius: "50%",
              border: "1px solid darkorange",
              padding: "1px",
              boxShadow: "2px 2px 40px rgba(203, 200, 200, 0.586) inset",
            }}
            alt="my photo"
          />
          <Box
            className="icon-verified"
            sx={{
              color: "var(--blue)",
              fontSize: "1.1rem",
              mb: "0.3rem",
            }}
          ></Box>
        </Stack>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
          style={{
            fontSize: "2.85rem",
            lineHeight: "3.3rem",
            margin: "24px 0",
            color: "var(--title)",
            position: "relative",
          }}
        >
          Software designer, FrontEnd Developer.
        </motion.h1>

        <Typography
          id="about"
          className="sub-title"
          sx={{
            color: "var(--subtitle)",
            fontSize: "0.9rem",
            lineHeight: "1.65rem",
            marginBottom: "32px",
            position: "relative",
          }}
        >
          I am Abdullah Fadel front-end user interface developer and I am
          seeking an opportunity to join a software development company. I can
          provide value to any company through my quick responsiveness in
          solving problems. I aspire to learn new skills in the future that will
          qualify me to be a team leader, then a company manager. I possess the
          skills and capabilities that qualify me for this, thanks to my fast
          intuition and ability to find quick solutions to problems.
        </Typography>

        <Stack
          id="speaking"
          direction={"row"}
          style={{
            gap: "1rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          {[
            {
              link: "https://www.facebook.com/abdullahafter.change",
              icon: <Facebook />,
              title: "Facebook",
            },
            {
              link: "https://www.instagram.com/abdullah_1_bas/",
              icon: <Instagram />,
              title: "Instagram",
            },
            {
              link: "https://github.com/abdullah1bas",
              icon: <GitHub />,
              title: "GitHub",
            },
            {
              link: "https://www.linkedin.com/in/abdullah-fadel-21500b27b/",
              icon: <LinkedIn />,
              title: "LinkedIn",
            },
          ].map((linkButton) => {
            return (
              <Tooltip title={linkButton.title} key={linkButton.link}>
                <IconButton
                  aria-label="Social"
                  href={linkButton.link}
                  target="_blank"
                  sx={{
                    fontSize: "1.3rem",
                    gap: "1rem",
                    color: "var(--subtitle) !important",
                    alignItems: "center",
                    ":hover .css-i4bv87-MuiSvgIcon-root": {
                      fontSize: "1.6rem",
                      transition: "0.3s",
                      cursor: "pointer",
                      color: "var(--icon-hover)",
                    },
                  }}
                >
                  {linkButton.icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </Stack>
      </Box>

      <Box
        sx={{
          width: "100%",
          translate: "100px 55px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Lottie
          lottieRef={lottieRef}
          loop={true} // or num or loop
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          // onMouseEnter={() => {
          //   lottieRef.current.pause();
          // }}
          // onMouseLeave={() => {
          //   lottieRef.current.play();
          // }}
          animationData={devAnimation}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
