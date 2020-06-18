import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Style from './footer.module.scss';
import '../../.assets/font/iconfont.css';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      {
        dataJson {
          title
          social {
            url
            title
          }
        }
      }
    `
  );

  return (
    <div className={Style.box}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className={Style.copyright}>Copyright &copy; {data.dataJson.title}</span>
          </div>
          <div className={`col-md-6 ${Style.icons}`}>
            <ul className={Style.socialBtns}>
              {data.dataJson.social.map((item) => (
                <li key={item.title}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={`iconfont icon-${item.title}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
