import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { Button, IconButton, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import { ArrowRightAltOutlined, GitHub, InsertLink } from "@mui/icons-material";
import UseValue from "../UseValue";


const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [projects, setProjects] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });

    setProjects(newArr);
  };
  const projectsMemo = UseValue(projects);
  const activeMemo = UseValue(currentActive);

  return (
    <main className="flex" id="projects">

      <section style={{zIndex: 1 , position: 'relative'}} className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setProjects(myProjects);
          }}
          className={activeMemo == "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={activeMemo == "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("CSSBootstrap");
          }}
          className={activeMemo == "CSSBootstrap" ? "active" : null}
        >
          CSS & BS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={activeMemo == "js" ? "active" : null}
        >
          Game JS
        </button>

        <button
          onClick={() => {
            handleClick("JSBootstrap");
          }}
          className={activeMemo == "JSBootstrap" ? "active" : null}
        >
          JavaScript & BS
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={activeMemo == "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>

      <section style={{zIndex: 1 , position: 'relative'}} className="flex right-section">
        <AnimatePresence>
          {projectsMemo.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.projectTitle}
                className="card"
              >
                <IconButton
                  href={item.linkPath}
                  target="_blank"
                  sx={{ p: "0" }}
                >
                  <img
                    style={{ borderRadius: "5px", width: 266 }}
                    src={item.imgPath}
                    alt={item.projectTitle}
                  />
                </IconButton>

                <Stack sx={{ width: "266px", padding: "1rem 0.6rem" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--title)",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.projectTitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--subtitle)",
                      fontSize: "0.8rem",
                      mt: "0.7rem",
                      mb: "1.1rem",
                      height: "80px",
                      overflow: "auto",
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack gap={"11px"} direction={"row"}>
                      <Tooltip TransitionComponent={Zoom} title="website">
                        <IconButton
                          href={item.linkPath}
                          target="_blank"
                          sx={{
                            color: "var(--subtitle)",
                            ":hover .css-i4bv87-MuiSvgIcon-root": {
                              fontSize: "1.6rem",
                              color: "var(--icon-hover)",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <InsertLink />
                        </IconButton>
                      </Tooltip>

                      <Tooltip TransitionComponent={Zoom} title="github">
                        <IconButton
                          href={item.githubPath}
                          target="_blank"
                          sx={{
                            color: "var(--subtitle)",
                            ":hover .css-i4bv87-MuiSvgIcon-root": {
                              fontSize: "1.6rem",
                              color: "var(--icon-hover)",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <Button
                      href={item.githubPath}
                      target="_blank"
                      sx={{
                        fontSize: "0.9rem",
                        color: "var(--blue)",
                        mr: "12px",
                        border: "none",
                        textTransform: "lowerCase",

                        ":hover": {
                          backgroundColor: "inherit",
                        },
                        ":hover .css-i4bv87-MuiSvgIcon-root": {
                          transition: ".3s",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      more
                      <ArrowRightAltOutlined />
                    </Button>
                  </Stack>
                </Stack>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default React.memo(Main);
