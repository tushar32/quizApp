import React from 'react';
import '../../scss/style.scss';
 
const Header = () => {
   return (
      <div>
        <header className="">
          <div className="header-wrap col-lg-10 center-div">
            <div className="float-left name">
              <a data-scroll="" href="#body">
              <span>
                Tushar Barate
              </span>
              </a>	
            </div>
            <div className="float-right social-download-wrap">
              <a href="#" className="btn btn-default float-left">
              <span className="mask"></span>
              <span className="btn-label">
              <b>download resume</b>
              <span className="icon pe-7s-download"></span>
              </span>
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
        </header>
      </div>
    )
}
 
export default Header