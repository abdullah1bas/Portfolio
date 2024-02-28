// @ts-nocheck
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import ButtonGroup2 from "./components/ButtonGroup2";
import Button2 from "./components/Button2";

function App() {
  // const [showScrollBTN, setShowScrollBTN] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("currentMode")
  //     ? localStorage.getItem("currentMode")
  //     : "dark"
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 300) {
  //       setShowScrollBTN(true);
  //     } else {
  //       setShowScrollBTN(false);
  //     }
  //   });
  // }, [showScrollBTN]);

  // useEffect(() => {
  //   if (theme === "light") {
  //     document.body.classList.remove("dark");
  //     document.body.classList.add("light");
  //   } else {
  //     document.body.classList.remove("light");
  //     document.body.classList.add("dark");
  //   }
  // }, [theme]);

  // return (
  //   <div id="up" className="container">
  //     <div style={{ position: "relative" }}>
  //       <ParticlesBackground theme={theme} mainC={false} />
  //       <Header {...{ setShowModal, theme, setTheme, showModal }} />

  //       <Hero />
  //     </div>

  //     <div className="divider" />
  //     <div style={{ position: "relative", height: "100%" }}>
  //       <ParticlesBackground theme={theme} mainC={true} />
  //       <Main />
  //     </div>
  //     <div className="divider" />
  //     <Contact />
  //     <div className="divider" />
  //     <Footer />

  //     <a
  //       style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
  //       href="#up"
  //     >
  //       <button className="icon-keyboard_arrow_up scroll2Top"></button>
  //     </a>
  //   </div>
  // );

  // const userData = [
  //   { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
  //   { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
  //   { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
  //   { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
  // ];
  
  const callBackFn = (title) => console.log(`Clicked ${title}`);
  return (
    <div className="App">
      <Button2 callBackFn={callBackFn}>Single</Button2>
      <ButtonGroup2>
        <Button2 callBackFn={callBackFn}>First</Button2>
        <Button2 callBackFn={callBackFn}>Second</Button2>
        <Button2 callBackFn={callBackFn}>Third</Button2>
      </ButtonGroup2>
    </div>
  );
}

export default App;