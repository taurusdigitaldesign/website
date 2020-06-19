import React from 'react';
import { graphql } from 'gatsby';
import { MetaData, Work } from '../components';
import DefaultLayout from '../layouts';
import Style from './work.module.scss';

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

export default ({ data }) => (
  <>
    <MetaData />
    <DefaultLayout>
      <div className={`pageContain ${Style.box}`}>
        {data.allMarkdownRemark.edges.map((item) => (
          <Work {...item.node.frontmatter} />
        ))}
      </div>
    </DefaultLayout>
  </>
);
