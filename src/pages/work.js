import React from 'react';
import { graphql } from 'gatsby';
import { MetaData } from '../components';
import DefaultLayout from '../layouts';

export default ({ data }) => {
  return (
    <>
      <MetaData />
      <DefaultLayout>
        <div className="pageContain">
          {data.allMarkdownRemark.edges.map((item) => (
            <div>{item.node.frontmatter.title}</div>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            category
            date
            img
            thumbnail
            description
          }
        }
      }
    }
  }
`;
