import React from 'react';
import './home.css'

const Home = () => {
  const heroSectionStyle = {
    backgroundImage: 'url(https://d2wvwvig0d1mx7.cloudfront.net/data/org/23436/media/img/cache/1600x0/2771738_1600x0.jpg)'
  };

  return (
    <div>
      <div className="hero-section" style={heroSectionStyle}>
        <h1>Track Your Workouts with HansVFitness</h1>
        <p>Join a community of athletes and reach your fitness goals</p>
        <button>Sign Up!</button>
      </div>

      <div className="features-section">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Track your workouts"/>
            <h3>Track Your Workouts</h3>
            <p>Log your runs, rides, and other workouts with GPS tracking and analyze your performance with stats and charts.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Join challenges"/>
            <h3>Join Challenges</h3>
            <p>Stay motivated and compete with other athletes in fun and challenging virtual events and races.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Get training plans"/>
            <h3>Get Training Plans</h3>
            <p>Choose a training plan based on your fitness level, goals, and preferences, and get personalized coaching and guidance.</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Users Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"My Fitness App is the best fitness app I've used. It has helped me stay motivated and track my progress."</p>
            <p>- Jane Doe, Runner</p>
          </div>
          <div className="testimonial-card">
            <p>"I love the challenges feature. It's so fun to compete with my friends and see how I stack up against other athletes."</p>
            <p>- John Smith, Cyclist</p>
          </div>
          <div className="testimonial-card">
            <p>"The training plans are great. They've really helped me improve my performance and achieve my fitness goals."</p>
            <p>- Sarah Johnson, Triathlete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
