import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('medical');

  const MedicalResources = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">World Directory of Medical Schools (WDOMS)</h3>
        <p className="text-gray-600 mb-4">
          The <a href="https://www.wdoms.org/" className="text-blue-600 hover:underline">World Directory of Medical Schools (WDOMS)</a> is a comprehensive directory of medical schools worldwide, recognized by the World Health Organization (WHO). Being listed in WDOMS is often a prerequisite for eligibility in many countries' licensing exams.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Country-Specific Requirements</h3>
        <p className="text-sm text-gray-500 mb-6"><strong>Note</strong>: The following information is accurate as of June 2025. For the most up-to-date requirements, please check the respective verification links.</p>

        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">USA (USMLE)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS. For ECFMG Certification, the school must have an ECFMG Sponsor Note in WDOMS.</p>
            <p className="text-gray-600 mb-2"><strong>Verification</strong>: <a href="https://www.ecfmg.org/certification-requirements-2025.html" className="text-blue-600 hover:underline">ECFMG Certification Requirements</a></p>
            <p className="text-gray-600"><strong>Note</strong>: As of 2025, WFME accreditation is not mandatory for ECFMG eligibility.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Canada (MCCQE)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS with a Canada Sponsor Note.</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://mcc.ca/examinations/acceptable-medical-schools/" className="text-blue-600 hover:underline">Medical Council of Canada - Acceptable Medical Schools</a></p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">UK (PLAB/UKMLA)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS, and the qualification must be accepted by the General Medical Council (GMC).</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.gmc-uk.org/registration-and-licensing/join-the-register/before-you-apply/acceptable-overseas-qualifications" className="text-blue-600 hover:underline">GMC - Acceptable Overseas Qualifications</a></p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Italy (Esame di Stato)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The medical school must be recognized by the Italian Ministry of Education, University, and Research (MIUR). For international graduates, the school must be listed in WDOMS, and the degree must be recognized by Italian authorities.</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.salute.gov.it/portale/temi/p2_6.jsp?lingua=italiano&id=1357&area=professioniSanitarie&menu=esami" className="text-blue-600 hover:underline">Italian Ministry of Health - State Exam</a></p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">China (NMLE)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The medical school must be recognized by the Chinese Ministry of Education. For international graduates, the school must be listed in WDOMS, and the degree must be evaluated by the China Academic Degrees and Graduate Education Development Center (CDGDC).</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.cdgdc.edu.cn/" className="text-blue-600 hover:underline">China Academic Degrees and Graduate Education</a></p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Medical Specialties and Subspecialties</h3>
        <div className="grid gap-4">
          <div>
            <h4 className="font-medium text-gray-800">Internal Medicine</h4>
            <p className="text-gray-600 text-sm">Manages complex adult diseases (e.g., diabetes, heart disease).</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Cardiology, Oncology, Endocrinology, Gastroenterology, Nephrology, Pulmonology, Rheumatology.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Surgery</h4>
            <p className="text-gray-600 text-sm">General Surgery (abdominal, breast, trauma surgeries), Vascular Surgery (blood vessel disorders).</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Surgical Critical Care, Pediatric Surgery.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Pediatrics</h4>
            <p className="text-gray-600 text-sm">Provides medical care for infants, children, and adolescents.</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Neonatal-Perinatal Medicine, Pediatric Cardiology, Pediatric Oncology.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Eligibility Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3 text-left">Exam</th>
                <th className="border border-gray-300 p-3 text-left">Country</th>
                <th className="border border-gray-300 p-3 text-left">Key Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">USMLE</td>
                <td className="border border-gray-300 p-3">USA</td>
                <td className="border border-gray-300 p-3">School in WDOMS with ECFMG Sponsor Note</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">MCCQE</td>
                <td className="border border-gray-300 p-3">Canada</td>
                <td className="border border-gray-300 p-3">School in WDOMS with Canada Sponsor Note</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">PLAB/UKMLA</td>
                <td className="border border-gray-300 p-3">UK</td>
                <td className="border border-gray-300 p-3">School in WDOMS and GMC approval</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const NursingResources = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Nursing Specialties and Subspecialties</h3>
        <p className="text-gray-600 mb-6">
          This section provides an overview of key nursing specialties and subspecialties, detailing their roles, responsibilities, and certification requirements. Information is accurate as of June 2025; consult relevant certification boards for updates.
        </p>

        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Registered Nurse (RN)</h4>
            <p className="text-gray-600 mb-2"><strong>Role</strong>: Provides direct patient care, administers medications, and collaborates on care plans in hospitals, clinics, and long-term care facilities.</p>
            <p className="text-gray-600 mb-2"><strong>Education & Certification</strong>: Requires an Associate Degree in Nursing (ADN) or Bachelor of Science in Nursing (BSN) and passing the NCLEX-RN exam.</p>
            <p className="text-gray-600"><strong>Career Outlook</strong>: Employment expected to grow 6% from 2020-2030, per the U.S. Bureau of Labor Statistics.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Nurse Practitioner (NP)</h4>
            <p className="text-gray-600 mb-2"><strong>Role</strong>: Diagnoses and treats illnesses, prescribes medications, and provides primary or specialized care, often independently.</p>
            <p className="text-gray-600 mb-2"><strong>Subspecialties</strong>: Family NP, Pediatric NP, Adult-Gerontology NP, Psychiatric-Mental Health NP, Women's Health NP.</p>
            <p className="text-gray-600"><strong>Career Outlook</strong>: Projected 45% growth from 2020-2030, driven by demand for primary care providers.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Certified Registered Nurse Anesthetist (CRNA)</h4>
            <p className="text-gray-600 mb-2"><strong>Role</strong>: Administers anesthesia, monitors patients during procedures, and manages post-anesthesia recovery.</p>
            <p className="text-gray-600"><strong>Education & Certification</strong>: Requires a DNP or MSN in nurse anesthesia and certification from the NBCRNA.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Nursing Licensing Exams by Country</h3>
        <p className="text-gray-600 mb-6">
          This section outlines the nursing licensing exams required to practice as a nurse in various countries. Information is accurate as of June 2025; verify with official regulatory bodies for updates.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3 text-left">Country</th>
                <th className="border border-gray-300 p-3 text-left">Exam Name</th>
                <th className="border border-gray-300 p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">USA</td>
                <td className="border border-gray-300 p-3">NCLEX-RN (for RNs), NCLEX-PN (for LPNs/VNs)</td>
                <td className="border border-gray-300 p-3">National Council Licensure Examination assessing entry-level nursing competency.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">UK</td>
                <td className="border border-gray-300 p-3">NMC Test of Competence (ToC)</td>
                <td className="border border-gray-300 p-3">For internationally educated nurses, includes Computer-Based Test (CBT) and OSCE.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Australia</td>
                <td className="border border-gray-300 p-3">NCLEX-RN, OSCE</td>
                <td className="border border-gray-300 p-3">NCLEX-RN assesses nursing knowledge; OSCE evaluates clinical skills.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Canada</td>
                <td className="border border-gray-300 p-3">NCLEX-RN (for RNs), NCLEX-PN (for RPNs)</td>
                <td className="border border-gray-300 p-3">Same as in the USA, administered by provincial regulatory bodies.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PharmacyResources = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">World Directory of Medical Schools (WDOMS) and Pharmacy Education</h3>
        <p className="text-gray-600">
          The <a href="https://www.wdoms.org/" className="text-blue-600 hover:underline">World Directory of Medical Schools (WDOMS)</a> includes some pharmacy programs, but pharmacy education is primarily regulated by national bodies such as the Pharmacy Council of India (PCI), Accreditation Council for Pharmacy Education (ACPE), or equivalent. For international practice, a B.Pharm or Pharm.D degree must be recognized by the respective national pharmacy board, often requiring additional exams or certifications.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Country-Specific Licensing Requirements</h3>
        <p className="text-sm text-gray-500 mb-6"><strong>Note</strong>: The following information is accurate as of June 2025. For the most up-to-date requirements, please check the respective verification links.</p>

        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">USA (NAPLEX)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: Foreign-educated B.Pharm or Pharm.D graduates must obtain Foreign Pharmacy Graduate Examination Committee (FPGEC) Certification from NABP, which requires a 5-year pharmacy degree, TOEFL iBT, and passing the FPGEE.</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://nabp.pharmacy/programs/foreign-pharmacy/" className="text-blue-600 hover:underline">NABP FPGEC Certification</a></p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Canada (PEBC Qualifying Exam)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: International graduates must pass the PEBC Evaluating Examination, followed by the PEBC Qualifying Examination. A one-year internship is required.</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://pebc.ca/" className="text-blue-600 hover:underline">Pharmacy Examining Board of Canada</a></p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">UK (OSPAP)</h4>
            <p className="text-gray-600 mb-2"><strong>Requirement</strong>: International graduates must complete a one-year Overseas Pharmacists' Assessment Programme (OSPAP), followed by 52 weeks of preregistration training.</p>
            <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.pharmacyregulation.org/registration/registering-pharmacist/overseas-non-eea-pharmacists" className="text-blue-600 hover:underline">GPhC - Overseas Pharmacists</a></p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Pharmacy Specializations and Advanced Training</h3>
        <div className="grid gap-4">
          <div>
            <h4 className="font-medium text-gray-800">Pharmaceutics</h4>
            <p className="text-gray-600 text-sm">Focuses on drug formulation, delivery systems, and manufacturing processes. Advanced training includes M.Pharm in Pharmaceutics or Ph.D.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Pharmacology</h4>
            <p className="text-gray-600 text-sm">Studies drug effects, mechanisms, and therapeutic applications. Advanced training includes M.Pharm in Pharmacology or Ph.D.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Clinical Pharmacy</h4>
            <p className="text-gray-600 text-sm">Focuses on patient care and medication therapy management in clinical settings. Advanced training includes Pharm.D or BPS certifications.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Eligibility Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3 text-left">Exam</th>
                <th className="border border-gray-300 p-3 text-left">Country</th>
                <th className="border border-gray-300 p-3 text-left">Key Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">NAPLEX</td>
                <td className="border border-gray-300 p-3">USA</td>
                <td className="border border-gray-300 p-3">FPGEC Certification, 5-year degree, TOEFL iBT, FPGEE</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">PEBC Qualifying Exam</td>
                <td className="border border-gray-300 p-3">Canada</td>
                <td className="border border-gray-300 p-3">CCAPP-recognized degree, Evaluating Exam, internship</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">OSPAP</td>
                <td className="border border-gray-300 p-3">UK</td>
                <td className="border border-gray-300 p-3">GPhC-recognized degree, OSPAP course, training</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Resources</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources for healthcare professionals and students across different disciplines.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('medical')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'medical'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Medical Students & Graduates
              </button>
              <button
                onClick={() => setActiveTab('nursing')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'nursing'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Nursing Students & Graduates
              </button>
              <button
                onClick={() => setActiveTab('pharmacy')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'pharmacy'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Pharmacists
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'medical' && <MedicalResources />}
            {activeTab === 'nursing' && <NursingResources />}
            {activeTab === 'pharmacy' && <PharmacyResources />}
          </div>
        </div>
      </div>

      
    </PageTransition>
  );
};

export default ResourcesPage;