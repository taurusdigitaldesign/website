import React from 'react';
import picCup from './images/awesome-feature.png';
// import Style from './style.scss';

export default () => (
  <div className="box">
    <div className="row">
      <div className="wow slideInLeft" data-wow-delay="300ms">
        <h2>Lets take your to Next Level</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
          interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis
          suscipit ultrices maximus.
        </p>
      </div>
      <div className="wow slideInRight" data-wow-delay="300ms">
        <img src={picCup} />
      </div>
    </div>
  </div>
);
