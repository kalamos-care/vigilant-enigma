import React from 'react'
import { Router } from "@reach/router"
import { Link } from 'gatsby';
import SEO from '~/components/seo'

const Order = ({ id }) => (
  <>
    <SEO title={`Order Number: ${id}`} />
    <h1>{`Order Number: ${id}`}</h1>
    <p>Thanks for your order!</p>
    <Link to="/account/order-history">View All Orders</Link>
  </>
);

const Orders = () => (
  <>
    <SEO title="Order History" />
    <h1>Order History</h1>
    <Link to="/account/order-history/001">View Order: 001</Link>
  </>
);

const OrderHistory = () => (
  <>
    <Router>
      <Orders path="/account/order-history" />
      <Order path="/account/order-history/:id" />
    </Router>
    <br />
    <br />
    <br />
  </>
)

export default OrderHistory
