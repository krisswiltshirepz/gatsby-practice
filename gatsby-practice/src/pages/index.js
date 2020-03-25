import React from "react";
import { Link } from "gatsby";
import Layout from './components/Layout';
export default () => (
  <Layout>
    <div>Hello world!
       <Link to="/blog/">blog</Link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">Hello</div>
        <div class="col-4">Hello</div>
        <div class="col-4">Hello</div>
      </div>
    </div>
  </Layout>
);
