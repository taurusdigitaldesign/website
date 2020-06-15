import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultLayout = (props) => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    {/* <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script> */}
    <script src="https://cdn.bootcdn.net/ajax/libs/react-bootstrap/1.1.0-rc.0/react-bootstrap.min.js"></script>
  </Helmet>
);

export default DefaultLayout;
