import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 160]);

  return (
    <section className="py-20 bg-white/75 dark:bg-slate-900/80 text-gray-900 dark:text-white relative overflow-hidden" id="about">

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: parallaxY,
          background: 'linear-gradient(120deg, rgba(15,118,110,0.05) 0%, rgba(36,74,105,0.04) 100%)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 6 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={process.env.PUBLIC_URL + "/profile.png"}
                alt="Saad Ali Profile"
                loading="lazy"
                width="600"
                height="384"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">GIKI</div>
                <div className="text-sm text-gray-300">Cyber Security</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GRC Analyst
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am Saad Ali, a Cyber Security graduate from Ghulam Ishaq Khan Institute (GIKI) and currently working as a GRC Analyst. My professional focus is on AI governance, risk management, compliance, and cybersecurity. I have hands-on experience supporting ISO/IEC 42001 AI Management System implementations and audits, along with working knowledge of ISO/IEC 27001 frameworks. My background includes AI governance, penetration testing, security operations monitoring, vulnerability assessment, incident response, and threat analysis. I combine technical cybersecurity expertise with governance and compliance practices to help organizations manage risk, strengthen security controls, and build effective AI governance programs.
            </motion.p>

            {/* Skills Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div id="certifications" className="certifications-card col-span-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-700 scroll-mt-8">
                <div className="certifications-card__heading">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 15 4l3.5-.2.7 3.4 2.3 2.7-1.8 3 0 3.5-3.4.7-2.3 2.6L12 18l-3.1 1.7-2.3-2.6-3.4-.7.1-3.5-1.9-3 2.4-2.7.7-3.4L8 4z"/><path d="m8.5 11.5 2.2 2.2 4.8-5"/></svg>
                    <span>Certifications</span>
                  </h4>
                  <span className="certifications-count">06 <small>CERTIFICATIONS</small></span>
                </div>
                <ul className="certifications-list text-sm text-gray-700 dark:text-gray-300">
                  <li><span className="certification-name">Describe security and compliance module</span><span className="certification-meta">Microsoft <span>Issued Nov 2026</span></span></li>
                  <li><span className="certification-name">AI Security Fundamentals</span><span className="certification-meta">Microsoft <span>Issued Nov 2026</span></span></li>
                  <li><span className="certification-name">ISO/IEC 27001 Information Security Associate</span><span className="certification-meta">SkillFront</span></li>
                  <li><span className="certification-name">ISO/IEC 42001 AI Management Fundamentals</span><span className="certification-meta">SkillFront</span></li>
                  <li><span className="certification-name">ISO/IEC 42001 Lead Implementer</span><span className="certification-meta">PECB <span>In Progress</span></span></li>
                  <li><span className="certification-name">Critical Thinking Skill</span><span className="certification-meta">Coursera</span></li>
                </ul>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Leadership</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Hackathon Head - ACM GIKI</li>
                  <li>• Organized 250+ participants</li>
                  <li>• Technical competitions lead</li>
                </ul>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={process.env.PUBLIC_URL + '/Resume.pdf'}
                download="Saad_Ali_Resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 32px 0 rgba(59,130,246,0.25), 0 0 16px 4px rgba(59,130,246,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

