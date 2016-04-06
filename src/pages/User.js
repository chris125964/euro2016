import React from 'react';
import _ from 'underscore';
import constants from '../constants';

class User extends React.Component {

  render() {

    return (
      <div>
        <ul>
          {_.map(constants.users,
        (user, index) => <div>
              <li>{user.name}</li>
              </div>
      )}
        </ul>
       </div>
      );
  }
}
export default User;
