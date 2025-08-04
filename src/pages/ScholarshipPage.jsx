
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">📜 Oathkeeper Scholarship</h1>
              <p className="text-xl text-gray-600">
                Honoring the Next Generation of Ethical Healthcare Professionals
              </p>
            </div>

            {/* Hero Image Section */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-lg p-8 shadow-md">
                <div className="text-center">
                  {/* Placeholder for ancient doctor oath image */}
                  <div className="w-80 h-60 mx-auto bg-gradient-to-br from-amber-200 to-yellow-100 rounded-lg flex items-center justify-center mb-4 shadow-inner">
                    <div className="text-center text-amber-800">
                      <div className="text-6xl mb-2">⚕️</div>
                      <div className="text-lg font-semibold">Ancient Oath of Hippocrates</div>
                      <div className="text-sm">Ethical Foundation of Medicine</div>
                    </div>
                  </div>
                  <p className="text-amber-800 font-medium italic">
                    "First, do no harm" - The timeless commitment to ethical healthcare
                  </p>
                </div>
              </div>
            </div>

            {/* Scholarship Content */}
            <div className="prose max-w-none">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The <strong>Oathkeeper Scholarship</strong>, established by the Medical Education Guild (MEG), is a merit-based award designed to honor and support high school students who demonstrate unwavering commitment to becoming ethical and impactful healthcare professionals.
                </p>
              </div>

              {/* Eligibility Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✅</span>
                  1. Eligibility
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Applicants must be current high school students or recent graduates intending to pursue a career in medicine or other healthcare professions.</li>
                  <li>Applicants must show clear evidence of long-term motivation, character, and dedication to the healthcare field.</li>
                </ul>
              </div>

              {/* Selection Process */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📋</span>
                  2. Selection Process
                </h2>
                <p className="text-gray-700 mb-3">
                  All candidates must complete a multi-stage selection process organized by the Medical Education Guild, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>A written motivation submission or essay.</li>
                  <li>A series of personal interviews assessing values, commitment, and clarity of purpose.</li>
                  <li>Participation in reflective activities and/or assessments designed to evaluate ethical readiness and responsibility.</li>
                </ul>
              </div>

              {/* Awarding Institutions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏛️</span>
                  3. Awarding Institutions
                </h2>
                <p className="text-gray-700 mb-3">
                  Scholarships will be awarded by partner institutions affiliated with MEG:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>IMEC</strong> (International Medical Education Consultancy)</li>
                  <li><strong>Veritas Aescula Institute</strong></li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  The scholarship award amount, coverage, and terms may vary depending on the partner institution's offerings and the student's program of interest.
                </p>
              </div>

              {/* Scholarship Conditions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📝</span>
                  4. Scholarship Conditions
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Scholarship recipients are expected to maintain active involvement in MEG programs and embody the core values promoted by the Guild.</li>
                  <li>Recipients may be asked to mentor younger peers or participate in community-driven healthcare education activities.</li>
                  <li>The scholarship may be revoked in cases of academic dishonesty, misconduct, or deviation from the core mission of pursuing healthcare professionalism.</li>
                </ul>
              </div>

              {/* Non-Monetary Expectations */}
              <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💫</span>
                  5. Non-Monetary Expectations
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Awardees are expected to carry the spirit of the "Oathkeeper" — to be ethical, reflective, compassionate, and committed in their medical journey.</li>
                  <li>Recipients are encouraged to contribute to the MEG community and continue spreading the vision of healthcare as a lifelong civic and moral duty.</li>
                </ul>
              </div>

              {/* Application Button */}
              <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards becoming an ethical healthcare professional and apply for the Oathkeeper Scholarship today.
                </p>
                <button
                  onClick={handleWhatsAppApplication}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto"
                >
                  <span className="text-2xl mr-2">💬</span>
                  Apply for Scholarship via WhatsApp
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  Click the button above to start your application process through WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTAsecton />
    </PageTransition>
  );
};

export default ScholarshipPage;
