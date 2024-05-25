import { Box, Typography, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    name: "POS App",
    description: "Foodie Website",
    image: "/pos.png",
    className: "pos",
    href: "https://pos-app-flame.vercel.app/",
  },
  {
    name: "Mini Pos App",
    description: "Beauty Saloon Website",
    image: "/mini.png",
    delay: "1000ms",
    className: "note",
    href: "https://mini-note-app.vercel.app/",
  },
  {
    name: "Mini-Commerce",
    description: "E-commerce Website",
    image: "/mini-e.png",
    delay: "1500ms",
    className: "e-com",
    href: "https://mini-commerce-sigma.vercel.app/",
  },
  {
    name: "Business Solution",
    description: "Single Page Website",
    image: "/single.png",
    delay: "2100ms",
    className: "single",
    href: "https://single-page-website-three-gold.vercel.app/",
  },
  {
    name: "My Personal Website",
    description: "Portfolio Website",
    image: "/personal.png",
    delay: "2600ms",
    className: "portfolio",
  },
  {
    name: "Typing Test Game",
    description: "Typing Website",
    image: "/game.png",
    delay: "3100ms",
    className: "game",
    href: "https://typing-test-game-eta.vercel.app/",
  },
];
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Change this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectTitle = document.getElementById("projectTitle");
          projectTitle?.classList.remove("up");
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        }
      });
    }, options);

    const target = document.getElementById("projects");
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
    <section id="projects">
      <Box sx={{ backgroundColor: "secondary.main", pb: { xs: 5, sm: 15 } }}>
        <Typography
          id="projectTitle"
          className="up"
          sx={{
            fontSize: 30,
            textAlign: "center",
            py: { xs: 7, sm: 10 },
            userSelect: "none",
            color: "info.main",
          }}
        >
          PROJECTS
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            margin: "0 auto",
            justifyContent: { xs: "center", md: "space-between" },
            flexWrap: "wrap",
          }}
        >
          {projectData.map((item, index) => {
            return (
              <Zoom
                key={index}
                in={isVisible}
                style={{
                  transitionDelay: true ? item.delay : "0ms",
                  transitionDuration: "800ms",
                }}
              >
                <Box>
                  <ProjectCard data={item} key={index} />
                </Box>
              </Zoom>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};
export default Projects;
