import React from 'react';
import Style from './banner.module.scss';

export default () => (
  <div className={Style.box}>
    <div className="intro-text">
      <div className="intro-lead-in">We Build Creative</div>
      <div id="js-rotating" className="intro-lead-in1">
        Preferred
      </div>
      <div className="intro-heading">Product With Our Team</div>
    </div>
  </div>
);
