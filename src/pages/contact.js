import React from 'react';
import { graphql } from 'gatsby';
import { MetaData } from '../components';
import DefaultLayout from '../layouts';
import Style from './contact.module.scss';

export const query = graphql`
  {
    dataJson {
      email
    }
  }
`;

export default ({ data }) => (
  <>
    <MetaData />
    <DefaultLayout>
      <div className="pageContain">
        <div className={Style.box}>
          <h2>Let's talk</h2>
          <div>
            Have questions about Taurus Digital Design or anything else? Send us a message and we'll
            get back to you.
          </div>
          <a href={`mailto:${data.dataJson.email}`}>{data.dataJson.email}</a>
        </div>
      </div>
    </DefaultLayout>
  </>
);
