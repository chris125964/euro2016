import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import  Match  from '../components/Match';
import  Matches  from '../components/Matches';
import constants from '../constants';
import { Col, Panel, Row, Tabs, Tab } from 'react-bootstrap';


class List extends React.Component {

  render() {

    console.log('list');
    return (
      <div>
        <ul>
          <li><Link to="/groups">Gruppen</Link></li>
          <li><Link to="/user">Teilnehmer</Link></li>
        </ul>
        <Row>
          <Tabs defaultActiveKey={1}>
            { _.map(constants.groups, (group, index) =>
              <Tab eventKey={index} title={"Gruppe " + constants.groups[index].nummer}>
              <Matches teams={constants.groups[index].teams}/>
              </Tab>
              )
            }
          </Tabs>
        </Row>
       </div>
    );
  }
}
export default List;
