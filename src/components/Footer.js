import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));

const Footer = ({ title, body }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
          align='center'
          component='p'
        >
          {body}
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          Copyright{' '}
          <Link color='textSecondary' href='https://www.material-ui.com'>
            your website{' '}
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
