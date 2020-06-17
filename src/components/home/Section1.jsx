import React from 'react';
import picCoffee from './images/coffee.png';
import Style from './section1.module.scss';

export default () => (
  <div className={Style.box}>
    <div className={Style.row}>
      <div className="wow slideInLeft" data-wow-delay="300ms">
        <h2>Lets take your to Next Level</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
          interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis
          suscipit ultrices maximus.
        </p>
      </div>
      <div className="wow slideInRight" data-wow-delay="300ms">
        <img src={picCoffee} alt="" />
      </div>
    </div>
  </div>
);
