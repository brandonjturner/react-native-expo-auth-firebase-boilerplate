import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
        </h1>
        <p className="lead">
        </p>
        <p>
        </p>
      </Jumbotron>
    </Row>
    <Row className="pt-md-2">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-fire" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-organization" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/docs/introduction/" className="btn btn-primary">
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-layers" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rt2zz/redux-persist" className="btn btn-primary">
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-drop" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-user-following" />
          {' '}
        </h3>
        <p>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
          </a>
        </p>
      </Col>
    </Row>
    <hr />
    <Row className="pt-5">
      <Col xs="5" sm="3" lg="2" className="offset-lg-2">
        <img className="img-fluid rounded-circle" src="https://avatars0.githubusercontent.com/u/1809236?s=460&v=4" alt="Matt Mcnamee" />
      </Col>
      <Col xs="12" sm="9" lg="5" className="pt-4 pt-sm-0">
        <h3>
        </h3>
        <p>
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://mcnam.ee">
          </a>
          {' '}
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
