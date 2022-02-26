import { Box, CardActionArea, Container, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { GAMES } from 'utils/constants';

export default function Home() {
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
                  window.location.href = card.to || card.toAbs
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
                    sx={{ background: card.color + 'EE', px: 2, py: 1 }}
                  >
                    <Stack>
                      <Typography variant="h5" component="div" fontWeight='bold' gutterBottom>
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