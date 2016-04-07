import React from 'react';
import _ from 'underscore';
import constants from '../constants';

class Groups extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {_.map(constants.groups,
        (group, groupIndex) => <div key={groupIndex}>
              <li>{group.nummer}</li>
              <ul>
              {_.map(group.teams, (team, teamIndex) => <li key={teamIndex}>{team.name}</li>
          )}
              </ul>
              </div>
      )}
        </ul>
       </div>
      );
  }
}
export default Groups;
