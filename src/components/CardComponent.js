import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



export function CardComponent({ _, item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={item.thumbnail}
        alt="imagen"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price: $ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="85%">
            <Button variant="contained" fullWidth="true">
              Agregar
            </Button>
          </Box>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
