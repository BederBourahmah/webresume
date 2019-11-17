import React from 'react';
import { Col, Row } from 'reactstrap';
import './Career.css';

export default class Career extends React.Component {
  render() {
    return (
      <Col>
        <Row className="Career-header">
          Kuwait Institute for Scientific Research
        </Row>
        <Row className="Career-body">
          I worked at KISR.
        </Row>
        <Row className="Career-header">
          Islamic School of Miami
        </Row>
        <Row className="Career-body">
          I worked at ISOM.
        </Row>
        <Row className="Career-header">
          Schweitzer Engineering Laboratories
        </Row>
        <Row className="Career-body">
          I worked at SEL.
        </Row>
      </Col>
        
    );
  }
}

