import React from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const CardView = ({ title, subtitle, action }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        {
          subtitle.map((st, i) =>
            <Typography key={i} variant="body2" component="p">
              {st}
            </Typography>
          )
        }
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">{action}</Button>
      </CardActions>
    </Card>
  );
};

CardView.propTypes = {
  action: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default CardView;