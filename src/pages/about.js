import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This is the About Me!</h1>
    <p>This is my personal website</p>
    <Link to="/">Home</Link>
  </Layout>
);
