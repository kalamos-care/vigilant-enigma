import React from 'react'
import { withStyles } from '@material-ui/styles';
import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = theme => ({
  list: {
    minWidth: '260px',
  }
});

const AppDrawer = ({
  classes,
  open,
  onDrawerClose, links
}) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={() => onDrawerClose()}
  >
    <List className={classes.list}>
      {links.map(({name, link}) => (
        <ListItem button component={Link} href={link} key={name}>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default withStyles(styles)(AppDrawer);