
import React from 'react';
import PageTransition from '../components/PageTransition';
import CTAsecton from '../components/Home/CTAsecton';

const ScholarshipPage = () => {
  const handleWhatsAppApplication = () => {
    const message = "Hi! I would like to apply for the Oathkeeper Scholarship. Please provide me with more information about the application process.";
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">📜 Oathkeeper Scholarship</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Honoring the Next Generation of Ethical Healthcare Professionals
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-xl p-8 shadow-lg max-w-lg">
              <div className="text-center">
                <div className="w-80 h-60 mx-auto bg-gradient-to-br from-amber-200 to-yellow-100 rounded-lg flex items-center justify-center mb-4 shadow-inner">
                  <div className="text-center text-amber-800">
                    <div className="text-8xl mb-2">⚕️</div>
                    <div className="text-xl font-bold">Ancient Oath of Hippocrates</div>
                    <div className="text-base">Ethical Foundation of Medicine</div>
                  </div>
                </div>
                <p className="text-amber-800 font-semibold italic text-lg">
                  "First, do no harm" - The timeless commitment to ethical healthcare
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {/* Introduction */}
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <p className="text-gray-700 text-xl leading-relaxed text-center">
                The <strong>Oathkeeper Scholarship</strong>, established by the Medical Education Guild (MEG), is a merit-based award designed to honor and support high school students who demonstrate unwavering commitment to becoming ethical and impactful healthcare professionals.
              </p>
            </div>

            {/* Eligibility Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <span className="text-3xl mr-3">✅</span>
                Eligibility Requirements
              </h2>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                <ul className="text-gray-700 space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    Current high school students or recent graduates intending to pursue a career in medicine or other healthcare professions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    Clear evidence of long-term motivation, character, and dedication to the healthcare field
                  </li>
                </ul>
              </div>
            </div>

            {/* Selection Process */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <span className="text-3xl mr-3">📋</span>
                Selection Process
              </h2>
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
                <p className="text-gray-700 mb-4 text-lg">
                  All candidates must complete a comprehensive multi-stage selection process organized by the Medical Education Guild:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">✍️</div>
                    <h3 className="font-semibold mb-2">Written Submission</h3>
                    <p className="text-sm text-gray-600">Motivation essay demonstrating your commitment to healthcare</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">🗣️</div>
                    <h3 className="font-semibold mb-2">Personal Interviews</h3>
                    <p className="text-sm text-gray-600">Assessment of values, commitment, and clarity of purpose</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl mb-2">🤔</div>
                    <h3 className="font-semibold mb-2">Reflective Activities</h3>
                    <p className="text-sm text-gray-600">Evaluation of ethical readiness and responsibility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarship Conditions */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <span className="text-3xl mr-3">📝</span>
                Scholarship Conditions
              </h2>
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-orange-800">Expectations</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Maintain active involvement in MEG programs
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Embody core values promoted by the Guild
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Mentor younger peers when possible
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-orange-800">Responsibilities</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Participate in community healthcare education
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Maintain academic integrity and ethical conduct
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        Stay committed to healthcare professionalism
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* The Oathkeeper Spirit */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <span className="text-3xl mr-3">💫</span>
                The Oathkeeper Spirit
              </h2>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8 border-2 border-yellow-200">
                <div className="text-center">
                  <p className="text-xl text-gray-700 mb-4 font-medium">
                    Awardees are expected to carry the spirit of the <strong>"Oathkeeper"</strong>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <span className="bg-yellow-200 px-4 py-2 rounded-full text-yellow-800 font-medium">Ethical</span>
                    <span className="bg-yellow-200 px-4 py-2 rounded-full text-yellow-800 font-medium">Reflective</span>
                    <span className="bg-yellow-200 px-4 py-2 rounded-full text-yellow-800 font-medium">Compassionate</span>
                    <span className="bg-yellow-200 px-4 py-2 rounded-full text-yellow-800 font-medium">Committed</span>
                  </div>
                  <p className="text-gray-600 text-lg italic">
                    Contributing to the MEG community and spreading the vision of healthcare as a lifelong civic and moral duty
                  </p>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Take the first step towards becoming an ethical healthcare professional and apply for the Oathkeeper Scholarship today. Join a community dedicated to transforming healthcare through education and ethical practice.
              </p>
              <button
                onClick={handleWhatsAppApplication}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto"
              >
                <span className="text-3xl mr-3">💬</span>
                Apply for Scholarship via WhatsApp
              </button>
              <p className="text-gray-500 text-sm mt-6">
                Click the button above to start your application process through WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTAsecton />
    </PageTransition>
  );
};

export default ScholarshipPage;
