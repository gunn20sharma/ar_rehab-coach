// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <section className="hero-section">
//         <h1>Welcome to AR Rehab Coach</h1>
//         <p>Revolutionizing physical therapy with augmented reality</p>
//         <button className="cta-button">Get Started</button>
//       </section>
      
//       <section className="features-section">
//         <div className="feature-card">
//           <h3>Personalized Exercises</h3>
//           <p>Customized rehabilitation programs tailored to your needs</p>
//         </div>
//         <div className="feature-card">
//           <h3>Real-Time Feedback</h3>
//           <p>Instant correction and guidance during exercises</p>
//         </div>
//         <div className="feature-card">
//           <h3>Progress Tracking</h3>
//           <p>Monitor your improvement over time</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Button } from '@mui/material';
// import HeroImage from '../../assets/hero-image.jpg'; // You'll need to add this image
const HeroImage = 'https://via.placeholder.com/800x500/2c3e50/ffffff?text=AR+Rehab+Coach';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Rehabilitation with AR</h1>
          <p className="hero-subtitle">
            Personalized physical therapy powered by augmented reality technology
          </p>
          <div className="hero-buttons">
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={() => document.getElementById('how-it-works').scrollIntoView()}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Person using AR for rehabilitation" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works">
        <h2 className="section-title">How AR Rehab Coach Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Personalized Assessment</h3>
            <p>Complete our initial evaluation to create your custom rehab plan</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AR-Guided Exercises</h3>
            <p>Follow real-time augmented reality instructions for perfect form</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your improvement with detailed analytics and reports</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section dark-bg">
        <h2 className="section-title">Why Choose AR Rehab Coach</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👁️</div>
            <h3>Real-Time Feedback</h3>
            <p>Get instant corrections on your form and technique</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data-Driven</h3>
            <p>Evidence-based exercises tailored to your progress</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Home Convenience</h3>
            <p>Professional-grade therapy from the comfort of your home</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Adaptive Program</h3>
            <p>Automatically adjusts difficulty based on your performance</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <h2 className="section-title">Success Stories</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="quote">"AR Rehab Coach helped me recover from shoulder surgery twice as fast as my doctor predicted!"</p>
            <p className="author">- Michael T., 42</p>
          </div>
          <div className="testimonial">
            <p className="quote">"The real-time feedback made all the difference in my knee rehabilitation."</p>
            <p className="author">- Sarah K., 35</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <h2>Ready to Start Your Recovery Journey?</h2>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/login')}
          sx={{
            fontSize: '1.2rem',
            padding: '12px 30px',
            marginTop: '20px'
          }}
        >
          Get Started Today
        </Button>
      </section>
    </div>
  );
};

export default Home;