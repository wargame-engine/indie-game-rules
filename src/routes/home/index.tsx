import NewsIcon from '@mui/icons-material/Newspaper';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Box, CardActionArea, Container, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import logo from 'assets/images/logo_large.png';
import splash from 'assets/images/splash.png';
import Discord from 'mdi-material-ui/Discord';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { colors } from 'utils/colors';

type CardType = {
  name: string,
  icon: any,
  text: string,
  to?: string,
  toAbs?: string,
  color: any
};

export default function Home() {
  const navigate = useNavigate();
  const iconSize = '70px';
  const CARDS: Array<CardType> = [
    {
      name: "News",
      icon: <NewsIcon style={{ fontSize: iconSize }} />,
      text: "View updates and information about Indie Game Rules",
      to: "/news",
      color: colors.brown.import[500],
    },
    {
      name: "Games",
      icon: <StraightenIcon style={{ fontSize: iconSize }} />,
      text: "Browse our published games and give them a try.",
      to: "/games",
      color: colors.brown.import[500],
    },
    {
      name: "Community",
      icon: <Discord style={{ fontSize: iconSize }} />,
      text: "Join the community to discuss and contribute to our games.",
      toAbs: "https://discord.com/invite/M9sets4",
      color: colors.brown.import[500],
    }
  ];
  return (
    <Box>
      <div
        style={{
          backgroundImage: `url(${splash})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: 'column' }} style={{ width: "100%", background: "rgba(0,0,0,0.7)" }}>
          <img
            className={"d-block text-center logo"}
            src={logo}
            alt="logo"
          />
        </Box>
      </div>
      <Container sx={{ mt: 2 }}>
        <Grid
          container
          rowSpacing={1}
          sx={{ mt: 2 }}
          columnSpacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {CARDS.map((card: any, index: number) => (
            <Grid item xs={4} key={index}>
              <Card>
                <CardActionArea
                  onClick={() =>
                    card.toAbs
                      ? window.open(card.toAbs, "_blank")
                      : navigate(card.to ?? '')
                  }
                >
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box sx={{ mr: 2 }}>{card.icon}</Box>
                      <Stack>
                        <Typography variant="h4" component="div">
                          {card.name}
                        </Typography>
                        <Typography align="left">{card.text}</Typography>
                      </Stack>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Our Mission</Typography>
          <Typography variant="body1" paragraph>Create long-lasting games with the ability to update and improve as the game evolves. By remaining independent, we are not motivated by pushing books or other physical media to generate our income. Instead, we are supported monthly through other means to continue to create rules we ourselves want to play.</Typography>
          <Typography variant="h4" gutterBottom>Digital First</Typography>
          <Typography variant="body1" paragraph>Our rules are digital-first and available printer-friendly. With that, we can make regular and consistent balance updates and rules changes without having to worry about physical prints of any of our rules becoming out of date. If something seems off or doesn't make sense, connect with us on one of our community platforms and we can easily correct or clarify it.</Typography>
          <Typography variant="h4" gutterBottom id="contact-us">Contact Us</Typography>
          <Typography variant="body1" paragraph>We want to hear from you! If you have any comments, constructive criticisms or concerns, reach out on one of our social platforms, or contact us directly at our email: indiegamerules@gmail DOT com</Typography>
        </Box>
      </Container>
    </Box>
  );
};