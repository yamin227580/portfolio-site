import { useAppSelector } from "@/store/hooks";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";

const Contact = () => {
  const lightTheme = useAppSelector((state) => state.theme.isLightTheme);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold as needed
    };

    const up = document.getElementById("up");
    const upTwo = document.getElementById("upTwo");
    const info = document.getElementById("info");
    const form = document.getElementById("form");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          up?.classList.add("moveUp");
          upTwo?.classList.add("moveUp");

          setTimeout(() => {
            info?.classList.add("moveUp");
          }, 400);

          setTimeout(() => {
            form?.classList.add("moveUp");
          }, 800);
        }
      });
    }, options);

    const target = document.getElementById("contact");

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      up?.classList.remove("moveUp");
      upTwo?.classList.remove("moveUp");
      info?.classList.remove("moveUp");
      form?.classList.remove("moveUp");
    };
  }, []);

  return (
    <section id="contact">
      <Box
        sx={{
          color: lightTheme ? "black" : "info.main",
          backgroundColor: lightTheme ? "white" : "success.main",
          pb: 5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 36,
              textAlign: "center",
              pt: { xs: 10, sm: 20 },
              userSelect: "none",
            }}
            id="up"
          >
            Contact Me
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 20, sm: 22 },
              textAlign: "center",
              mx: { xs: 3, sm: 0 },
              mt: 4,
              fontStyle: "italic",
              userSelect: "none",
            }}
            id="upTwo"
          >
            I am open for any suggestion or just to have a chat
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            mt: 8,
          }}
        >
          <Box sx={{ width: { xs: "90%", md: "30%" } }}>
            <Box id="info" sx={{ ml: { xs: 5, sm: 17, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 22,
                  mb: 3,
                  userSelect: "none",
                }}
              >
                Contact Info
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ fontSize: 27, cursor: "pointer" }} />
                <Typography sx={{ ml: 2, userSelect: "none" }}>
                  +66 801645751
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <EmailIcon sx={{ fontSize: 27, cursor: "pointer" }} />
                <Typography sx={{ ml: 2, userSelect: "none" }}>
                  yaminnyein227580@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <LocationOnIcon sx={{ fontSize: 32, cursor: "pointer" }} />
                <Typography sx={{ ml: 2, userSelect: "none" }}>
                  Bangkok, Thailand
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "85%", md: "30%" }, userSelect: "none" }}>
            <Box id="form" sx={{ ml: { xs: 5, sm: 17, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 22,
                  mt: { xs: 5, md: 0 },
                }}
              >
                Contact Form
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <PersonIcon sx={{ fontSize: 27 }} />
                <TextField
                  placeholder="Name"
                  sx={{
                    width: 500,
                    ml: 2,
                    "& .MuiInputBase-input::placeholder": {
                      color: lightTheme ? "black" : "info.main",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: lightTheme ? "black" : "info.main",
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <EmailIcon sx={{ fontSize: 27 }} />
                <TextField
                  placeholder="Email"
                  sx={{
                    width: 500,
                    ml: 2,
                    "& .MuiInputBase-input::placeholder": {
                      color: lightTheme ? "black" : "info.main",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: lightTheme ? "black" : "info.main",
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <MessageIcon sx={{ fontSize: 27 }} />
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Message"
                  sx={{
                    width: 500,
                    ml: 2,
                    "& .MuiInputBase-root": {
                      color: lightTheme ? "black" : "info.main",
                    },
                    "& .MuiInputBase-inputMultiline::placeholder": {
                      color: lightTheme ? "black" : "info.main",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: lightTheme ? "black" : "info.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: lightTheme ? "black" : "info.main",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "55%", sm: "40%" },
                  margin: "0 auto",
                  mt: 3,
                }}
              >
                <Button variant="contained" sx={{ color: "info.main" }}>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
export default Contact;
