import React from 'react';
import '../home.css';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
      <div>
        <span>
          <br/>

            <h2>Welcome to Script Builder!</h2>
            <p>This app is meant for novice or professional writers to brainstorm and outline ideas for new stories that can become short stories, plays, teleplays, screenplays or novels</p>
            <br/>
            <p>Please <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
         </span>
      </div>
    )
  };

export default Home;
