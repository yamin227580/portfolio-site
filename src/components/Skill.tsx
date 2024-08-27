import { useAppSelector } from "@/store/hooks";
import { Box, Grow, LinearProgress, Typography, Zoom } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleForTwo, setIsVisibleForTwo] = useState(false);
  const [checked, setChecked] = useState(false);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [muiProgress, setMuiProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [nodeProgress, setNodeProgress] = useState(0);
  const [expressProgress, setExpressProgress] = useState(0);
  const [nextProgress, setNextProgress] = useState(0);
  const { theme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setChecked(true);
          setTimeout(() => {
            setIsVisible(true);
            setIsVisibleForTwo(true);
          }, 1000);

          // Simulating progress update with random values
          const updateProgress = (
            setProgressFunction: Dispatch<SetStateAction<number>>,
            value: number
          ) => {
            const timer = setInterval(() => {
              setProgressFunction((oldProgress) => {
                if (oldProgress === 100) {
                  clearInterval(timer);
                  return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, value);
              });
            }, 300);
          };

          // Call updateProgress with each setProgress function
          updateProgress(setHtmlProgress, 90);
          updateProgress(setCssProgress, 80);
          updateProgress(setJsProgress, 85);
          updateProgress(setMuiProgress, 75);
          updateProgress(setReactProgress, 85);
          updateProgress(setNodeProgress, 65);
          updateProgress(setExpressProgress, 70);
          updateProgress(setNextProgress, 90);
        }
      });
    }, options);

    const target = document.getElementById("skills");
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
    <section id="skills">
      <Box
        sx={{
          backgroundColor: theme === "light" ? "info.main" : "success.main",
          color: theme === "light" ? "black" : "info.main",
          pb: { xs: 3, sm: 10 },
        }}
      >
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0 0" }}
          {...(checked ? { timeout: 1300 } : {})}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 34,
              py: { xs: 4, sm: 10 },
              userSelect: "none",
            }}
          >
            My Skills
          </Typography>
        </Grow>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Zoom
            in={isVisible}
            style={{
              transitionDuration: "1200ms",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "40%", md: "30%" },
                mr: { xs: 0, sm: 5 },
                mb: { xs: 0, sm: 5 },
                userSelect: "none",
              }}
            >
              <Typography>HTML</Typography>
              <Box sx={{ position: "relative", mb: 5 }}>
                <LinearProgress
                  variant="determinate"
                  value={htmlProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#DD4B25",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    top: 0.5,
                    color: "black",
                  }}
                >
                  90%
                </Typography>
              </Box>

              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>CSS</Typography>
                <LinearProgress
                  variant="determinate"
                  value={cssProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#2862E9",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  80%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>JavaScript</Typography>
                <LinearProgress
                  variant="determinate"
                  value={jsProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#EFD81D",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  85%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>Material UI</Typography>
                <LinearProgress
                  variant="determinate"
                  value={muiProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#2790F9",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  75%
                </Typography>
              </Box>
            </Box>
          </Zoom>
          <Zoom
            in={isVisibleForTwo}
            style={{
              transitionDuration: "1200ms",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "40%", md: "30%" },
                mb: 5,
                userSelect: "none",
              }}
            >
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>React</Typography>
                <LinearProgress
                  variant="determinate"
                  value={reactProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#087EA4",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  80%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>Nodejs</Typography>
                <LinearProgress
                  variant="determinate"
                  value={nodeProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#417E38",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  60%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>Expressjs</Typography>
                <LinearProgress
                  variant="determinate"
                  value={expressProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "gray",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: "black",
                  }}
                >
                  60%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", mb: 5 }}>
                <Typography>Nextjs</Typography>
                <LinearProgress
                  variant="determinate"
                  value={nextProgress}
                  sx={{
                    height: 20,
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "#000000",
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: 12,
                    right: { xs: 0, md: 10 },
                    bottom: 0,
                    color: { xs: "black", sm: "black" },
                  }}
                >
                  80%
                </Typography>
              </Box>
            </Box>
          </Zoom>
        </Box>
      </Box>
    </section>
  );
};
export default Skills;
