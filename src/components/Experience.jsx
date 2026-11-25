import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'GRC Analyst',
    organization: 'CareCloud',
    period: '2026 – Present',
    details: [
      'Conducted ISO/IEC 42001 AI audits and supported implementation of an AI Management System (AIMS), including AI risk assessments, governance documentation, and control implementation.',
      'Participated in ISO/IEC 27001 audit activities, performing gap assessments, vendor reviews, audit readiness support, and compliance reporting.',
      'Maintained risk registers and mapped controls to ISO/IEC 42001, ISO/IEC 27001, and the NIST AI Risk Management Framework.',
      'Supported governance policy development, third-party risk assessments, and compliance monitoring initiatives.'
    ]
  },
  {
    role: 'Red Team Intern',
    organization: 'ITSOLERA Pvt. Ltd.',
    period: 'July 2024 - September 2024',
    location: 'Remote',
    details: [
      'Conducted penetration testing and security assessments to identify vulnerabilities.',
      'Documented assessment findings and shared remediation recommendations to help address identified risks.',
      'Reviewed and organized vulnerability findings to support clear security reporting and prioritization.',
      'Developed Connect Finder, a Python-based people-search tool supporting identity verification and threat analysis.'
    ]
  },
  {
    role: 'Intern, VSI Cloud Modernization Services',
    organization: 'Systems Limited',
    period: 'July 2025 - August 2025',
    location: 'Onsite',
    details: [
      'Gained practical exposure to enterprise cloud migration, DevOps pipelines, and cloud development practices.',
      'Collaborated with engineers on scalability, performance, and security integration.'
    ]
  },
  {
    role: 'Young Leader, Technology',
    organization: 'Bright Network IEUK2023',
    period: 'June 2023',
    details: [
      'Completed an intensive technology internship program, collaborating with peers and industry professionals.',
      'Gained insights into technology practices and trends from experienced professionals.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-white/60 py-20 text-gray-900 dark:bg-slate-900/80 dark:text-white">
    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Work Experience</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          GRC, audit, and hands-on security experience across professional roles and programs.
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.organization}-${experience.role}`}
            className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/80 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">{experience.role}</h3>
                <p className="mt-1 text-lg font-medium text-teal-700 dark:text-teal-300">{experience.organization}</p>
              </div>
              <div className="shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                <p>{experience.period}</p>
                {experience.location && <p className="mt-1 sm:text-right">{experience.location}</p>}
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
              {experience.details.map((detail) => (
                <li key={detail} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
