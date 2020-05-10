import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Badge, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuLink: {
    fontSize: '1rem',
    lineHeight: '2rem',
    marginLeft: theme.spacing(3),
  },
  desktopLink: {
    color: theme.palette.common.white,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const AppAppBar = ({
  classes,
  title,
  cart,
  openClicked,
  links
}) => (
  <div>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => openClicked()}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          className={classes.title}
          href="/"
        >
          {title}
        </Link>
        <div className={classes.right}>
          {
            links.map(({ name, link }) =>
              <Link
                key={name}
                color="inherit"
                variant="h6"
                underline="none"
                className={clsx(classes.menuLink, classes.desktopLink)}
                href={link}
              >
                {name}
              </Link>
            )
          }
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.menuLink}
            href="/cart"
          >
            <Badge badgeContent={cart.quantity} color="secondary">
              <ShoppingCartIcon className={classes.cartIcon}/>
            </Badge>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    <div className={classes.placeholder} />
  </div>
);

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
