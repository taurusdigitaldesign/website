import React, { useEffect } from 'react';
import WOW from 'wow.js';
import { MetaData, Section1 } from '../components';
import DefaultLayout from '../layouts';


export default () => {
  useEffect(() => {
    var wow = new WOW({
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
        <Section1 />
      </DefaultLayout>
    </>
  );
};
