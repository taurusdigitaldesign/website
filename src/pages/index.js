import React, { useEffect } from 'react';
import { MetaData, Banner, Design, Workflow } from '../components';
import DefaultLayout from '../layouts';


export default () => {
  useEffect(() => {
    const WOW = require('wow.js');
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  return (
    <>
      <MetaData />
      <DefaultLayout>
        <Banner />
        <Design />
        <Workflow />
      </DefaultLayout>
    </>
  );
};
