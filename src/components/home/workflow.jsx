import React from 'react';
import Style from './workflow.module.scss';

// workflow's data
const nodes = [
  { id: '01', text: 'Concept', desc: 'gathering and analyzing requirements then Prototype development' },
  { id: '02', text: 'Plan', desc: 'make Product Development Lifecycle, the scope document is generated' },
  { id: '03', text: 'Design', desc: 'design and build the architecture of the product' },
  { id: '04', text: 'Development', desc: 'start writing the code as per the analyzed requirements' },
  { id: '05', text: 'Release', desc: 'deployed product' }
];

const Workflow = () => (
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
            <p style={{width: '175px'}}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Workflow;
