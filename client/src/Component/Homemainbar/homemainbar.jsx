import React from 'react';
import './Homemainbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Questionlist from './Questionlist';

function Homemainbar() {
  const user = 1; // You might want to get the user from Redux or Context
  const location = useLocation();
  const navigate = useNavigate();
  const questionlist = null; // Update this to the actual state or data

  const checkauth = () => {
    if (user === null) {
      alert('Login or signup to ask a question');
      navigate('/Auth');
    } else {
      navigate('/Askquestion');
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/' ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkauth}>
          Ask Questions
        </button>
      </div>
      <div>
        {/* Check if questionlist is available and not null */}
        {questionlist?.data ? (
          <>
            <p>{questionlist.data.length} questions</p>
            <Questionlist questionlist={questionlist.data} />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Homemainbar;
