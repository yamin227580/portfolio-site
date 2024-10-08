import { useAppSelector } from "@/store/hooks";
import { Box, Button, Slide, Typography, Zoom } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [isVisibleForImg, setIsVisibleForImg] = useState(true);
  const [isVisibleForText, setIsVisibleForText] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);

  setTimeout(() => {
    setIsVisibleForText(true);
  }, 1000);

  return (
    <section id="home">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          backgroundColor: theme === "light" ? "info.main" : "success.main",
          mt: -1.3,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Slide
          direction="left"
          in={isVisibleForImg}
          mountOnEnter
          unmountOnExit
          timeout={1200}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              textAlign: "center",
              ml: { xs: 0, sm: -10 },
              display: { xs: "block", md: "none" },
            }}
          >
            <Image
              src="/profile.jpg"
              alt="profile-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "50%",
                height: "auto",
                marginTop: "60px",
                marginBottom: "-30px",
              }}
            />
          </Box>
        </Slide>
        <Box
          sx={{
            width: { xs: "90%", md: "30%" },
            ml: { xs: 3, sm: 10 },
            color: theme === "light" ? "black" : "info.main",
          }}
        >
          <Zoom
            in={isVisibleForText}
            style={{
              transitionDuration: "1000ms",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 22 },
                  mt: { xs: 10, sm: 13 },
                  ml: 5,
                  userSelect: "none",
                }}
              >
                FULL-STACK WEB DEVELOPER
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, md: 33 },
                  mt: 2,
                  ml: 5,
                  userSelect: "none",
                }}
              >
                Yamin Nyein
              </Typography>
              <Typography
                sx={{
                  ml: 5,
                  mt: 5,
                  fontSize: { xs: 14, md: 20 },
                  width: { xs: "85%", sm: "40%" },
                  userSelect: "none",
                }}
              >
                I am Yamin Nyein and full-stack web developer.
              </Typography>
              <Button
                variant="contained"
                sx={{ ml: 5, mt: 4, userSelect: "none", color: "info.main" }}
              >
                Hire Me
              </Button>
            </Box>
          </Zoom>
        </Box>

        <Slide
          direction="left"
          in={isVisibleForImg}
          mountOnEnter
          unmountOnExit
          timeout={700}
        >
          <Box
            sx={{
              width: { xs: "50%", md: "30%" },
              textAlign: "center",
              ml: { xs: 0, sm: -10 },
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              src="/profile.jpg"
              alt="profile-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "auto", marginTop: "120px" }}
            />
          </Box>
        </Slide>
      </Box>
      {/* Content for home section */}
    </section>
  );
};
export default Home;
