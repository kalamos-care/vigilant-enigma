import React from 'react'
// importing grid styles...
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'gatsby'

import SEO from '~/components/seo'
import TestCenterSearch from '~/components/TestCenterSearch'
// import ProductGrid from '~/components/ProductGrid'
// <ProductGrid />

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid container>
    <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <h1>LOVE CAN BE COMPLICATED.<br />DON'T WORRY, WE GET IT.</h1>
        <h3>Kalamos is here to help you better protect yourself and your community.</h3>
        <p>Need to get tested? You can purchase a kit to collect your samples at home or find a local testing center by entering your zipcode below.</p>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <h2>Get Tested at Home</h2>
        <Card>
          <CardHeader title="Molecular Testing Labs home collection kit">
          </CardHeader>
          <CardContent>
            <CardMedia
              image="https://m.media-amazon.com/images/I/61iXzNaIk5L._AC_UL320_ML3_.jpg"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Molecular Testing Labs is the nation's leading lab for dried blood diagnostics. That means you can collect your own blood samples from anywhere.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              In your kit, you will find a dried blood card, safety lances, alcohol pads, band-aids and all the necessary registration information.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Once you receive the kit, head over to your registration site and select the tests you want!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              *additional fees required for testing.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              **not available in New York.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Buy
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        <h3>Already have a kit?</h3>
        <Button size="large" color="primary">
             Register your kit 
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2>Get Tested at a Clinic</h2>
        <TestCenterSearch />
      </Grid>
    </Grid>


  </>
)

export default IndexPage
