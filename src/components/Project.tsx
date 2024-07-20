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
    delay: "2000ms",
    className: "e-com",
    href: "https://mini-commerce-sigma.vercel.app/",
  },
  {
    name: "Note App",
    description: "Note application",
    image: "/k.png",
    delay: "3000ms",
    className: "single",
    href: "https://note-app-gray-seven.vercel.app/",
  },
  {
    name: "My Personal Website",
    description: "Portfolio Website",
    image: "/personal.png",
    delay: "4000ms",
    className: "portfolio",
  },
  {
    name: "Typing Test Game",
    description: "Typing Website",
    image: "/game.png",
    delay: "5000ms",
    className: "game",
    href: "https://typing-test-game-eta.vercel.app/",
  },
];
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Change this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!init) {
            const projectTitle = document.getElementById("projectTitle");
            projectTitle?.classList.add("up");
            setTimeout(() => {
              projectTitle?.classList.remove("up");
            }, 500);
            setInit(true);
          }
          setTimeout(() => {
            setIsVisible(true);
          }, 1200);
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
  }, [init]);

  return (
    <section id="projects">
      <Box sx={{ backgroundColor: "secondary.main", pb: { xs: 5, sm: 15 } }}>
        <Typography
          id="projectTitle"
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
