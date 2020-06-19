import React from 'react';
import Style from './style.module.scss';

const Work = (props) => {
  return (
    <div className={Style.box}>
      <img src={props.thumbnail} alt="" />
      <div>
        <h2>{props.title}</h2>
        <span className={Style.category}>{props.category}</span>
        {/* <span className={Style.time}>{props.date}</span> */}
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Work;
