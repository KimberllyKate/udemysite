import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const UserDashboard = () => {
  const [news, setNews] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [userId, setUserId] = useState('');

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="user-info">
          <h2>Welcome, {username}</h2>
          <p>ID: {userId}</p>
        </div>
        <div className="notification-icon">
          <span className="notification-count">{notifications.length}</span>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="news-feed">
          <iframe 
            src="https://thehackernews.com" 
            title="Hacker News"
            className="news-iframe"
          />
        </div>

        <div className="chat-section">
          <div className="messages">
            {messages.map(msg => (
              <div className="message" key={msg.id}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="Type message to admin..."
            className="message-input"
          />
        </div>
      </div>
    </div>
  );
};
