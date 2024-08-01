import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  Divider
} from "@mui/material";
import { ArrowRight, List } from "@phosphor-icons/react";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import Lingkaran from "../assets/Lingkaran.png";
import VISA from "../assets/Visa_logo.png";
import MASTERCARD from "../assets/Mastercard_logo.png";
import PAYPAL from "../assets/Paypal_logo.png";
import Blob from "../assets/blob.svg";
import CC from "../assets/Card.png";

function Header() {
  const isDesktop = useResponsive("up", "md");
  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={6}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {!isDesktop && (
            <IconButton>
              <List />
            </IconButton>
          )}

          <Typography variant="h5">Oncoin</Typography>
        </Stack>
      </Grid>
      {isDesktop && (
        <Grid item md={4} container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button>platform</Button>
            <Button>Features</Button>
            <Button>Company</Button>
            <Button>Blog</Button>
            <Button>Contect</Button>
          </Stack>
        </Grid>
      )}

      <Grid item md={4} xs={6} container justifyContent="flex-end">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button>Sign in</Button>
          <Button variant="contained" sx={{ borderRadius: 0 }}>
            Sign up
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

function HeroSection() {
  const LeftContent = (
    <Grid
      sx={{ flexGrow: 1 }}
      item
      container
      md={6}
      xs={12}
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={Lingkaran}
        style={{
          position: "absolute",
          left: -60,
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <Stack spacing={6} sx={{ zIndex: 10 }}>
        <Stack spacing={3}>
          <Typography variant="h1" sx={{ lineHeight: 1.2, fontWeight: 700 }}>
            Trade Stocks, <br />
            Earn Bonus <br />
            shares. Enjoy.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={6}>
            <Typography sx={{ fontSize: 20 }}>
              Being in control of your funds is the <br />
              same as owning life. We can help you <br />
              effectively manage your portfolio.
            </Typography>
            <Box
              sx={{
                p: 1,
                bgcolor: (theme) => theme.palette.common.black,
                borderRadius: 2,
              }}
            >
              <IconButton>
                <ArrowRight />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems="center" spacing={4}>
          <img src={VISA} style={{ height: 30, filter: "grayscale(100%)" }} />
          <img
            src={MASTERCARD}
            style={{ height: 40, filter: "grayscale(100%)" }}
          />
          <img src={PAYPAL} style={{ height: 50, filter: "grayscale(100%)" }} />
        </Stack>
      </Stack>
    </Grid>
  );

  const RightContent = (
    <Grid
      sx={{ flexGrow: 1, position: "relative" }}
      item
      container
      md={6}
      xs={12}
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={Blob}
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translate(-50%, -30%)",
          width: "600px",
        }}
      />
      <Stack>
        <Box sx={{ transform: "rotate3d(0, 0 , 1, -40deg)" }}>
          <img src={CC} style={{ height: "80%" }} />
        </Box>
        <Box sx={{ transform: "rotate3d(1, 1 , 0.5, -60deg)" }}>
          <img src={CC} style={{ height: "80%" }} />
        </Box>
      </Stack>
    </Grid>
  );

  return (
    <Grid container spacing={{ xs: 15, md: 2 }} sx={{ flexGrow: 1 }}>
      {LeftContent}
      {RightContent}
    </Grid>
  );
}

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        bgcolor: "#FDFAF0",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
    >
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
    </Box>
  );
};

export default Home;
