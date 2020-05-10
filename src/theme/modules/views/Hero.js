import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HeroLayout from './HeroLayout';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundColor: theme.palette.background.paper,
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Hero(props) {
  const {
    classes,
    title,
    description,
    disclaimer,
    ctaLeft,
    ctaRight
  } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="Product Image" /> */}
      <Typography color="inherit" align="center" variant="h3" marked="center">
        {title()}
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {description}
      </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
      >
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href={ctaLeft.link}
          >
            {ctaLeft.text}
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href={ctaRight.link}
          >
            {ctaRight.text}
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" color="inherit" className={classes.more}>
        {disclaimer}
      </Typography>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
