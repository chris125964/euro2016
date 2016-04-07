import React from 'react';
import _ from 'underscore';
import constants from '../constants';

class User extends React.Component {

  render() {

    return (
      <div>
        <ul>
          {_.map(constants.users,
        (user, index) =>
              <li key={index}>{user.name}</li>
      )}
        </ul>
       </div>
      );
  }
}
export default User;
