import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

/**
 * Below importation is the animation of the backgroundParticleTwo
 */

import BackgroundParticleTwo from "./BackgroundParticleTwo";
/**
 * Below importation is the animation of the backgroundParticleThree
 */
// import BackgroundParticleThree from "./BackgroundParticleThree";

function BackgroundParticles() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    // Observer to watch for changes in the class list
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  /**
   * This is the main function for to apply the tsparticles background.
   */
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const isDark = theme === "dark";
  return (
    init && (
      /**
       * Here we have used component type particles
       * so that we can you any types of tsparticles animations as we want.
       */

      //   <BackgroundParticleTwo />
      // <BackgroundParticleThree />
      <Particles
        className="w-full h-full absolute top-0 left-0 z-0"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: isDark ? "#000000" : "#99CFFF",
              value: isDark ? "#000000" : "#5497d1",
              // value: "#0A0A0A",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse", // Changed from "Remy" to "repulse" for valid mode
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                // Added a new mode
                distance: 250,
                size: 10,
                duration: 2,
                opacity: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: isDark ? "#007ffe" : [ "#B45A00" , "#87b400" , "#e8000e" , "#0073e6"],
              //   changing the color of the particle tops
            },
            links: {
              color: isDark ? "#007ffe" : [ "#000000" , "#B45A00" , "#87b400" , "#e8000e" , "#0073e6"],
              //   Changing the linking between the partifla
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: ["circle", "edge", "triangle", "polygon", "star", "image"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}

export default BackgroundParticles;
