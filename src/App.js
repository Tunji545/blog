import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import { Container, createTheme, Grid, ThemeProvider } from '@material-ui/core';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts, sidebar } from './data/data';
import PostCards from './components/PostCards';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1b1b1b',
    color: 'white',
  },
});

function App() {
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <PostCards post={post} key={post.title} />
            ))}
          </Grid>
          <Grid container spacing={5}>
            <Main title='From the fire horse' />
            <SideBar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              socials={sidebar.social}
            />
          </Grid>
        </Container>
        <Footer
          title='Footer'
          body='Something here to give the footer a purpose'
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
