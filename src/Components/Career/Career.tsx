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
        <Row className="Career-subheader">
          Research Assistant - December 2013 to October 2014
        </Row>
        <Row className="Career-body">
          My primary responsibility at KISR was the maintenance of three mobile laboratories.
          These laboratories contained devices that measure concentrations of pollutants in the air.
          Maintenance activities consisted of periodic calibration, replacement of worn parts, and repairs.
        </Row>
        <Row className="Career-header">
          Islamic School of Miami
        </Row>
        <Row className="Career-body">
          I worked at ISOM as a math and english teacher for students in the second grade.
        </Row>
        <Row className="Career-header">
          Schweitzer Engineering Laboratories
        </Row>
        <Row className="Career-body">
        I started my career at SEL as a Field Service Technician I within Product Hospital, the repair service center at SEL.
        My primary responsibilities consisted of root cause analysis and repair of SEL devices returned to SEL by the customer.
        SEL guarantees support of a 72-hour lead time on repairs.
        This is the fastest in the industry and requires their technicians to be adept at problem solving and troubleshooting electronics.
        At my first annual performance evaluation I was promoted to Field Service Technician II due to my exceptional throughput, attention to detail, and ability to master complex business processes.
        This promotion typically requires two years of experience as a Field Service Technician I.
        I continued to develop my technical expertise as a Field Service Technician II while mentoring new technician hires.
        Around the time of my second annual review I was approached by leadership within my organization regarding my interest in pursuing a career on the leadership track.
        After careful consideration, I communicated my interest in pursuing a leadership role within SEL.
        Within the next few months I was promoted to an Associate Field Service Supervisor.
        Almost immediately after my promotion I requested an assignment to start a branch of my department in our Lewiston, Idaho manufacturing facility.
        My assignment was approved and within a few months I had completed that project.
        During this time, my manager expanded my responsibilities to include supervision of Production Troubleshooting in the Lewiston facility.
        Production Troubleshooting is the department responsible for root cause analysis and repair of devices failing production testing.
        </Row>
      </Col>
        
    );
  }
}

