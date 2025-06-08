
import React from 'react';
import PageTransition from '../components/PageTransition';

const HighSchoolPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* High School for Healthcare Aspirants Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">High School for Healthcare Aspirants</h1>
            <p className="text-gray-600 mb-6 text-lg text-center">
              Inspiring the Next Generation of Healthcare Leaders
            </p>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transforming Futures Through Healthcare Education</h2>
              <p className="text-gray-600 mb-4">
                The <strong>High School for Health Aspirants</strong> is a dynamic three-year program designed to inspire high school students to pursue rewarding careers in healthcare. Rooted in the innovative philosophy of Meducism, developed by experts at the Medical Education Guild, it equips students with the knowledge, skills, and ethical mindset to excel in medical schools worldwide and become compassionate leaders who transform communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is Meducism?</h3>
                <p className="text-gray-600 mb-3">
                  Meducism is a groundbreaking philosophy that sees well-being as the key to happiness. It encourages students to embrace healthcare knowledge, practice self-care, and act with compassion to improve their lives and those around them.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Healthcare Proficiency</strong>: Mastering essential medical knowledge</li>
                  <li><strong>Medical Education Capability</strong>: Empowering others through health education</li>
                  <li><strong>Ethical Self-Respect</strong>: Acting with integrity and professionalism</li>
                  <li><strong>Self-Care</strong>: Prioritizing personal well-being to serve others</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Three Years to Success</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <strong className="text-gray-800">Year 1: Foundation</strong>
                    <p className="text-gray-600 text-sm">Learn basic medical concepts, practice self-care, and engage in community health projects.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <strong className="text-gray-800">Year 2: Intermediate</strong>
                    <p className="text-gray-600 text-sm">Deepen scientific knowledge, explore medical ethics, and start preparing for medical school applications.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <strong className="text-gray-800">Year 3: Advanced</strong>
                    <p className="text-gray-600 text-sm">Master entrance exam strategies, gain hands-on experience through internships, and refine application skills.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Program?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-600 text-xl">💡</div>
                  <p className="text-gray-600">Spark early passion for healthcare careers</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-600 text-xl">🎓</div>
                  <p className="text-gray-600">Prepare thoroughly for medical school success</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-600 text-xl">🤝</div>
                  <p className="text-gray-600">Develop ethical and professional values</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-600 text-xl">🌍</div>
                  <p className="text-gray-600">Ready students for global healthcare programs</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How Your School Can Get Started</h3>
              <p className="text-gray-600">
                Integrating the program is simple! It enhances existing science and health classes, career counseling, and extracurricular activities. Partner with medical educators and local hospitals to provide mentorship, guest lectures, and internships, ensuring an accessible and sustainable initiative for all students.
              </p>
            </div>

            <div className="text-center bg-yellow-100 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Join the Healthcare Revolution</h3>
              <p className="text-gray-600 mb-4">
                Empower your students to become ethical, inspiring healthcare professionals who transform communities.
              </p>
              <a 
                href="https://api.whatsapp.com/message/3HRH775DRT42A1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HighSchoolPage;
