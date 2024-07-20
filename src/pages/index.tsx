import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLightDark } from "@/store/slices/lightDardSlice";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Project";
import Skills from "../components/Skill";

const menus = ["Home", "About", "Skills", "Projects", "Contact"];

const HomePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const lightTheme = useAppSelector((state) => state.theme.isLightTheme);

  const dipatch = useAppDispatch();
  const router = useRouter();

  const handleThemeChange = () => {
    dipatch(setLightDark(!lightTheme));
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");
      const skillsSection = document.getElementById("skills");

      const sections = [
        { id: "home", ref: homeSection },
        { id: "about", ref: aboutSection },
        { id: "projects", ref: projectsSection },
        { id: "contact", ref: contactSection },
        { id: "skills", ref: skillsSection },
      ];
      const active = sections.find(({ id, ref }) => {
        if (!ref) return false;
        ref.addEventListener("mouseenter", () => setActiveSection(id));
      });
      if (active) setActiveSection(active.id);
    };
    handleScroll();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  const handleForLink = () => {
    router.push("https://github.com/yamin227580");
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflowY: "auto",
        flexDirection: "column",
        position: "relative",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: 70,
          display: "flex",
          backgroundColor: "success.main",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          top: 0,
          opacity: 0.95,
          zIndex: 50,
        }}
      >
        <Box>
          <IconButton
            sx={{ display: { xs: "block", lg: "none" }, ml: -2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: 28, color: "#E8F6EF" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "20%",
            textAlign: "center",
            color: "primary.main",
          }}
        >
          <Typography
            sx={{ fontSize: 24, fontWeight: "bold", ml: { xs: -2, sm: 0 } }}
          >
            YMN
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: { xs: "none", lg: "flex" },
            justifyContent: "space-between",
            cursor: "pointer",
            userSelect: "none",
            color: "info.main",
          }}
        >
          <Typography
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            HOME
          </Typography>
          <Typography
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            ABOUT
          </Typography>
          <Typography
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => handleNavClick("skills")}
          >
            SKILLS
          </Typography>
          <Typography
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            PROJECTS
          </Typography>

          <Typography
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            CONTACT
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            ml: -2,
            mt: 0.7,
          }}
          onClick={handleThemeChange}
        >
          {lightTheme ? (
            <NightlightIcon
              sx={{ fontSize: 28, cursor: "pointer", color: "info.main" }}
            />
          ) : (
            <LightModeIcon
              sx={{ fontSize: 28, cursor: "pointer", color: "info.main" }}
            />
          )}
        </Box>
        <Box>
          <GitHubIcon
            sx={{
              display: { xs: "block", lg: "none" },
              fontSize: 28,
              cursor: "pointer",
              color: "info.main",
              mr: -1,
            }}
            onClick={handleForLink}
          />
        </Box>
      </Box>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            minWidth: 250,
            backgroundColor: "success.main",
            borderTopRightRadius: "20px",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: 30,
              color: "white",
              position: "absolute",
              top: 10,
              right: 20,
            }}
            onClick={() => setOpenDrawer(false)}
          />
          <List sx={{ p: 0, mt: 6 }}>
            {menus.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ "&.hover": { backgroundColor: "blue" } }}
              >
                <ListItemButton>
                  <ListItemText
                    primary={item}
                    sx={{ color: "info.main" }}
                    onClick={() => {
                      const menu = item.toLocaleLowerCase();
                      setOpenDrawer(false);
                      handleNavClick(menu);
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ marginTop: 10 }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
};
export default HomePage;
