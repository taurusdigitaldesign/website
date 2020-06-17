import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Style from './workflow.module.scss';

const Workflow = () => {
  const nodes = useStaticQuery(
    graphql`
      {
        dataJson {
          workflow {
            id
            text
            desc
          }
        }
      }
    `
  ).dataJson.workflow;

  return (
    <div className={Style.box}>
      <div className={`${Style.row} ${Style.title}`}>
        <span>create a perfect product</span>
        <h2>Our Work Process</h2>
      </div>
      <div className={Style.row}>
        <ul className={Style.processwrapp}>
          {nodes.map((item) => (
            <li key={item.id} className="whitecolor wow fadeIn" data-wow-delay="300ms">
              <span className={`${Style.prostep}`}>{item.id}</span>
              <p className="fontbold bottom25">{item.text}</p>
              <p style={{ width: '175px' }}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workflow;
