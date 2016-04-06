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
          tore1: -1,
          tore2: -1
        } , {
          team1: 2,
          team2: 3,
          tore1: -1,
          tore2: -1
        } , {
          team1: 1,
          team2: 3,
          tore1: -1,
          tore2: -1
        } , {
          team1: 0,
          team2: 2,
          tore1: -1,
          tore2: -1
        } , {
          team1: 3,
          team2: 0,
          tore1: -1,
          tore2: -1
        } , {
          team1: 1,
          team2: 2,
          tore1: -1,
          tore2: -1
        }]
      };
    }

    onChangeMatch(group, nr, team1, value1, team2, value2) {
      let groups = _.extend({}, this.state.groups);
      let games = _.extend({}, this.state.games);
      games[nr].tore1 = value1;
      games[nr].tore2 = value2;
      console.log('onChangeMatch: ' + groups[group].nummer + '.' + nr + ') ' + team1 + ' - ' + team2 + ': ' + value1 + ' - ' + value2);
      let indexTeam1 = _.find(groups[group].teams, (team) => {return team.name === team1})
      let indexTeam2 = _.find(groups[group].teams, (team) => {return team.name === team2})
      console.log('indexTeam1: ' + JSON.stringify(indexTeam1, null, 4));
      console.log('indexTeam2: ' + JSON.stringify(indexTeam2, null, 4));
      console.log('games: ' + JSON.stringify(games, null, 4));
      _.map(groups, (group) => {
        _.map(group.teams, (team) => {
          team.punkte = 0;
        });
      });
      _.map(games, (game) => {if (game.tore1 > game.tore2) {
          groups[group].teams[game.team1].punkte += 3;
        } else if (game.tore1 < game.tore2) {
          groups[group].teams[game.team2].punkte += 3;
        } else {
          groups[group].teams[game.team1].punkte += 1;
          groups[group].teams[game.team2].punkte += 1;
        };
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
