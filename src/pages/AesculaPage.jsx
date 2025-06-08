
import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const AesculaPage = () => {
  useEffect(() => {
    // Scroll indicator
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scrollIndicator');
      if (scrollIndicator) {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.role-card, .benefit-card, .country-tag, .feature-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <PageTransition>
      <div className="aescula-page">
        <style jsx>{`
          .aescula-page {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f3e8;
          }
          
          .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, #8B6914, #B8860B);
            transform-origin: left;
            z-index: 1000;
          }
          
          .hero-section {
            background: linear-gradient(135deg, #8B6914 0%, #B8860B 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.2;
          }
          
          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .hero-title {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: fadeInUp 1s ease-out;
          }
          
          .hero-subtitle {
            font-size: 1.4rem;
            margin-bottom: 30px;
            opacity: 0.95;
            animation: fadeInUp 1s ease-out 0.2s both;
          }
          
          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 40px;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.4s both;
          }
          
          .app-preview {
            display: inline-block;
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 15px;
            margin: 30px 0;
            backdrop-filter: blur(10px);
            animation: fadeInUp 1s ease-out 0.6s both;
          }
          
          .app-link {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            border: 2px solid rgba(255,255,255,0.3);
            padding: 12px 25px;
            border-radius: 25px;
            transition: all 0.3s ease;
            display: inline-block;
          }
          
          .app-link:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
          }
          
          .how-it-works {
            padding: 80px 0;
            background: white;
          }
          
          .section-title {
            text-align: center;
            font-size: 2.8rem;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 700;
          }
          
          .section-title::after {
            content: '';
            display: block;
            width: 100px;
            height: 4px;
            background: linear-gradient(135deg, #8B6914, #B8860B);
            margin: 20px auto;
            border-radius: 2px;
          }
          
          .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: #7f8c8d;
            margin-bottom: 60px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .roles-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            margin-top: 60px;
          }
          
          .role-card {
            background: #f5f3e8;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            border: 1px solid #d4af37;
          }
          
          .role-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          
          .role-header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
          }
          
          .role-emoji {
            font-size: 3rem;
            margin-right: 20px;
          }
          
          .role-title {
            font-size: 1.8rem;
            color: #2c3e50;
            font-weight: 700;
          }
          
          .feature-list {
            list-style: none;
            margin-top: 20px;
          }
          
          .feature-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }
          
          .feature-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          
          .feature-emoji {
            font-size: 1.5rem;
            margin-right: 15px;
            flex-shrink: 0;
          }
          
          .feature-content h4 {
            color: #2c3e50;
            margin-bottom: 5px;
            font-weight: 600;
          }
          
          .feature-content p {
            color: #7f8c8d;
            font-size: 0.95rem;
          }
          
          .mission-section {
            background: linear-gradient(135deg, #2F4F4F 0%, #556B2F 100%);
            color: white;
            padding: 80px 0;
          }
          
          .mission-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .mission-title {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #DAA520;
          }
          
          .mission-text {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 40px;
            opacity: 0.95;
          }
          
          .highlight {
            background: linear-gradient(135deg, #8B6914, #B8860B);
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 600;
          }
          
          .countries-section {
            padding: 80px 0;
            background: #f5f3e8;
          }
          
          .countries-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 40px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .country-tag {
            background: white;
            padding: 12px 20px;
            border-radius: 25px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            border: 1px solid #d4af37;
          }
          
          .country-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            background: #8B6914;
            color: white;
          }
          
          .benefits-section {
            padding: 80px 0;
            background: white;
          }
          
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 50px;
          }
          
          .benefit-card {
            text-align: center;
            padding: 30px;
            border-radius: 15px;
            background: #f5f3e8;
            transition: all 0.3s ease;
            border: 1px solid #d4af37;
          }
          
          .benefit-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          
          .benefit-icon {
            font-size: 3rem;
            margin-bottom: 20px;
          }
          
          .benefit-title {
            font-size: 1.5rem;
            color: #2c3e50;
            margin-bottom: 15px;
            font-weight: 600;
          }
          
          .benefit-text {
            color: #7f8c8d;
            line-height: 1.6;
          }
          
          .cta-section {
            background: linear-gradient(135deg, #8B6914 0%, #B8860B 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
          }
          
          .cta-content {
            max-width: 700px;
            margin: 0 auto;
          }
          
          .cta-title {
            font-size: 2.8rem;
            margin-bottom: 20px;
            font-weight: 700;
          }
          
          .cta-subtitle {
            font-size: 1.3rem;
            margin-bottom: 40px;
            opacity: 0.9;
          }
          
          .waitlist-btn {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 20px 40px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .waitlist-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
            background: #ff5252;
          }
          
          .waitlist-btn:active {
            transform: translateY(-1px);
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .pulse {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .roles-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            
            .role-card {
              padding: 25px;
            }
            
            .countries-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
            
            .benefits-grid {
              grid-template-columns: 1fr;
            }
            
            .cta-title {
              font-size: 2.2rem;
            }
          }
        `}</style>

        <div className="scroll-indicator" id="scrollIndicator"></div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="containers">
            <div className="hero-content">
              <h1 className="hero-title">Aescula</h1>
              <p className="hero-subtitle">Empowering Future Medical Professionals</p>
              <p className="hero-description">
                Where passion meets opportunity - ensuring financial background doesn't stand in the way of a brilliant medical future
              </p>
              <div className="app-preview">
                <p style={{marginBottom: '15px'}}>🚀 Experience the App</p>
                <a href="https://aescula.replit.app/" target="_blank" rel="noopener noreferrer" className="app-link">
                  Try Aescula Live Demo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="containers">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Discover how Aescula transforms medical education through innovative learning and earning opportunities</p>
            
            <div className="roles-container">
              {/* Learner Path */}
              <div className="role-card">
                <div className="role-header">
                  <div className="role-emoji">👩‍🎓</div>
                  <h3 className="role-title">For Aspiring Med Students</h3>
                </div>
                
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="feature-emoji">📚</div>
                    <div className="feature-content">
                      <h4>Learn & Train</h4>
                      <p>Access tailored micro-learning units and engaging quizzes across Biology, Chemistry, Physics, Math, and Logical Thinking for medical entrance exams.</p>
                    </div>
                  </li>
                  
                  <li className="feature-item">
                    <div className="feature-emoji">💪</div>
                    <div className="feature-content">
                      <h4>Habit Building</h4>
                      <p>AI-adaptive daily check-ins and ritual-based practices help develop consistent study habits aligned with Meducism's core values.</p>
                    </div>
                  </li>
                  
                  <li className="feature-item">
                    <div className="feature-emoji">🎯</div>
                    <div className="feature-content">
                      <h4>Personalized Path</h4>
                      <p>Custom study plans based on specific medical university entrance exam syllabi (Semmelweis, Pecs, Szeged, Debrecen, and more!).</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Trainer Path */}
              <div className="role-card">
                <div className="role-header">
                  <div className="role-emoji">🧑‍🏫</div>
                  <h3 className="role-title">For Med Aspirants Who Lead</h3>
                </div>
                
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="feature-emoji">🧠</div>
                    <div className="feature-content">
                      <h4>Train to Earn</h4>
                      <p>Become a "Quiz Master" and share your knowledge, create content, and mentor peers while mastering subjects yourself.</p>
                    </div>
                  </li>
                  
                  <li className="feature-item">
                    <div className="feature-emoji">💰</div>
                    <div className="feature-content">
                      <h4>Build Your Income</h4>
                      <p>Earn rewards for your contributions that accumulate in your in-app wallet as you help others succeed.</p>
                    </div>
                  </li>
                  
                  <li className="feature-item">
                    <div className="feature-emoji">💳</div>
                    <div className="feature-content">
                      <h4>Real-World Value</h4>
                      <p>Use earnings towards medical education expenses including IMEC courses, university tuition, and admission fees through MEG partners.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="containers">
            <div className="mission-content">
              <h2 className="mission-title">💖 Our Core Purpose</h2>
              <p className="mission-text">
                Aescula's mission is to <span className="highlight">empower resource constrained high school students</span> 
                who possess an unwavering dedication to becoming medical professionals, especially those who have 
                difficulty pursuing their passion for medical and healthcare education within their own country.
              </p>
              <p className="mission-text">
                <strong>Aescula is building a community where passion meets opportunity, ensuring that financial 
                background doesn't stand in the way of a brilliant medical future.</strong> ✨
              </p>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="countries-section">
          <div className="containers">
            <h2 className="section-title">Supporting Students Worldwide</h2>
            <p className="section-subtitle">
              Prioritizing support for students from countries with limited medical education opportunities
            </p>
            
            <div className="countries-grid">
              <div className="country-tag">Afghanistan</div>
              <div className="country-tag">Burkina Faso</div>
              <div className="country-tag">Burundi</div>
              <div className="country-tag">Chad</div>
              <div className="country-tag">Cuba</div>
              <div className="country-tag">Equatorial Guinea</div>
              <div className="country-tag">Eritrea</div>
              <div className="country-tag">Gaza (Palestine)</div>
              <div className="country-tag">Haiti</div>
              <div className="country-tag">Iran</div>
              <div className="country-tag">Laos</div>
              <div className="country-tag">Lebanon</div>
              <div className="country-tag">Libya</div>
              <div className="country-tag">Mali</div>
              <div className="country-tag">Myanmar</div>
              <div className="country-tag">Republic of the Congo</div>
              <div className="country-tag">Sierra Leone</div>
              <div className="country-tag">Somalia</div>
              <div className="country-tag">South Sudan</div>
              <div className="country-tag">Sudan</div>
              <div className="country-tag">Syria</div>
              <div className="country-tag">Togo</div>
              <div className="country-tag">Turkmenistan</div>
              <div className="country-tag">Ukraine</div>
              <div className="country-tag">Venezuela</div>
              <div className="country-tag">Yemen</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="containers">
            <h2 className="section-title">Why Join Early?</h2>
            <p className="section-subtitle">Transform your medical education journey with tangible benefits</p>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3 className="benefit-title">Build Income & Skills</h3>
                <p className="benefit-text">
                  Start earning and developing valuable tutoring experience, which can become a highly paid 
                  part-time job during medical school.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3 className="benefit-title">Contribute & Be Heard</h3>
                <p className="benefit-text">
                  Participate in gigs and surveys that gather insights about pursuing medicine, helping us 
                  better support future healthcare heroes.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">🌟</div>
                <h3 className="benefit-title">Community Impact</h3>
                <p className="benefit-text">
                  Join a community dedicated to Medical Education Capability, where your success contributes 
                  to the success of aspiring medical professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="containers">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Medical Future?</h2>
              <p className="cta-subtitle">
                Join thousands of aspiring medical professionals who are building their path to success
              </p>
              <a href="https://forms.gle/4MQgBL6w98Ym3YrNA" target="_blank" rel="noopener noreferrer" className="waitlist-btn pulse">
                🚀 Join the Waitlist
              </a>
              <p style={{marginTop: '20px', opacity: '0.8', fontSize: '0.9rem'}}>
                Be among the first to experience the future of medical education
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AesculaPage;
