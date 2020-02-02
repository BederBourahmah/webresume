import React from 'react';
import './Education.css';
import MdcLogo from "./miami-dade-college.png"
import FiuLogo from "./Florida_International_University_logo.svg"

export default class Education extends React.Component {
  render() {
    return (
      <div className="educationMainBox">

        <div className="educationBox">
          <img className="logo" src={MdcLogo} alt="Miami Dade College Logo"/>  
          <p className="Education-body">
            I attended Miami Dade College from the Fall Semester 2008 to the Summer Semester 2010. While enrolled at MDC I earned 63 credits with a cumulative GPA of 3.68.
          </p>
        </div>
        
        <div className="educationBox">
          <img className="logo" src={FiuLogo} alt="Florida International University Logo"/>
          <p className="Education-body">
            I attended Florida International University from the Fall Semester 2010 to the Spring Semester 2013. While enrolled at FIU I earned 95 credits with a cumulative GPA of 3.27.
            I graduated in April, 2013, receiving my Bachelor of Science in Electrical Engineering degree.
          </p>
        </div>
        
      </div>
    );
  }
}

