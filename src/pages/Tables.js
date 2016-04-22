import React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import _ from 'underscore';
import constants from '../constants';
import Match from '../components/Match';
import Matches from '../components/Matches';
import MatchTabelle from '../components/MatchTabelle';

export default React.createClass ({

  getInitialState() {
    const gruppen = _.extend({}, constants.groups);
    return({
      groups: gruppen,
      games: [{
        team1: 0,
        team2: 1,
        tore1: '',
        tore2: ''
      }, {
        team1: 2,
        team2: 3,
        tore1: '',
        tore2: ''
      }, {
        team1: 1,
        team2: 3,
        tore1: '',
        tore2: ''
      }, {
        team1: 0,
        team2: 2,
        tore1: '',
        tore2: ''
      }, {
        team1: 3,
        team2: 0,
        tore1: '',
        tore2: ''
      }, {
        team1: 1,
        team2: 2,
        tore1: '',
        tore2: ''
      }]
    });
  },

  onChangeMatch(group, nr, team1, value1, team2, value2) {
    let groups = _.extend({}, this.state.groups);
    let games = _.extend({}, this.state.games);
    games[nr].tore1 = value1;
    games[nr].tore2 = value2;
    let indexTeam1 = _.find(groups[group].teams, (team) => {
      return team.name === team1
    })
    let indexTeam2 = _.find(groups[group].teams, (team) => {
      return team.name === team2
    })
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
    this.setState({
      groups
    });
    //  console.log('onChangeMatch # team1: ' + team1 + ' -> ' + JSON.stringify(this.state.groups[0]., null, 4));
  },

  render() {
    return (
      <Row>
        <Tabs defaultActiveKey={1}>
          { _.map(constants.groups, (group, index) => <Tab eventKey={index} title={'Gruppe ' + group.nummer} key={index}>
                <Col md={7}>
                <Matches group={index} teams={this.state.groups[index].teams} onChange={this.onChangeMatch}/>
                </Col>
                <Col md={5}>
                  <MatchTabelle teams={this.state.groups[index].teams}/>
                </Col>
              </Tab>
      )
      }
        </Tabs>
      </Row>
    )
  }
})
