import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import { posts } from '../data/data';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
  },
}));

const Main = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom className={classes.title}>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown post={post} key={post.body}>
          {post.body}
        </Markdown>
      ))}
    </Grid>
  );
};

export default Main;
