import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaBalanceScale,
  FaBrain,
  FaBug,
  FaChartBar,
  FaClipboardCheck,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLaptopCode,
  FaLock,
  FaNetworkWired,
  FaSearch,
  FaServer,
  FaShieldAlt
} from 'react-icons/fa';

const TECH_CATEGORIES = [
  {
    id: 'frameworks',
    title: 'Frameworks & Standards',
    icon: FaShieldAlt,
    color: '#0F766E',
    items: [
      { name: 'ISO 42001', icon: FaBrain, color: '#0F766E' },
      { name: 'ISO 27001', icon: FaLock, color: '#2563EB' },
      { name: 'ISO 31000', icon: FaBalanceScale, color: '#7C3AED' },
      { name: 'NIST AI RMF', icon: FaBrain, color: '#0891B2' },
      { name: 'NIST CSF', icon: FaShieldAlt, color: '#16A34A' }
    ]
  },
  {
    id: 'grc-skills',
    title: 'GRC Skills',
    icon: FaBalanceScale,
    color: '#2563EB',
    items: [
      { name: 'Risk Assessment', icon: FaBalanceScale, color: '#2563EB' },
      { name: 'AI Governance', icon: FaBrain, color: '#7C3AED' },
      { name: 'Third-Party Risk', icon: FaGlobe, color: '#0891B2' },
      { name: 'Control Testing', icon: FaClipboardCheck, color: '#16A34A' },
      { name: 'Gap Assessment', icon: FaSearch, color: '#D97706' },
      { name: 'Compliance Monitoring', icon: FaChartBar, color: '#0F766E' },
      { name: 'Vulnerability & CVE Risk Analysis', icon: FaBug, color: '#DC2626' },
      { name: 'Audit Readiness', icon: FaClipboardCheck, color: '#4F46E5' }
    ]
  },
  {
    id: 'grc-tools',
    title: 'GRC Tools',
    icon: FaLaptopCode,
    color: '#7C3AED',
    items: [
      { name: 'Power BI', icon: FaChartBar, color: '#EAB308' },
      { name: 'Excel', icon: FaDatabase, color: '#16A34A' },
      { name: 'Visio', icon: FaCode, color: '#2563EB' },
      { name: 'Vanta', icon: FaShieldAlt, color: '#0F766E' },
      { name: 'SharePoint', icon: FaGlobe, color: '#0891B2' },
      { name: 'Microsoft 365', icon: FaLaptopCode, color: '#7C3AED' }
    ]
  },
  {
    id: 'deliverables',
    title: 'GRC Deliverables',
    icon: FaClipboardCheck,
    color: '#0F766E',
    items: [
      { name: 'AI Risk Registers', icon: FaBalanceScale, color: '#2563EB' },
      { name: 'Risk Dashboards', icon: FaChartBar, color: '#7C3AED' },
      { name: 'Control Mapping', icon: FaClipboardCheck, color: '#16A34A' },
      { name: 'Vendor Security Assessments', icon: FaGlobe, color: '#0891B2' },
      { name: 'Compliance Tracking', icon: FaChartBar, color: '#D97706' }
    ]
  },
  {
    id: 'technical-skills',
    title: 'Technical Skills',
    icon: FaLaptopCode,
    color: '#2563EB',
    items: [
      { name: 'Python', icon: FaCode, color: '#3776AB' },
      { name: 'Linux & Bash', icon: FaCode, color: '#E95420' },
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
      { name: 'SIEM: Wazuh & Splunk', icon: FaServer, color: '#1679AB' },
      { name: 'Wireshark & Packet Analysis', icon: FaNetworkWired, color: '#3B82F6' },
      { name: 'Nmap', icon: FaNetworkWired, color: '#16A34A' },
      { name: 'Vulnerability Assessment', icon: FaBug, color: '#DC2626' },
      { name: 'Python Security Scripting', icon: FaCode, color: '#7C3AED' }
    ]
  },
  {
    id: 'cybersecurity-experience',
    title: 'Cybersecurity Experience',
    icon: FaShieldAlt,
    color: '#DC2626',
    items: [
      { name: 'SOC Monitoring', icon: FaServer, color: '#8B5CF6' },
      { name: 'Vulnerability Assessment', icon: FaBug, color: '#EC4899' },
      { name: 'Incident Response', icon: FaShieldAlt, color: '#06B6D4' },
      { name: 'Threat Analysis', icon: FaBrain, color: '#EF4444' },
      { name: 'Network Defense', icon: FaNetworkWired, color: '#3B82F6' }
    ]
  }
];

const TechStackCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Parallax effect for background
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section id="skills" className="py-20 bg-white/75 dark:bg-slate-900/80 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: parallaxY,
          background: 'linear-gradient(120deg, rgba(15,118,110,0.05) 0%, rgba(36,74,105,0.04) 100%)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            viewport={{ once: true }}
          >
            GRC Frameworks & Capabilities
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Frameworks, skills, tools, deliverables, and hands-on security experience.
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_CATEGORIES.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer select-none ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 120, damping: 18 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {TECH_CATEGORIES[activeCategory].items.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                  >
                    <tech.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {tech.name}
                  </h3>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            {(() => {
              const IconComponent = TECH_CATEGORIES[activeCategory].icon;
              return (
                <IconComponent 
                  className="w-6 h-6"
                  style={{ color: TECH_CATEGORIES[activeCategory].color }}
                />
              );
            })()}
            <span className="font-medium text-gray-900 dark:text-white">
              {TECH_CATEGORIES[activeCategory].title}
            </span>
          </div>
        </motion.div>

        {/* Security Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-300 dark:border-gray-700">
            <span className="font-semibold text-teal-700 dark:text-teal-300">Note:</span> This section highlights my GRC frameworks, assessment skills, tools, deliverables, and related technical security experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackCarousel;

