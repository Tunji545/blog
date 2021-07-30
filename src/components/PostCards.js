import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 165,
  },
});

const PostCards = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5' gutterBottom>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                {post.date}
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                {post.description}
              </Typography>
              <Typography
                variant='subtitle1'
                gutterBottomblue
                style={{ color: 'skyblue' }}
              >
                Continue reading...
              </Typography>
            </CardContent>
          </div>

          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCards;
