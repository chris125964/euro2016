import React from 'react';
import _ from 'underscore';
import constants from '../constants';

class Groups extends React.Component {

  render() {

    return (
      <div>
        <ul>
          {_.map(constants.groups,
             (group, index) =>
             <div>
              <li>{group.nummer}</li>
              <ul>
              {_.map(group.teams, (team) =>
                <li>{team}</li>
              )}
              </ul>
              </div>
        )}
        </ul>
       </div>
    )
  }
}
export default Groups;
