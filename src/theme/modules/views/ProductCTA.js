import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '../components/Typography';
// import TextField from '../components/TextField';
// import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(6),
    },
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(4, 3),
  },
  cardContent: {
    maxWidth: 500,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  // imageDots: {
  //   position: 'absolute',
  //   top: -67,
  //   left: -67,
  //   right: 0,
  //   bottom: 0,
  //   width: '100%',
  //   background: 'url(/static/onepirate/productCTAImageDots.png)',
  // },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  disclaimer: {
    marginTop: theme.spacing(2),
  },
});

function ProductCTA(props) {
  const {
    classes,
    ctaLeft,
    title,
    image,
    description,
    disclaimer,
    // product,
  } = props;
  // const [open, setOpen] = React.useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            {/* <form onSubmit={handleSubmit} className={classes.cardContent}> */}
            <div className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                {title}
              </Typography>
              {
                description.map((text, i) => (
                  <Typography variant="h5" key={i} className={classes.description}>
                    {text}
                  </Typography>
                ))
              }
              {/* <TextField noBorder className={classes.textField} placeholder="Your email" /> */}
              <Button
                component={Link}
                href={ctaLeft.link}
                color="primary"
                variant="contained"
                className={classes.button}
              >
                {ctaLeft.text}
              </Button>
            {/* </form> */}
              <Typography variant="body2" color="inherit" className={classes.disclaimer}>
                {disclaimer}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            {/* <div className={classes.imageDots} /> */}
            {/* <img
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
              alt="call to action"
              className={classes.image}
            /> */}
            <div className={classes.image}>
              {image}
            </div>
          </Hidden>
        </Grid>
      </Grid>
      {/* <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you our best offers, once a week."
      /> */}
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
