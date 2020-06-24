import React from 'react';
import Style from './banner.module.scss';

const Banner = () => (
  <div className={Style.box}>
    <div className={Style.mark}></div>
    <div className={Style.intro}>
      <div className={Style.firstLine}>We Build Creative</div>
      <div>Preferred</div>
      <div className="intro-heading">Product With Our Team</div>
    </div>
  </div>
);

export default Banner;
