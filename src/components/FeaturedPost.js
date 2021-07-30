import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: 'center',
    padding: '35px 25px',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat',
  },
  btn: {
    color: '#7878c7',
  },
});
const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContent}>
        <Typography variant='h2' className={classes.title} gutterBottom>
          Title of a longer featured blog post.
        </Typography>
        <Typography>
          Multiple lines of text that form the lede, imforming new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>read more ...</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
