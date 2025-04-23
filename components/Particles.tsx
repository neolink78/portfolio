import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground= () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                 value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  size: 40,
                },
                push: {
                  quantity: 8,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
                grab: {
                  line_linked: {
                    enable: true,
                    opacity: 1,
                  },
                  distance: 300,
                },
              },
            },
            particles: {
              color: {
                value: "#b3b3b3",
              },
              links: {
                color: "#b3b3b3",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true, 
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;