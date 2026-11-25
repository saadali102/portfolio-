import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <main className="cyber-landing">
    <div className="cyber-shell">
      <header className="cyber-header">
        <a className="cyber-brand" href="#home">SAAD<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">ABOUT</a><a href="#experience">EXPERIENCE</a><a href="#skills">SKILLS</a><a href="#projects">PROJECTS</a><a href="#certifications">CERTIFICATIONS</a>
        </nav>
        <a className="cyber-nav-cta" href="#contact">LET’S TALK</a>
      </header>

      <section id="home" className="cyber-hero">
        <div className="cyber-copy">
          <p className="cyber-intro">I AM SAAD ALI</p>
          <p className="cyber-role">GRC ANALYST</p>
          <h1>PROVIDING THE BEST<br /><em>CYBER SOLUTIONS</em><br />FOR YOUR SECURITY</h1>
          <p className="cyber-summary">Governance, risk and compliance for a safer digital future. I help organizations strengthen security and build trust in AI.</p>
          <div className="cyber-actions hero-actions">
            <a className="cyber-button" href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer">View Resume</a>
            <a className="hero-project-link" href="#projects">Explore Projects</a>
          </div>
          <div className="hero-contact">
            <span>Islamabad, Pakistan</span>
            <a href="mailto:saadxali114@gmail.com">saadxali114@gmail.com</a>
          </div>
        </div>
        <div className="cyber-portrait-wrap">
          <div className="cyber-orbit cyber-orbit-one" /><div className="cyber-orbit cyber-orbit-two" />
          <span className="cyber-float cyber-lock">⌑</span><span className="cyber-float cyber-shield">⬡</span>
          <motion.img initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} src={process.env.PUBLIC_URL + '/profile.png'} alt="Saad Ali" className="cyber-portrait" />
          <div className="cyber-portrait-label"><span /> AVAILABLE FOR OPPORTUNITIES</div>
        </div>
        <div className="cyber-watermark" aria-hidden="true">SECURE<br />BY DESIGN</div>
      </section>
    </div>
  </main>
);

export default Hero;
