
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTAsecton from '../components/Home/CTAsecton';

const ScholarshipPage = () => {
  const handleWhatsAppApplication = () => {
    const message = "Hi! I would like to apply for the Oathkeeper Scholarship. Please provide me with more information about the application process.";
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block mb-4">
                <span className="text-7xl md:text-8xl">⚕️</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Oathkeeper Scholarship
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Honoring the Next Generation of Ethical Healthcare Professionals
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 w-40 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-8 rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Quote Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-amber-200">
              <div className="absolute -top-6 -left-6 text-8xl text-amber-300 opacity-50">"</div>
              <div className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic text-amber-900 mb-6">
                  First, do no harm
                </p>
                <p className="text-lg text-amber-800">
                  The timeless commitment to ethical healthcare - Hippocratic Oath
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-8xl text-amber-300 opacity-50 rotate-180">"</div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-blue-500">
              <div className="flex items-center justify-center mb-6">
                <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                <span className="mx-4 text-4xl">🎓</span>
                <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                The <span className="font-bold text-blue-600">Oathkeeper Scholarship</span>, established by the Medical Education Guild (MEG), is a merit-based award designed to honor and support high school students who demonstrate unwavering commitment to becoming ethical and impactful healthcare professionals.
              </p>
            </div>
          </motion.div>

          {/* Eligibility Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              <span className="inline-block mr-3 text-5xl">✅</span>
              Eligibility Requirements
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900 mb-2">Academic Status</h3>
                    <p className="text-green-800">Current high school students or recent graduates intending to pursue a career in medicine or other healthcare professions</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-900 mb-2">Character & Dedication</h3>
                    <p className="text-green-800">Clear evidence of long-term motivation, character, and dedication to the healthcare field</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Selection Process */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              <span className="inline-block mr-3 text-5xl">📋</span>
              Selection Process
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <p className="text-xl text-gray-700 mb-8 text-center">
                All candidates must complete a comprehensive multi-stage selection process organized by the Medical Education Guild:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '✍️', title: 'Written Submission', desc: 'Motivation essay demonstrating your commitment to healthcare', color: 'purple' },
                  { icon: '🗣️', title: 'Personal Interviews', desc: 'Assessment of values, commitment, and clarity of purpose', color: 'blue' },
                  { icon: '🤔', title: 'Reflective Activities', desc: 'Evaluation of ethical readiness and responsibility', color: 'pink' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-${item.color}-200`}
                  >
                    <div className={`text-5xl mb-4 bg-${item.color}-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-center text-gray-800">{item.title}</h3>
                    <p className="text-gray-700 text-center">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scholarship Conditions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              <span className="inline-block mr-3 text-5xl">📝</span>
              Scholarship Conditions
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border-t-4 border-orange-400">
                <h3 className="font-bold text-2xl mb-6 text-orange-900 flex items-center">
                  <span className="bg-orange-200 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xl">📚</span>
                  Expectations
                </h3>
                <ul className="space-y-4">
                  {[
                    'Maintain active involvement in MEG programs',
                    'Embody core values promoted by the Guild',
                    'Mentor younger peers when possible'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border-t-4 border-orange-400">
                <h3 className="font-bold text-2xl mb-6 text-orange-900 flex items-center">
                  <span className="bg-orange-200 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xl">🎯</span>
                  Responsibilities
                </h3>
                <ul className="space-y-4">
                  {[
                    'Participate in community healthcare education',
                    'Maintain academic integrity and ethical conduct',
                    'Stay committed to healthcare professionalism'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Oathkeeper Spirit */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              <span className="inline-block mr-3 text-5xl">💫</span>
              The Oathkeeper Spirit
            </h2>
            <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-8 text-center">
                  Awardees are expected to carry the spirit of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Oathkeeper</span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: '🎯', text: 'Ethical', color: 'from-blue-400 to-blue-600' },
                    { icon: '🧠', text: 'Reflective', color: 'from-purple-400 to-purple-600' },
                    { icon: '❤️', text: 'Compassionate', color: 'from-pink-400 to-pink-600' },
                    { icon: '🔥', text: 'Committed', color: 'from-orange-400 to-orange-600' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-6 text-center shadow-lg`}
                    >
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <div className="font-bold text-lg">{item.text}</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-600 text-center italic">
                  Contributing to the MEG community and spreading the vision of healthcare as a lifelong civic and moral duty
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-12 shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              <div className="relative z-10 text-center text-white">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl mb-6"
                >
                  🚀
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Ready to Begin Your Journey?</h3>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Take the first step towards becoming an ethical healthcare professional and apply for the Oathkeeper Scholarship today.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppApplication}
                  className="bg-white text-green-600 font-bold py-6 px-12 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center mx-auto"
                >
                  <span className="text-3xl mr-3">💬</span>
                  Apply via WhatsApp
                </motion.button>
                <p className="text-white text-sm mt-6 opacity-75">
                  Join a community dedicated to transforming healthcare through education and ethical practice
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <CTAsecton />
    </PageTransition>
  );
};

export default ScholarshipPage;
