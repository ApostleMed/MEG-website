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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive List of Medical Specialties Worldwide (2025)</h3>
        <p className="text-gray-600 mb-6">With Post-Nominal Qualifications - Primary Medical Specialties (Alphabetical)</p>

        <div className="grid gap-4">
          <div>
            <h4 className="font-medium text-gray-800">Addiction Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on prevention, evaluation, diagnosis, treatment, and recovery from substance use disorders and addiction-related medical complications.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FASAM (Fellow, American Society of Addiction Medicine), DipAddMed (Diploma in Addiction Medicine), MSc Addiction Studies, Certificate in Addiction Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Aerospace Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Deals with the health and safety of flight crews, astronauts, and space travelers; studies effects of flight and space environment on human physiology.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MPH (Master of Public Health), MSc Aviation Medicine, DipAvMed (Diploma in Aviation Medicine), FAAM (Fellow, Aerospace Medical Association)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Allergy and Immunology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnoses and treats immune system disorders including asthma, allergies, immunodeficiencies, and autoimmune diseases.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FAAAAI (Fellow, American Academy of Allergy, Asthma & Immunology), FRCP (Fellow, Royal College of Physicians), MSc Clinical Immunology, DipAllergy</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Anesthesiology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Administers anesthesia for surgeries, manages perioperative care, and oversees critical care medicine.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCA (Fellow, Royal College of Anaesthetists), DA (Diploma in Anaesthetics), MD Anesthesiology, FASA (Fellow, American Society of Anesthesiologists), DNB Anaesthesiology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Adult Cardiothoracic Anesthesiology (Fellowship), Critical Care Medicine (FCCM), Pain Medicine (FIPP - Fellow, International Pain Practice), Pediatric Anesthesiology (Fellowship), Sleep Medicine (DABSM), Neurocritical Care (Fellowship), Hospice and Palliative Medicine (ABHPM).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Behavioral Health and Wellness</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Integrative approach combining mental health, lifestyle medicine, and behavioral interventions for overall wellness.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Behavioral Health, PGDip Wellness Coaching, Certificate in Lifestyle Medicine, ACSM-CEP (Certified Exercise Physiologist)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Lifestyle Medicine (DipLifeMed), Integrative Psychiatry (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Blood Banking/Transfusion Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on collection, testing, processing, and transfusion of blood and blood products.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FCIBMS (Fellow, Chartered Institute of Biomedical Sciences), SBB (Specialist in Blood Banking), MT (Medical Technologist), MSc Transfusion Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Clinical Genetics and Genomics</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnoses genetic disorders, provides genetic counseling, and interprets genomic data for personalized medicine.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPCH (Fellow, Royal College of Paediatrics), PhD Genetics, MSc Genetic Counselling, CGC (Certified Genetic Counselor), FACMG (Fellow, American College of Medical Genetics)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Molecular Genetic Pathology (Fellowship), Precision Medicine (MSc Precision Medicine).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Clinical Informatics</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Applies information technology and data science to improve healthcare delivery, electronic health records, and clinical decision support.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Health Informatics, PhD Biomedical Informatics, FAMIA (Fellow, American Medical Informatics Association), CHPS (Certified in Healthcare Privacy & Security)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Health Data Analytics (MSc Data Science), Artificial Intelligence in Medicine (PhD AI/ML).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Colon and Rectal Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of diseases affecting the colon, rectum, and anus including cancer, inflammatory bowel disease, and functional disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS (Fellow, Royal College of Surgeons), FASCRS (Fellow, American Society of Colon & Rectal Surgeons), MS General Surgery, Fellowship in Colorectal Surgery</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Dermatology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnoses and treats disorders of skin, hair, nails, and mucous membranes including medical, surgical, and cosmetic conditions.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), AAD (American Academy of Dermatology), MD Dermatology, DNB Dermatology, MSc Dermatology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Dermatopathology (Fellowship, FRCPath), Pediatric Dermatology (Fellowship), Micrographic Dermatologic Surgery/Mohs Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Digital Health and Telemedicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Emerging field focusing on remote healthcare delivery, digital therapeutics, and technology-enabled care.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Digital Health, Certificate in Telehealth, PGDip Health Technology, MBA Healthcare Innovation</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Remote Patient Monitoring (Certificate), Digital Therapeutics (MSc Digital Medicine).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Emergency Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Provides immediate medical care for acute illnesses and injuries in emergency department settings.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FCEM (Fellow, College of Emergency Medicine), FACEM (Fellow, Australasian College for Emergency Medicine), MD Emergency Medicine, ABEM (American Board of Emergency Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Pediatric Emergency Medicine (Fellowship), Medical Toxicology (Fellowship, DABMT), Undersea and Hyperbaric Medicine (Fellowship), Sports Medicine (Fellowship), Critical Care Medicine (FCCM), Wilderness Medicine (Fellowship, DiMM).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Family Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Provides comprehensive, continuous healthcare for individuals and families across all ages, genders, and diseases.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MRCGP (Member, Royal College of General Practitioners), FRACGP (Fellow, Royal Australian College of General Practitioners), MD Family Medicine, ABFM (American Board of Family Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Geriatric Medicine (Fellowship, BGS), Adolescent Medicine (Fellowship), Sports Medicine (Fellowship), Rural Medicine (Certificate).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Forensic Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Application of medical knowledge to legal issues including death investigations, trauma analysis, and expert testimony.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPath (Fellow, Royal College of Pathologists), DMJ (Diploma in Medical Jurisprudence), MSc Forensic Medicine, FFFLM (Fellow, Faculty of Forensic & Legal Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Forensic Pathology (FRCPath), Clinical Forensic Medicine (MFFLM).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Global Health</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on health issues that transcend national boundaries, addressing health disparities and international health policy.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MPH (Master of Public Health), MSc Global Health, DrPH (Doctor of Public Health), Certificate in Global Health</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Humanitarian Medicine (MSc Humanitarian Action), Tropical Medicine (DTM&H - Diploma in Tropical Medicine & Hygiene).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Healthcare Administration and Management</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Leadership and management of healthcare organizations, health policy development, and healthcare economics.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MHA (Master of Health Administration), MBA Healthcare Management, FACHE (Fellow, American College of Healthcare Executives), MSc Health Economics</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Health Economics (PhD Health Economics), Quality Improvement (MSc Quality Improvement), Population Health Management (MPH).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Hospitalist Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on comprehensive care of hospitalized patients, care coordination, and hospital-based quality improvement.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FHM (Fellow, Society of Hospital Medicine), Internal Medicine Board Certification, Certificate in Hospital Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Pediatric Hospital Medicine (Fellowship), Surgical Hospitalist (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Infectious Diseases</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis and treatment of infections caused by bacteria, viruses, fungi, and parasites.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), FIDSA (Fellow, Infectious Diseases Society of America), MSc Infectious Diseases, DTM&H</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: HIV Medicine (Certificate), Transplant Infectious Diseases (Fellowship), Antimicrobial Stewardship (Certificate).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Internal Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Comprehensive medical care of adults, focusing on prevention, diagnosis, and treatment of diseases affecting internal organs.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), FACP (Fellow, American College of Physicians), MD Internal Medicine, ABIM (American Board of Internal Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Cardiology (FRCP, FACC), Endocrinology (Fellowship, FACE), Gastroenterology (Fellowship, FACG), Hematology (Fellowship, ASH), Nephrology (Fellowship, FASN), Oncology (Fellowship, FASCO), Pulmonology (Fellowship, FCCP), Rheumatology (Fellowship, ACR), Sleep Medicine (DABSM), Transplant Hepatology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Laboratory Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis of disease through examination of specimens from the human body including blood, urine, tissues, and other body fluids.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPath (Fellow, Royal College of Pathologists), FCAP (Fellow, College of American Pathologists), MSc Clinical Laboratory Sciences, MLT (Medical Laboratory Technologist)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Clinical Chemistry (Fellowship), Hematopathology (Fellowship), Medical Microbiology (FRCPath), Molecular Diagnostics (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Legal Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Interface between medicine and law, including medical malpractice, disability evaluation, and regulatory compliance.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: JD/MD (Juris Doctor/Doctor of Medicine), LLM Health Law, MSc Medical Law & Ethics, FCLM (Fellow, College of Legal Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Lifestyle Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Evidence-based practice focusing on lifestyle interventions including nutrition, physical activity, stress management, and behavioral change.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: DipLifeMed (Diploma in Lifestyle Medicine), ACLM (American College of Lifestyle Medicine), MSc Lifestyle Medicine, Certificate Lifestyle Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Culinary Medicine (Certificate), Exercise Medicine (MSc Exercise Medicine).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Medical Genetics and Genomics</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Clinical application of genetics in diagnosis, management, and counseling for inherited conditions.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FACMG (Fellow, American College of Medical Genetics), PhD Medical Genetics, MSc Genetic Counselling, CGC (Certified Genetic Counselor)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Molecular Genetic Pathology (Fellowship), Cancer Genetics (MSc Cancer Genetics), Reproductive Genetics (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Military Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Healthcare delivery in military settings, combat medicine, and veteran healthcare.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: Military Medical Officer qualification, MSc Military Medicine, Fellowship Military Medicine, Certificate Combat Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Combat Medicine (Certificate), Veteran Affairs Medicine (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Neurological Surgery (Neurosurgery)</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of disorders affecting the nervous system including brain, spinal cord, and peripheral nerves.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(Neuro) (Fellow, Royal College of Surgeons - Neurosurgery), FAANS (Fellow, American Association of Neurological Surgeons), MS Neurosurgery, MCh Neurosurgery</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Neurocritical Care (Fellowship), Stereotactic and Functional Neurosurgery (Fellowship), Pediatric Neurological Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Neurology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis and treatment of disorders affecting the nervous system including brain, spinal cord, nerves, and muscles.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), FAAN (Fellow, American Academy of Neurology), MD Neurology, DNB Neurology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Child Neurology (Fellowship), Neurocritical Care (Fellowship), Neuromuscular Medicine (Fellowship), Neurodevelopmental Disabilities (Fellowship), Epilepsy (Fellowship), Movement Disorders (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Nuclear Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Uses radioactive substances for diagnosis and treatment of diseases including imaging and therapeutic procedures.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), ABNM (American Board of Nuclear Medicine), MD Nuclear Medicine, MSc Nuclear Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Obstetrics and Gynecology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical and surgical care of the female reproductive system and management of pregnancy and childbirth.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCOG (Fellow, Royal College of Obstetricians and Gynaecologists), FACOG (Fellow, American College of Obstetricians and Gynecologists), MD OB/GYN, MS Obstetrics & Gynaecology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Gynecologic Oncology (Fellowship), Maternal-Fetal Medicine (Fellowship), Reproductive Endocrinology and Infertility (Fellowship), Female Pelvic Medicine and Reconstructive Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Occupational Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Prevention and treatment of work-related injuries and illnesses, workplace health promotion.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FFOM (Fellow, Faculty of Occupational Medicine), FACOEM (Fellow, American College of Occupational and Environmental Medicine), MSc Occupational Health, DOH (Diploma in Occupational Health)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Ophthalmology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical and surgical treatment of eye diseases and vision disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCOphth (Fellow, Royal College of Ophthalmologists), AAO (American Academy of Ophthalmology), MS Ophthalmology, DNB Ophthalmology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Cornea and External Diseases (Fellowship), Retinal Diseases (Fellowship), Glaucoma (Fellowship), Neuro-ophthalmology (Fellowship), Pediatric Ophthalmology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Orthopedic Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of musculoskeletal system including bones, joints, ligaments, tendons, and muscles.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(Orth) (Fellow, Royal College of Surgeons - Orthopaedics), FAAOS (Fellow, American Academy of Orthopaedic Surgeons), MS Orthopaedics, MCh Orthopaedics</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Orthopedic Sports Medicine (Fellowship), Hand Surgery (Fellowship), Spine Surgery (Fellowship), Joint Replacement Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Otolaryngology – Head and Neck Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical and surgical treatment of ear, nose, throat, head, and neck disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(ORL-HNS) (Fellow, Royal College of Surgeons - ENT), AAO-HNS (American Academy of Otolaryngology), MS ENT, DNB ENT</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Neurotology (Fellowship), Pediatric Otolaryngology (Fellowship), Facial Plastic and Reconstructive Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Pain Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Multidisciplinary approach to prevention, evaluation, treatment, and rehabilitation of painful disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FIPP (Fellow, International Association for the Study of Pain), FFPMRCA (Fellow, Faculty of Pain Medicine), Certificate in Pain Medicine, MSc Pain Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Interventional Pain Management (Fellowship), Addiction Medicine (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Palliative Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Specialized medical care focusing on relief of symptoms and improvement of quality of life for patients with serious illnesses.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MRCGP(Pall Med) (Member, Royal College of General Practitioners - Palliative Medicine), ABHPM (American Board of Hospice and Palliative Medicine), MSc Palliative Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Hospice and Palliative Medicine (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Pathology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis of disease through examination of tissues, organs, bodily fluids, and whole bodies.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPath (Fellow, Royal College of Pathologists), FCAP (Fellow, College of American Pathologists), MD Pathology, DNB Pathology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Anatomic Pathology (Fellowship), Clinical Pathology (Fellowship), Forensic Pathology (FRCPath), Hematopathology (Fellowship), Dermatopathology (Fellowship), Neuropathology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Pediatrics</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical care of infants, children, and adolescents from birth to young adulthood.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPCH (Fellow, Royal College of Paediatrics and Child Health), FAAP (Fellow, American Academy of Pediatrics), MD Pediatrics, DNB Pediatrics</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Neonatal-Perinatal Medicine (Fellowship), Pediatric Cardiology (Fellowship), Pediatric Critical Care Medicine (Fellowship), Pediatric Emergency Medicine (Fellowship), Pediatric Endocrinology (Fellowship), Pediatric Gastroenterology (Fellowship), Pediatric Hematology-Oncology (Fellowship), Pediatric Infectious Diseases (Fellowship), Pediatric Nephrology (Fellowship), Pediatric Pulmonology (Fellowship), Pediatric Rheumatology (Fellowship), Developmental-Behavioral Pediatrics (Fellowship), Child Abuse Pediatrics (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Physical Medicine and Rehabilitation (Physiatry)</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Restoration of function and quality of life for patients with physical impairments or disabilities.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), FAAPMR (Fellow, American Academy of Physical Medicine and Rehabilitation), MD PM&R, DNB PMR</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Spinal Cord Injury Medicine (Fellowship), Sports Medicine (Fellowship), Pain Medicine (Fellowship), Pediatric Rehabilitation Medicine (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Plastic Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Restoration, reconstruction, or alteration of the human body including reconstructive and cosmetic procedures.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(Plast) (Fellow, Royal College of Surgeons - Plastic Surgery), FACS (Fellow, American College of Surgeons), MCh Plastic Surgery, ISAPS (International Society of Aesthetic Plastic Surgery)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Hand Surgery (Fellowship), Craniofacial Surgery (Fellowship), Burn Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Precision Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Emerging field that tailors medical treatment to individual characteristics of each patient based on genetic, environmental, and lifestyle factors.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Precision Medicine, PhD Genomics, Certificate in Precision Medicine, Fellowship in Precision Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Pharmacogenomics (PhD Pharmacogenomics), Personalized Oncology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Preventive Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on health promotion and disease prevention at individual and population levels.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MPH (Master of Public Health), FFPH (Fellow, Faculty of Public Health), FAAFP (Fellow, American Academy of Family Physicians), DrPH (Doctor of Public Health)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Public Health and General Preventive Medicine (MPH), Occupational Medicine (FFOM), Medical Toxicology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Psychiatry</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis, treatment, and prevention of mental health disorders and emotional disturbances.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCPsych (Fellow, Royal College of Psychiatrists), FAPA (Fellow, American Psychiatric Association), MD Psychiatry, DNB Psychiatry</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Child and Adolescent Psychiatry (Fellowship), Addiction Psychiatry (Fellowship), Geriatric Psychiatry (Fellowship), Forensic Psychiatry (Fellowship), Consultation-Liaison Psychiatry (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Public Health Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Population-based approach to health promotion, disease prevention, and health policy development.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MPH (Master of Public Health), FFPH (Fellow, Faculty of Public Health), DrPH (Doctor of Public Health), FACE (Fellow, American College of Epidemiology)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Epidemiology (PhD Epidemiology), Health Policy (MPP - Master of Public Policy), Global Health (MSc Global Health), Environmental Health (MSc Environmental Health).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Radiation Oncology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Treatment of cancer using ionizing radiation therapy.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCR (Fellow, Royal College of Radiologists), FASTRO (Fellow, American Society for Radiation Oncology), MD Radiation Oncology, DNB Radiotherapy</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Radiology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical imaging to diagnose and treat diseases using various imaging modalities.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCR (Fellow, Royal College of Radiologists), ABR (American Board of Radiology), MD Radiology, DNB Radiology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Diagnostic Radiology (Fellowship), Interventional Radiology (Fellowship), Neuroradiology (Fellowship), Pediatric Radiology (Fellowship), Nuclear Radiology (Fellowship), Breast Imaging (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Rehabilitation Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Comprehensive care for patients with functional impairments and disabilities.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCP (Fellow, Royal College of Physicians), Certificate in Rehabilitation Medicine, MSc Rehabilitation Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Spinal Cord Injury Medicine (Fellowship), Sports Medicine (Fellowship), Pain Medicine (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Reproductive Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis and treatment of reproductive system disorders and infertility.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCOG (Fellow, Royal College of Obstetricians and Gynaecologists), FACOG (Fellow, American College of Obstetricians and Gynecologists), MSc Reproductive Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Reproductive Endocrinology (Fellowship), Andrology (Fellowship), Assisted Reproductive Technology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Sleep Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Diagnosis and treatment of sleep disorders and sleep-related breathing disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: DABSM (Diplomate, American Board of Sleep Medicine), ABSM (American Board of Sleep Medicine), MSc Sleep Medicine, Fellowship in Sleep Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Sports Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Treatment and prevention of injuries related to sports and exercise, performance optimization.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FSEM (Fellow, Sport and Exercise Medicine), ACSM (American College of Sports Medicine), MSc Sports Medicine, Certificate in Sports Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Surgery (General)</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of abdominal organs, breast, skin, soft tissues, and trauma.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS (Fellow, Royal College of Surgeons), FACS (Fellow, American College of Surgeons), MS General Surgery, MCh Surgery</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Surgical Critical Care (Fellowship), Pediatric Surgery (Fellowship), Vascular Surgery (Fellowship), Thoracic Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Thoracic Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of diseases affecting organs inside the thorax including heart, lungs, and esophagus.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(CTh) (Fellow, Royal College of Surgeons - Cardiothoracic), FACS (Fellow, American College of Surgeons), MCh Cardiothoracic Surgery</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Congenital Cardiac Surgery (Fellowship), Adult Cardiothoracic Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Transplant Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical and surgical care related to organ transplantation including donor evaluation and post-transplant care.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FAST (Fellow, American Society of Transplantation), Certificate in Transplantation, Fellowship in Transplant Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Transplant Surgery (Fellowship), Transplant Hepatology (Fellowship), Transplant Nephrology (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Travel Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Prevention and treatment of health problems in international travelers.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: CTH (Certificate in Travel Health), DTM&H (Diploma in Tropical Medicine & Hygiene), FFTM RCPS(Glas) (Fellow, Faculty of Travel Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Undersea and Hyperbaric Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Prevention and treatment of diving-related disorders and medical conditions treated with hyperbaric oxygen.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FUHM (Fellow, Undersea and Hyperbaric Medical Society), Certificate in Hyperbaric Medicine, ECHM (European Committee for Hyperbaric Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Urgent Care Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Immediate medical care for conditions that are not life-threatening but require prompt attention.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FAAFP (Fellow, American Academy of Family Physicians), Certificate in Urgent Care Medicine, AAUCM (American Academy of Urgent Care Medicine)</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Urology</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical and surgical treatment of urinary tract and male reproductive system disorders.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(Urol) (Fellow, Royal College of Surgeons - Urology), FACS (Fellow, American College of Surgeons), MCh Urology, DNB Urology</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: Pediatric Urology (Fellowship), Urologic Oncology (Fellowship), Female Pelvic Medicine and Reconstructive Surgery (Fellowship).</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Vascular Surgery</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Surgical treatment of diseases affecting blood vessels including arteries, veins, and lymphatic system.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: FRCS(Vasc) (Fellow, Royal College of Surgeons - Vascular), FACS (Fellow, American College of Surgeons), MCh Vascular Surgery</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Wilderness Medicine</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Medical care in remote, austere, or extreme environments where conventional medical facilities are not available.</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: DiMM (Diploma in Mountain Medicine), FAWM (Fellow, Academy of Wilderness Medicine), Certificate in Wilderness Medicine</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: None recognized.</p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Emerging and Interdisciplinary Specialties</h4>
          <div className="grid gap-4">
            <div>
              <h5 className="font-medium text-gray-800">Artificial Intelligence in Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Application of AI and machine learning technologies to healthcare delivery, diagnosis, and treatment.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc AI in Healthcare, PhD Machine Learning, Certificate in Medical AI, FAMIA (Fellow, American Medical Informatics Association)</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Bioethics and Medical Ethics</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Examination of ethical issues in medicine, healthcare policy, and biomedical research.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MA Bioethics, PhD Medical Ethics, Certificate in Clinical Ethics, ASBH (American Society for Bioethics and Humanities)</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Climate Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Addresses health impacts of climate change and environmental degradation.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Climate Change and Health, Certificate in Planetary Health, MPH Environmental Health</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Culinary Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Integration of nutrition science and culinary arts in medical practice and patient education.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: Certificate in Culinary Medicine, MSc Nutrition, RD (Registered Dietitian), Culinary Medicine Specialist</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Digital Therapeutics</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Evidence-based therapeutic interventions delivered through digital platforms and applications.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Digital Health, Certificate in Digital Therapeutics, PhD Health Technology Assessment</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Health Equity Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on addressing healthcare disparities and promoting equitable access to healthcare.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MPH Health Equity, MSc Social Medicine, Certificate in Health Disparities, DrPH Health Equity</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Integrative Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Combines conventional medicine with evidence-based complementary and alternative therapies.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: Fellowship in Integrative Medicine, MSc Integrative Medicine, ABOIM (American Board of Integrative Medicine), MD(H) - Doctor of Medicine (Homeopathy)</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Medical Education</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Teaching, curriculum development, and educational research in medical training.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MMEd (Master of Medical Education), PhD Medical Education, FHEA (Fellow, Higher Education Academy), Certificate in Medical Education</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Medical Simulation</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Use of simulation technology for medical education, training, and assessment.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Medical Simulation, CHSE (Certified Healthcare Simulation Educator), Fellowship in Medical Simulation</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">One Health Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Collaborative approach connecting human, animal, and environmental health.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc One Health, Certificate in One Health, DVM/MD (Doctor of Veterinary Medicine/Doctor of Medicine)</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Planetary Health</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Focuses on the health of human civilization and natural systems on which it depends.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Planetary Health, Certificate in Planetary Health, MPH Environmental Health, PhD Planetary Health</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Quality Improvement and Patient Safety</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Systematic approaches to improving healthcare delivery and reducing medical errors.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Healthcare Quality, CPHQ (Certified Professional in Healthcare Quality), Lean Six Sigma Black Belt, IHI Certificate</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Refugee and Immigrant Health</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Specialized care for refugee, immigrant, and displaced populations.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: Certificate in Refugee Health, MSc Migration and Health, Fellowship in Global Health</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Telehealth and Remote Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Healthcare delivery using telecommunications and digital technologies.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: Certificate in Telehealth, MSc Digital Health, CHWC (Certified Health and Wellness Coach), CTH (Certified Telehealth)</p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Translational Medicine</h5>
              <p className="text-gray-600 text-sm"><strong>Specialty</strong>: Bridges basic science research and clinical practice to accelerate medical discoveries.</p>
              <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: MSc Translational Medicine, PhD Translational Research, Certificate in Clinical Research, ACRP (Association of Clinical Research Professionals)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional International Medical Qualifications by Region</h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">United Kingdom & Commonwealth</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>MRCP</strong> - Member, Royal College of Physicians</div>
              <div><strong>MRCGP</strong> - Member, Royal College of General Practitioners</div>
              <div><strong>MRCS</strong> - Member, Royal College of Surgeons</div>
              <div><strong>FRCR</strong> - Fellow, Royal College of Radiologists</div>
              <div><strong>FRCPath</strong> - Fellow, Royal College of Pathologists</div>
              <div><strong>FRCOG</strong> - Fellow, Royal College of Obstetricians and Gynaecologists</div>
              <div><strong>FRCA</strong> - Fellow, Royal College of Anaesthetists</div>
              <div><strong>FRCPCH</strong> - Fellow, Royal College of Paediatrics and Child Health</div>
              <div><strong>FRCPsych</strong> - Fellow, Royal College of Psychiatrists</div>
              <div><strong>FFPH</strong> - Fellow, Faculty of Public Health</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">United States</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>ABMS Board Certifications</strong> - American Board of Medical Specialties</div>
              <div><strong>FACP</strong> - Fellow, American College of Physicians</div>
              <div><strong>FACS</strong> - Fellow, American College of Surgeons</div>
              <div><strong>FACOG</strong> - Fellow, American College of Obstetricians and Gynecologists</div>
              <div><strong>FAAP</strong> - Fellow, American Academy of Pediatrics</div>
              <div><strong>FAPA</strong> - Fellow, American Psychiatric Association</div>
              <div><strong>FAAFP</strong> - Fellow, American Academy of Family Physicians</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">European Union</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>UEMS Diplomas</strong> - Union Européenne des Médecins Spécialistes</div>
              <div><strong>EBMS Certifications</strong> - European Board of Medical Specialists</div>
              <div><strong>CESMA</strong> - Certificat Européen de Spécialiste en Médecine d'Addictologie</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">India</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>MS</strong> - Master of Surgery</div>
              <div><strong>MD</strong> - Doctor of Medicine</div>
              <div><strong>MCh</strong> - Magister Chirurgiae (Master of Surgery - Superspecialty)</div>
              <div><strong>DM</strong> - Doctorate of Medicine (Superspecialty)</div>
              <div><strong>DNB</strong> - Diplomate of National Board</div>
              <div><strong>FICP</strong> - Fellow, Indian College of Physicians</div>
              <div><strong>FICS</strong> - Fellow, International College of Surgeons</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Australia & New Zealand</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>FRACGP</strong> - Fellow, Royal Australian College of General Practitioners</div>
              <div><strong>FRACP</strong> - Fellow, Royal Australasian College of Physicians</div>
              <div><strong>FRACS</strong> - Fellow, Royal Australasian College of Surgeons</div>
              <div><strong>FANZCA</strong> - Fellow, Australian and New Zealand College of Anaesthetists</div>
              <div><strong>FRANZCOG</strong> - Fellow, Royal Australian and New Zealand College of Obstetricians and Gynaecologists</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Canada</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>FRCPC</strong> - Fellow, Royal College of Physicians of Canada</div>
              <div><strong>FRCSC</strong> - Fellow, Royal College of Surgeons of Canada</div>
              <div><strong>CCFP</strong> - Certificate of the College of Family Physicians of Canada</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Germany</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>Facharzt</strong> - Specialist Doctor (various specialties)</div>
              <div><strong>Oberarzt</strong> - Senior Physician</div>
              <div><strong>Chefarzt</strong> - Chief Physician</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">France</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>DES</strong> - Diplôme d'Études Spécialisées (Diploma of Specialized Studies)</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Japan</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>Senmon-i</strong> - Board Certified Specialist</div>
              <div><strong>JSA</strong> - Japan Society of Anesthesiologists Certification</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Research and Academic Qualifications</h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Doctoral Degrees</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>PhD</strong> - Doctor of Philosophy (Research Doctorate)</div>
              <div><strong>MD-PhD</strong> - Combined Medical Doctor and Research Doctorate</div>
              <div><strong>ScD</strong> - Doctor of Science</div>
              <div><strong>DSc</strong> - Doctor of Science</div>
              <div><strong>DrPH</strong> - Doctor of Public Health</div>
              <div><strong>EdD</strong> - Doctor of Education (Medical Education)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Management and Leadership</h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Advanced Degrees</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>MBA</strong> - Master of Business Administration</div>
              <div><strong>MHA</strong> - Master of Health Administration</div>
              <div><strong>MPH</strong> - Master of Public Health</div>
              <div><strong>MSc</strong> - Master of Science (various specializations)</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Executive Certifications</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>FACHE</strong> - Fellow, American College of Healthcare Executives</div>
              <div><strong>LFACHE</strong> - Life Fellow, American College of Healthcare Executives</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality and Safety Certifications</h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Quality Management</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>CPHQ</strong> - Certified Professional in Healthcare Quality</div>
              <div><strong>CPPS</strong> - Certified Professional in Patient Safety</div>
              <div><strong>CQA</strong> - Certified Quality Auditor</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Process Improvement</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>Lean Six Sigma</strong> - Green Belt, Black Belt, Master Black Belt</div>
              <div><strong>CCRN</strong> - Critical Care Registered Nurse (for physicians working in critical care)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Technology and Innovation</h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Healthcare Information Systems</h4>
            <div className="grid gap-2 text-sm">
              <div><strong>HIMSS Certifications</strong> - Healthcare Information and Management Systems Society</div>
              <div><strong>CAHIMS</strong> - Certified Associate in Healthcare Information and Management Systems</div>
              <div><strong>CHPS</strong> - Certified in Healthcare Privacy and Security</div>
              <div><strong>CISSP</strong> - Certified Information Systems Security Professional (Healthcare)</div>
            </div>
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
                <td className="border border-gray-300 p-3 National Council Licensure Examination assessing entry-level nursing competency.</td>
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