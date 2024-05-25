import { Box, Button, Slide, Typography, Zoom } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleForImg, setIsVisibleForImg] = useState(false);
  const [isVisibleForText, setIsVisibleForText] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Change this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsVisibleForImg(true);
          }, 1000);
          setTimeout(() => {
            setIsVisibleForText(true);
          }, 1500);
        }
      });
    }, options);

    const target = document.getElementById("about");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section id="about">
      <Box sx={{ backgroundColor: "secondary.main", pb: { xs: 10, sm: 15 } }}>
        <Slide
          direction="down"
          in={isVisible}
          mountOnEnter
          unmountOnExit
          timeout={900}
        >
          <Typography
            sx={{
              fontSize: 36,
              textAlign: "center",
              py: { xs: 5, sm: 10 },
              userSelect: "none",
              color: "info.main",
            }}
          >
            About Me
          </Typography>
        </Slide>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "60%", md: "30%" },
              textAlign: "center",
              ml: { xs: 2, sm: 15, md: 0 },
            }}
          >
            <Zoom
              in={isVisibleForImg}
              style={{
                transitionDuration: "1000ms",
              }}
            >
              <Image
                src="/developer.png"
                alt="profile-image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
              />
            </Zoom>
          </Box>
          <Zoom in={isVisibleForText} style={{ transitionDuration: "1000ms" }}>
            <Box
              sx={{
                width: {
                  xs: "85%",
                  md: "40%",
                },
              }}
            >
              <Typography
                sx={{
                  mt: 5,
                  fontSize: 14,
                  lineHeight: 2,
                  userSelect: "none",
                  color: "info.main",
                  ml: { xs: 6, md: 0 },
                }}
              >
                Hello! I am Yamin Nyein, a full-stack web developer with a knack
                for turning ideas into reality through code. With a solid
                foundation in languages like HTML, CSS, and JavaScript, I craft
                user-friendly interfaces and I am equally comfortable working
                with databases, APIs, and server-side technologies like Node.js,
                Expressjs and Nextjs to ensure that everything runs smoothly.
                Outside of coding, I am passionate about staying up-to-date with
                the latest trends and technologies in the ever-evolving world of
                web development. Thanks for dropping by! Whether you are looking
                to collaborate on a project or just want to chat about all
                things web development, I am always up for a conversation.
              </Typography>
              <Box
                sx={{
                  width: {
                    xs: "55%",
                    sm: "40%",
                  },
                  margin: { xs: "0 auto", md: 0 },
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    color: "info.main",
                    ml: { xs: 4, sm: 8, md: 0 },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Zoom>
        </Box>
      </Box>
    </section>
  );
};
export default About;
