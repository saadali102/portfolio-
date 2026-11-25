import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaShieldAlt, FaBrain, FaBalanceScale, FaClipboardCheck } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Parallax effect for Projects background
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1200], [0, 240]);

  const categories = [
    { id: 'all', name: 'All', icon: <FaShieldAlt /> },
    { id: 'ai-governance', name: 'AI Governance', icon: <FaBrain /> },
    { id: 'risk', name: 'Risk Management', icon: <FaBalanceScale /> },
    { id: 'compliance', name: 'Compliance', icon: <FaClipboardCheck /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Risk Assessment Platform',
      description: 'An AI system risk assessment methodology aligned with ISO/IEC 42001 and the NIST AI Risk Management Framework.',
      image: process.env.PUBLIC_URL + '/dashboard.jpg',
      category: 'ai-governance',
      technologies: ['Excel', 'Power BI', 'ISO/IEC 42001', 'NIST AI RMF'],
      features: [
        'Risk scoring for bias, privacy, security, regulatory, and transparency concerns',
        'Risk register and risk heat map',
        'Power BI dashboard',
        'Executive report'
      ]
    },
    {
      id: 2,
      title: 'Vendor Security Risk Assessment',
      description: 'A comparative security, compliance, and data privacy review of leading cloud AI vendors, with documented risk scoring and recommendations.',
      image: process.env.PUBLIC_URL + '/cloud.jpg',
      category: 'risk',
      technologies: ['Vendor Risk Assessment', 'Security Review', 'Compliance Review', 'Data Privacy'],
      features: [
        'Assessment scope includes OpenAI, Azure OpenAI, AWS Bedrock, and Google Vertex AI',
        'Vendor assessment report and risk matrix',
        'Risk scoring with supporting rationale',
        'Recommendation sheet'
      ]
    },
    {
      id: 3,
      title: 'ISO/IEC 42001 AI Management System Implementation',
      description: 'GRC work supporting an AI Management System through governance documentation, risk processes, control mapping, and audit preparedness.',
      image: process.env.PUBLIC_URL + '/information.jpg',
      category: 'compliance',
      technologies: ['ISO/IEC 42001', 'AI Governance', 'Risk Assessment', 'Compliance Management'],
      features: [
        'Developed AI governance documentation, policies, and procedures',
        'Built an AI risk register and maintained an AI asset inventory',
        'Conducted AI impact assessments and mapped controls to organizational processes',
        'Supported audit preparedness activities'
      ]
    },
    {
      id: 4,
      title: 'End-to-End Vulnerability Assessment System',
      description: 'Security assessment and monitoring environment using SIEM, IDS, network segmentation, and risk scoring.',
      image: process.env.PUBLIC_URL + '/vulnerability.jpg',
      category: 'security',
      technologies: ['pfSense', 'Wazuh SIEM', 'Suricata', 'Metasploit', 'Python'],
      github: 'https://github.com/arsal7477/Vulnerability-Assessment-Project',
      features: ['Network segmentation (DMZ / Internal / External)', '34+ vulnerability identification', 'Custom SIEM rules and IDS alerts', 'CVSS scoring and NIST CSF mapping']
    },
    {
      id: 5,
      title: 'Genetic Algorithm-Based Phishing Email Detection',
      description: 'Phishing detection using genetic algorithm feature selection and a Random Forest classifier with TF-IDF.',
      image: process.env.PUBLIC_URL + '/phishing.jpg',
      category: 'security',
      technologies: ['Python', 'Genetic Algorithm', 'Random Forest', 'TF-IDF', 'Scikit-Learn'],
      github: '#',
      features: ['95.45% accuracy', 'Genetic algorithm optimization', 'Precision and recall analysis', 'Confusion matrix analysis']
    },
    {
      id: 6,
      title: 'Network Traffic Visualization Tool',
      description: 'A Python tool that parses packet captures and visualizes IP traffic geographically using KML and Google Earth.',
      image: process.env.PUBLIC_URL + '/network.jpg',
      category: 'security',
      technologies: ['Python', 'Wireshark', 'KML', 'GeoLiteCity', 'pygeoj'],
      github: '#',
      features: ['Geographic IP visualization', 'Packet parsing', 'Traffic classification', 'Network forensics']
    },
    {
      id: 7,
      title: 'Secure Ride-Hailing Web Application',
      description: 'A secure multi-role ride-hailing platform implementing secure authentication and web application security practices.',
      image: process.env.PUBLIC_URL + '/secure.jpg',
      category: 'security',
      technologies: ['Python', 'Flask', 'MySQL', 'JWT', 'Mapbox API'],
      github: 'https://github.com/arsal7477/-Ride-Hailing-Website-with-Integrated-Security-Features',
      features: ['JWT-based authentication', 'Hashed passwords and CSRF protection', 'OWASP Top 10 mitigation', 'Live ride tracking']
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden select-none bg-[#111b28] text-slate-100" id="projects">
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: parallaxY,
          background: 'linear-gradient(120deg, rgba(15,118,110,0.035) 0%, rgba(36,74,105,0.04) 100%)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            GRC &amp; Security Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Selected work across AI governance, risk management, compliance, and cybersecurity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-[#1b2a3b] text-white border border-slate-500 shadow-md shadow-black/20'
                  : 'bg-[#121e2b] text-slate-400 hover:bg-[#1b2a3b] hover:text-slate-100 border border-slate-700'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#1c2938] border border-slate-700/90 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 cursor-pointer select-none"
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Project Image */}
                <div className="relative h-36 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.category === 'ai-governance' ? 'bg-teal-500/20 text-teal-200' :
                      project.category === 'risk' ? 'bg-blue-500/20 text-blue-200' :
                      project.category === 'compliance' ? 'bg-indigo-500/20 text-indigo-200' :
                      'bg-slate-500/25 text-slate-200'
                    }`}>
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-700/80 text-slate-200 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-700">
                    {project.github && project.github !== '#' ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="text-sm">View Code</span>
                      </motion.a>
                    ) : <span />}
                    <span className="text-xs text-slate-400">
                      GRC &amp; Security Project
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              No projects in this category
            </h3>
            <p className="text-slate-400">
              Try selecting a different category to see more projects
            </p>
          </motion.div>
        )}

        {/* Info Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-400 max-w-2xl mx-auto">
            <span className="font-semibold text-teal-300">Note:</span> Some project repositories are private due to security considerations. 
            Contact me for access to detailed implementations and demonstrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

