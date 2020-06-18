import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const MetaData = () => {
  const data = useStaticQuery(
    graphql`
      {
        dataJson {
          title
        }
      }
    `
  );

  return (
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
      <title>{data.dataJson.title}</title>
    </Helmet>
  );
};

export default MetaData;
