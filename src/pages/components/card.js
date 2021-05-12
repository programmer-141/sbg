import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from "./assets/bg.jpg";
import "./styles/home.css";
import { StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth:320,
    maxWidth:390,
    boxShadow:" 0 0 20px rgba(0,0,0,0.2)",
    fontFamily:"Poppins",
    margin:20 + 'px',
  },
});

export default function ImgCard() {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Layout"
            height="200"
            src={img}
            title="Layout"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Layout name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Layout area or address
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to = '/post' className="cardBtn" style = {{color : 'white'}}>
            Learn More
          </Link>
        </CardActions>
      </Card>
    </StylesProvider>
  );
}
