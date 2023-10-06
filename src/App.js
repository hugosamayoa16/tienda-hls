import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/CardComponent";
import Error from "./components/Error";
import AppBar from "./components/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const url = "https://dummyjson.com/products";

function App() {
  const [post, setPost] = useState(null);
  const [prace, setPrace] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios.get(url).then((response) => setPost(response.data.products));
      console.log(post);
    };
    getData();
  }, []);

  if (!post) return <Error />;

  const ListCards = post.map((item, index) => (
    <Grid container item xs={3} spacing={3}>
      <Card item={item} key={index} />
    </Grid>
  ));

  return (
    <div className="App">
      <AppBar />
      <br></br>
      <br></br>

      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
      <Box width="85%">
        <Grid container spacing={10}>
          {ListCards}
        </Grid>
      </Box>
      </Grid>
    </div>
  );
}

export default App;
