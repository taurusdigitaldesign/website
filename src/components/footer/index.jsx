import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Style from './style.module.scss';
import '../../.assets/font/iconfont.css';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        dataJson {
          social {
            title
            url
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
            <span className={Style.copyright}>Copyright &copy; {data.site.siteMetadata.title}</span>
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
