import React from 'react';
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import { Collapse } from "reactstrap";
import './Career.css';
import KisrLogo from "./KISR.png"
import IsomLogo from "./ISOM.png"
import SelLogo from "./SEL.png"

interface IState {
  isTech1Open: boolean;
  isTech2Open: boolean;
  isSupervisorOpen: boolean;
  isFieldEngineerOpen: boolean;
  isSoftwareEngineerOpen: boolean;
}

export default class Career extends React.Component<any, IState> {

  public readonly state: IState = {
    isFieldEngineerOpen: false,
    isSoftwareEngineerOpen: false,
    isSupervisorOpen: false,
    isTech1Open: false,
    isTech2Open: false,
  }

  private handleTech1Click = () => {
    this.setState((prevState: IState) => this.setState({isTech1Open: !prevState.isTech1Open}));
  }

  private handleTech2Click = () => {
    this.setState((prevState: IState) => this.setState({isTech2Open: !prevState.isTech2Open}));
  }

  private handleSupervisorClick = () => {
    this.setState((prevState: IState) => this.setState({isSupervisorOpen: !prevState.isSupervisorOpen}));
  }

  private handleFieldEngineerClick = () => {
    this.setState((prevState: IState) => this.setState({isFieldEngineerOpen: !prevState.isFieldEngineerOpen}));
  }

  private handleSoftwareEngineerClick = () => {
    this.setState((prevState: IState) => this.setState({isSoftwareEngineerOpen: !prevState.isSoftwareEngineerOpen}));
  }

  render() {
    return (
      <HashRouter>
        <div className="careerMainBox">
          <div className="careerLogos">
            <Link className="logoLink" to="/career/kisr">
              <img className="logo" src={KisrLogo} alt="Kuwait Institute for Scientific Research Logo"/>
            </Link>

            <Link className="logoLink" to="/career/isom">
              <img className="logo" src={IsomLogo} alt="Islamic School of Miami Logo"/>
            </Link>

            <Link className="logoLink" to="/career/sel">
              <img className="logo" src={SelLogo} alt="Schweitzer Engineering Laboratories Logo"/>
            </Link>
          </div>
          
          <Switch>
            <div className="careerBody">
              <Route path="/career/kisr">
                <p className="careerJobTitle">
                  Research Assistant - December 2013 to October 2014
                </p>
                <p className="careerJobResponsibilities">
                  My primary responsibility at KISR was the maintenance of three mobile laboratories.
                  These laboratories contained devices that measure concentrations of pollutants in the air.
                  Maintenance activities consisted of periodic calibration, replacement of worn parts, and repairs.
                </p>
              </Route>

              <Route path="/career/isom">
                <p className="careerJobTitle">
                  Teacher - October 2014 to April 2015
                </p>
                <p className="careerJobResponsibilities">
                  I worked at ISoM as a math and english teacher for students in the second grade.
                </p>
              </Route>

              <Route path="/career/sel">
                <h4>Click on a job title to read more.</h4>
                <p onClick={this.handleTech1Click} className="clickableCareerJobTitle">
                  Field Service Technician I - April 2015 to May 2016
                </p>
                <Collapse className="careerJobResponsibilities" isOpen={this.state.isTech1Open}>
                  I started my career at SEL as a Field Service Technician I within Product Hospital (PH), the repair service center at SEL.
                  My primary responsibilities consisted of failure analysis and repair of SEL devices under warranty.
                  SEL guarantees support of a 72-hour lead time on repairs.
                  This is the fastest in the industry and requires their technicians to be adept at problem solving and troubleshooting electronics.
                </Collapse>

                <p className="clickableCareerJobTitle" onClick={this.handleTech2Click}>
                  Field Service Technician II - May 2016 to September 2017
                </p>
                <Collapse className="careerJobResponsibilities" isOpen={this.state.isTech2Open}>
                  At my first annual performance evaluation I was promoted to Field Service Technician II due to my exceptional throughput, attention to detail, and ability to master complex business processes.
                  This promotion typically requires two years of experience as a Field Service Technician I.
                  I continued to develop my technical expertise as a Field Service Technician II while mentoring new technician hires.
                  I also developed software that obsoleted manual processes and tools that utilized outdated technology.
                  Around the time of my second annual review I was approached by my manager regarding my interest in pursuing a career on the leadership track.
                  After careful consideration, I communicated my interest in pursuing a leadership role within SEL.
                </Collapse>

                <p className="clickableCareerJobTitle" onClick={this.handleSupervisorClick}>
                  Associate Field Service Supervisor - September 2017 to January 2019
                </p>
                <Collapse className="careerJobResponsibilities" isOpen={this.state.isSupervisorOpen}>
                  Within the next few months I was promoted to an Associate Field Service Supervisor.
                  Almost immediately after my promotion I requested an assignment to start a branch of my department in our Lewiston, Idaho manufacturing facility.
                  My assignment was approved and within a few months I completed the establishment of the first US PH outside of Pullman, WA.
                  During this time, my manager expanded my responsibilities to include supervision of Production Troubleshooting in the Lewiston facility.
                  Production Troubleshooting is the department responsible for root cause analysis and repair of devices failing production testing.
                  Although I was successful in this role and had a clear path for career advancement, I found the intellectual stimulation associated with the technical career track more appealing.
                </Collapse>
                
                <p className="clickableCareerJobTitle" onClick={this.handleFieldEngineerClick}>
                  Associate Field Service Engineer - January 2019 to January 2020
                </p>
                <Collapse className="careerJobResponsibilities" isOpen={this.state.isFieldEngineerOpen}>
                  I'm eternally grateful that my manager accommodated my request to return to the technical track by offering me a lateral move into an engineering role.
                  In this role I served as the technical point of contact for PHs in Brazil, Mexico, India, and Saudi Arabia.
                  I was also assigned a project to align the processes across all PHs in the US and abroad.
                  I meticulously detailed over 100 project deliverables and their expected completion dates.
                  I ensured steady and continuous completion of deliverables during my management of this project.
                  This project gave me excellent insight into PH processes.
                  With this insight, I identified numerous opportunities to improve quality and efficiency through business process automation (BPA).
                  I developed and presented a proposal to my manager and his colleagues.
                  I was given approval to split the PH alignment project between myself and an engineer in Mexico to allow me the bandwidth to pursue the integration of BPA into PH processes.
                  I spent about half my working hours embedded in the Factory Application Development (FAD) team expanding SEL’s in-house manufacturing execution system to the benefit of PH.
                  Working part time as a software engineer gave me the intellectual stimulation I was craving.
                </Collapse>
                
                <p className="clickableCareerJobTitle" onClick={this.handleSoftwareEngineerClick}>
                  Associate Software Engineer - January 2020 to present
                </p>
                <Collapse className="careerJobResponsibilities" isOpen={this.state.isSoftwareEngineerOpen}>
                  I applied, interviewed, and was accepted for an opening in the FAD team for an associate software engineer.
                  In this role I have worked primarily on an internally developed manufacturing execution system.
                  Working closely with end users at SEL’s state of the art electronics manufacturing facilities and a team of software engineers, we
                  have added multiple features that have improved quality and productivity.
                  I have also leveraged my troubleshooting skills acquired from previous roles to quickly identify root cause of reported bugs and
                  apply effective fixes. Each day in this role further improves my development skills and my mastery of C#, ReactJS, and SQL.
                  I am also learning about AMQs and Docker containers.
                </Collapse>
              </Route>
            </div>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

