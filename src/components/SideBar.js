import { Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const SideBar = ({ title, description, archives, socials }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.paper}>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display='block'
          variant='body1'
          key={archive.title}
          href={archive.url}
          gutterBottom
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant='h6' gutterBottom>
        Social
      </Typography>
      <Link display='block' variant='body1'>
        {socials.map((social) => (
          <Grid
            container
            direction='row'
            spacing={1}
            alignItems='center'
            key={social.name}
          >
            <Grid item>
              <social.icon />
            </Grid>
            <Grid item>{social.name}</Grid>
          </Grid>
        ))}
      </Link>
    </Grid>
  );
};

export default SideBar;
