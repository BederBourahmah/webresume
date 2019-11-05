import React from 'react';
import { Col, Row } from 'reactstrap';
import './Education.css';

export default class Education extends React.Component {
  render() {
    return (
      <Col>
        <Row className="Education-header">
          Miami Dade College
        </Row>
        <Row className="Education-body">
          I attended Miami Dade College from the Fall Semester 2008 to the Summer Semester 2010. While enrolled at MDC I earned 63 credits with a cumulative GPA of 3.68.
        </Row>
        <Row className="Education-header">
          Florida International University
        </Row>
        <Row className="Education-body">
          I attended Florida International University from the Fall Semester 2010 to the Spring Semester 2013. While enrolled at FIU I earned 95 credits with a cumulative GPA of 3.27.
          I graduated in April, 2013, receiving my Bachelor of Science degree in Electrical Engineering degree.
        </Row>
      </Col>
        
    );
  }
}

