import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = (props) => (
  <Helmet>
    {/* animate.css */}
    <link
      href="https://cdn.bootcdn.net/ajax/libs/animate.css/3.5.2/animate.min.css"
      rel="stylesheet"
    />
    {/* bootstrap */}
    <link
      rel="stylesheet"
      href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
  </Helmet>
);

export default MetaData;
