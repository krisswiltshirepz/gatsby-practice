import React from 'react';
import Layout from './components/Layout';
import { Link } from 'gatsby';
export const blog = () => {
  return (
    <Layout>
      Hello from blog page
      <Link to='/'>Home</Link>
    </Layout>
  );
};

export default blog;