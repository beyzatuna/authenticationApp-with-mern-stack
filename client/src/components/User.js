import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

function User() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Credentials': 'include'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Not authenticated');
        }
        return response.json();
      })
      .then(data => {
        setEmail(data.email);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <div className="user-container">
      <div className="user-card">
        <h1 className="user-title">Welcome, {email}!</h1>
        <p className="user-description">This is your dashboard.</p>
      </div>
    </div>
  );
}

export default User;
