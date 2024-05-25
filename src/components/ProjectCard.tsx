import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import AlertDialogSlide from "./alertDialog";

interface projectData {
  name: string;
  description: string;
  image: string;
  delay?: string;
  className: string;
  href?: string;
}

interface Props {
  data: projectData;
}

const ProjectCard = ({ data }: Props) => {
  const [open, setOpen] = React.useState(false);
  if (data.href) {
    return (
      <Link
        href={data.href}
        style={{
          textDecoration: "none",
          marginRight: "15px",
          marginBottom: "20px",
        }}
      >
        <Card
          sx={{
            width: { xs: 300, sm: 370 },
            height: { xs: 230, sm: 290 },
            pb: 2,
            borderRadius: 2,
            mb: 6,
          }}
          className={data.className}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: { xs: 170, sm: 210 }, objectFit: "contain" }}
              image={data.image || ""}
              component={"div"}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  mb: 0,
                  mt: -0.5,
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 20 },
                }}
              >
                {data.name}
              </Typography>

              <Typography
                gutterBottom
                sx={{
                  mt: 0.5,
                  ml: 0.4,
                  color: "gray",
                  fontSize: { xs: 12, sm: 14 },
                }}
              >
                {data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
  return (
    <Box>
      <Card
        sx={{
          width: { xs: 300, sm: 370 },
          height: { xs: 230, sm: 290 },
          pb: 2,
          borderRadius: 2,
          mb: 6,
        }}
        className={data.className}
        onClick={() => setOpen(true)}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: { xs: 170, sm: 210 }, objectFit: "contain" }}
            image={data.image || ""}
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                mb: 0,
                mt: -0.5,
                fontWeight: "bold",
                fontSize: { xs: 14, sm: 20 },
              }}
            >
              {data.name}
            </Typography>

            <Typography
              gutterBottom
              sx={{
                mt: 0.5,
                ml: 0.4,
                color: "gray",
                fontSize: { xs: 12, sm: 14 },
              }}
            >
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <AlertDialogSlide open={open} setOpen={setOpen} />
    </Box>
  );
};
export default ProjectCard;
