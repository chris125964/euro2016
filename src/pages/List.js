import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import Match from '../components/Match';
import Matches from '../components/Matches';
import MatchTabelle from '../components/MatchTabelle';
import constants from '../constants';
import { Col, Panel, Row, Table, Tabs, Tab } from 'react-bootstrap';


class List extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        groups: _.extend({}, constants.groups),
        games: [{
          team1: 0,
          team2: 1,
          tore1: '',
          tore2: ''
        } , {
          team1: 2,
          team2: 3,
          tore1: '',
          tore2: ''
        } , {
          team1: 1,
          team2: 3,
          tore1: '',
          tore2: ''
        } , {
          team1: 0,
          team2: 2,
          tore1: '',
          tore2: ''
        } , {
          team1: 3,
          team2: 0,
          tore1: '',
          tore2: ''
        } , {
          team1: 1,
          team2: 2,
          tore1: '',
          tore2: ''
        }]
      };
    }

    onChangeMatch(group, nr, team1, value1, team2, value2) {
      let groups = _.extend({}, this.state.groups);
      let games = _.extend({}, this.state.games);
      games[nr].tore1 = value1;
      games[nr].tore2 = value2;
      let indexTeam1 = _.find(groups[group].teams, (team) => {return team.name === team1})
      let indexTeam2 = _.find(groups[group].teams, (team) => {return team.name === team2})
      _.map(groups, (group) => {
        _.map(group.teams, (team) => {
          team.punkte = 0;
          team.torePlus = 0;
          team.toreMinus = 0;
        });
      });
      _.map(games, (game) => {
        let tore1 = parseInt(game.tore1);
        let tore2 = parseInt(game.tore2);
        if ((!_.isNaN(tore1)) && (!_.isNaN(tore2))) {
          if (tore1 > tore2) {
            groups[group].teams[game.team1].punkte += 3;
          } else if (tore1 < tore2) {
            groups[group].teams[game.team2].punkte += 3;
          } else {
            groups[group].teams[game.team1].punkte += 1;
            groups[group].teams[game.team2].punkte += 1;
          }
          groups[group].teams[game.team1].torePlus += tore1;
          groups[group].teams[game.team1].toreMinus += tore2;
          groups[group].teams[game.team2].torePlus += tore2;
          groups[group].teams[game.team2].toreMinus += tore1;
        }
      })
      this.setState({groups});
    //  console.log('onChangeMatch # team1: ' + team1 + ' -> ' + JSON.stringify(this.state.groups[0]., null, 4));
    }
  	render() {
    	return (
      <div>
        <ul>
          <li><Link to="/groups">Gruppen</Link></li>
          <li><Link to="/user">Teilnehmer</Link></li>
        </ul>
        <Row>
          <Tabs defaultActiveKey={1}>
            { _.map(constants.groups, (group, index) =>
                <Tab eventKey={index} title={'Gruppe ' + group.nummer} key={index}>
                  <Col md={6}>
                  <Matches group={index} teams={this.state.groups[index].teams} onChange={this.onChangeMatch.bind(this)}/>
                  </Col>
                  <Col md={6}>
                    <MatchTabelle teams={this.state.groups[index].teams}/>
                  </Col>
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
