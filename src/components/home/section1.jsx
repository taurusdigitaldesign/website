import React from 'react';
import picCoffee from './images/coffee.png';
import Style from './section1.module.scss';

const Section1 = () => (
  <div className={Style.box}>
    <div className={Style.row}>
      <div className="wow slideInLeft" data-wow-delay="300ms">
        <h2>Boost your business up to high level</h2>
        <i><b>"We know good design meant that good business."</b></i>
        <p>
          Good design gives us a very intuitive understanding of our options, effectively guiding us
          to the choice that best suits us
        </p>
      </div>
      <div className="wow slideInRight" data-wow-delay="300ms">
        <img src={picCoffee} alt="" />
      </div>
    </div>
  </div>
);

export default Section1;
