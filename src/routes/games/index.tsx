import { Box, CardActionArea, Container, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { GAMES } from 'utils/constants';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container sx={{ mt: 2 }}>
      <Grid
        container
        rowSpacing={1}
        sx={{ mt: 2 }}
        columnSpacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.values(GAMES).map((card: any, index: number) => (
          <Grid item xs={6} key={index}>
            <Card>
              <CardActionArea
                onClick={() =>
                  card.toAbs
                    ? window.open(card.toAbs, "_blank")
                    : navigate(card.to ?? '')
                }
              >
                <CardContent
                  sx={{ p: 0 }}
                  style={{
                    background: `url(${card.image})`,
                    backgroundSize: 'cover',
                    minHeight: '350px',
                    display: 'flex',
                    alignItems: 'end'
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ background: 'rgba(0,0,0,0.9)', px: 2, py: 1 }}
                  >
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
    </Container>
  );
};