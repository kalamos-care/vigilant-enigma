import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Button from '../components/Button';
import Typography from '../components/Typography';
import curvyLines from '../../../images/curvyLines.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // item: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 5),
  // },
  title: {
    marginBottom: theme.spacing(14),
  },
  // number: {
  //   fontSize: 24,
  //   fontFamily: theme.typography.fontFamily,
  //   color: theme.palette.secondary.main,
  //   fontWeight: theme.typography.fontWeightMedium,
  // },
  // image: {
  //   height: 55,
  //   marginTop: theme.spacing(4),
  //   marginBottom: theme.spacing(4),
  // },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  // button: {
  //   marginTop: theme.spacing(8),
  // },
});

function SearchPanel(props) {
  const { classes, title, children } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={curvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          {title}
        </Typography>
        <div>
          {children}
        </div>
      </Container>
    </section>
  );
}

SearchPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPanel);
