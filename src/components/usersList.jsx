import React from 'react';
import PropTypes from 'prop-types';


const UsersList = ({ users }) => {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users </p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsersList;
