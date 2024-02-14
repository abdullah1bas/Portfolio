// @ts-nocheck
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// eslint-disable-next-line react/prop-types
const ParticlesBackground = ({ theme , mainC }) => {
  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);

    // await loadFull(engine);
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);
  return (
    <Particles
      id={mainC ? 'tsparticlesMainC' : "tsparticles"}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        // background: {
        //   color: {
        //     value: "#000000",
        //   },
        //   image: "",
        //   position: "",
        //   repeat: "",
        //   size: "",
        //   opacity: 1,
        // },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: false,
          zIndex: -20,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: mainC ? 120 : 300,
        manualParticles: [],

        particles: mainC
          ? {
              collisions: {
                enable: true,
                mode: "bounce",
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                direction: [
                  "top-left",
                  "bottom-left",
                  "bottom-right",
                  "top-right",
                ],
                drift: 0,
                enable: true,
                random: false,
                size: false,
                speed: 0.8,
                outMode: "bounce",
              },
              number: {
                limit: 0,
                value: 50,
              },

              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.4,
                  maxValue: 0.6,
                },
                value: 0.4,
                animation: {
                  count: 0,
                  enable: true,
                  speed: 0.2,
                  decay: 0,
                  sync: true,
                  destroy: "none",
                  startValue: "random",
                },
              },
              color: {
                value: theme == "light" ? "#090909" : "#ffffff",
              },
              shape: {
                type: "char",
                character: [
                  "\uf38b",
                  "\uf3b9",
                  "\uf13b",
                  "\uf09b",
                  "\uf41b",
                  "\uf1cb",
                  "\uf836",
                ].map((value) => {
                  return {
                    fill: true,
                    font: "Font Awesome 6 Brands",
                    style: "",
                    value,
                    weight: "400",
                  };
                }),
              },

              size: {
                random: {
                  enable: true,
                  minimumValue: 25,
                  maxValue: 35,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 0.2,
                  decay: 0,
                  sync: true,
                  destroy: "none",
                  startValue: "random",
                },
              },

              // lineLinked: {
              //   blink: false,
              //   color: {
              //     value: theme == "light" ? "#090909" : "#ffffff",
              //   },
              //   consent: true,
              //   distance: 100,
              //   enable: true,
              //   frequency: 10,
              //   opacity: 0.4,
              //   width: 1,
              // },
            }
          : {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: theme == "light" ? "#090909" : "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: theme == "light" ? "#000000" : "#ffffff",
                },
                polygon: {
                  nb_sides: 3,
                },
                // "image": {
                //   "src": "img/github.svg",
                //   "width": 100,
                //   "height": 100
                // }
              },
              opacity: {
                value: 0.08680624057955,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 19.489853095232284,
                  size_min: 40.603860615067255,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 128.27296486924183,
                color: theme == "light" ? "#090909" : "#ffffff",
                opacity: 0.25654592973848367,
                width: 0.9620472365193136,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 1362.9002517356944,
                  rotateY: 1200,
                },
              },
            },

        interactivity: mainC
          ? {
              detectsOn: "#hero",
              events: {
                onDiv: [
                  {
                    selectors: "#repulse-div",
                    enable: true,
                    mode: "bounce",
                    type: "circle",
                  },
                  {
                    selectors: "#repulse-div",
                    enable: true,
                    mode: "repulse",
                    type: "circle",
                  },
                  {
                    selectors: "#repulse-span",
                    enable: true,
                    mode: "repulse",
                    type: "circle",
                  },
                  {
                    selectors: "#repulse-span",
                    enable: true,
                    mode: "bounce",
                    type: "circle",
                  },
                  {
                    selectors: "#togglebutton",
                    enable: true,
                    mode: "repulse",
                    type: "circle",
                  },
                  {
                    selectors: "#togglebutton",
                    enable: true,
                    mode: "bounce",
                    type: "circle",
                  },
                  {
                    selectors: "#scroller",
                    enable: true,
                    mode: "repulse",
                    type: "circle",
                  },
                  {
                    selectors: "#scroller",
                    enable: true,
                    mode: "bounce",
                    type: "circle",
                  },
                ],

                onclick: { enable: true, mode: "repulse" },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: true,
                    force: 350,
                    smooth: 20,
                  },
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },

              modes: {
                bounce: {
                  distance: 100,
                },
                bubble: {
                  distance: 100,
                  duration: 0.4,
                  size: 40,
                  color: {
                    value: "#29c27f",
                  },
                  opacity: 8,
                  mix: false,
                },

                repulse: {
                  distance: 200,
                  factor: 200,
                  speed: 1,
                  maxSpeed: 50,
                },
              },
            }
          : {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 426.3405364582062,
                  line_linked: {
                    opacity: 0.361955216268242,
                  },
                },
                bubble: {
                  distance: 365.4347455356053,
                  size: 85.26810729164123,
                  duration: 2.51743935813417,
                  opacity: 0.12993235396821523,
                  speed: 3,
                },
                repulse: {
                  distance: 146.17389821424212,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
        retina_detect: false,

        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: mainC ? true : false,
        style: {},
        themes: [],
        zLayers: 100,
        // emitters: {
        //   autoPlay: true,
        //   fill: true,
        //   life: {
        //     wait: false,
        //   },
        //   rate: {
        //     quantity: 1,
        //     delay: 7,
        //   },
        //   shape: "square",
        //   startCount: 0,
        //   size: {
        //     mode: "percent",
        //     height: 0,
        //     width: 0,
        //   },
        //   particles: {
        //     shape: {
        //       type: "images",
        //       options: {
        //         images: {
        //           src: "https://particles.js.org/images/cyan_amongus.png",
        //           width: 500,
        //           height: 634,
        //         },
        //       },
        //     },
        //     size: {
        //       value: 40,
        //     },
        //     move: {
        //       speed: 10,
        //       outModes: {
        //         default: "none",
        //         right: "destroy",
        //       },
        //       straight: true,
        //     },
        //     zIndex: {
        //       value: 0,
        //     },
        //     rotate: {
        //       value: {
        //         min: 0,
        //         max: 360,
        //       },
        //       animation: {
        //         enable: true,
        //         speed: 10,
        //         sync: true,
        //       },
        //     },
        //   },
        //   position: {
        //     x: -5,
        //     y: 55,
        //   },
        // },
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;