import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
    <span>
      <br></br>
      <h1 class="home">Welcome to Script Builder!</h1>
      <p id="home">This app is meant for novice or professional writers to brainstorm and outline ideas for new stories that can become short stories, plays, teleplays, screenplays or novels.</p>

      // <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
    <div class="image-holder">
     <img src="https://images.unsplash.com/photo-1524668951403-d44b28200ce0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pereanu-sebastian-qFH7-yKoxik-unsplash.jpg" class="center" />
    </div>
  </div>

);

export default Home;
