import React, { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
        </div>
      </div>

      <div className="admin-main">
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>School</th>
                <th>ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.school}</td>
                  <td>{user.userId || 'Not Assigned'}</td>
                  <td>
                    <button onClick={() => setSelectedUser(user)}>
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="notification-panel">
          <h3>Send Notification</h3>
          <textarea placeholder="Type notification message..." />
          <button>Send to All</button>
        </div>
      </div>
    </div>
  );
};
