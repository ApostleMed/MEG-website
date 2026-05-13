import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTAsecton from '../components/Home/CTAsecton';

// ─── Career Data ─────────────────────────────────────────────────────────────

const careers = [
  // ── Clinical Healthcare ──
  {
    id: 'gp',
    title: 'Doctor (General Practitioner)',
    sector: 'Clinical',
    tagline: 'The first port of call for patients across every stage of life',
    subjects: ['Biology', 'Chemistry', 'Psychology'],
    skills: ['Clinical diagnosis', 'Patient communication', 'Chronic disease management', 'Preventive care'],
    whatYouDo: 'General Practitioners assess, diagnose, and treat a vast spectrum of health conditions. You manage long-term illnesses such as diabetes and hypertension, refer patients to specialists, prescribe medications, and provide health screenings. You are often the continuity in a patient\'s healthcare journey, building relationships across years.',
    pathway: 'Undergraduate Medicine (5–6 years) → Foundation Programme (2 years) → GP Specialty Training (3 years) → MRCGP Examination → GP Registration',
    whereYouWork: 'GP surgeries, community health centres, urgent care centres, rural clinics, and private practices',
    healthcareLink: null,
  },
  {
    id: 'surgeon',
    title: 'Surgeon',
    sector: 'Clinical',
    tagline: 'Operating at the intersection of skill, science, and split-second judgement',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Anatomy'],
    skills: ['Surgical technique', 'Anatomical knowledge', 'Crisis management', 'Team coordination'],
    whatYouDo: 'Surgeons perform operative procedures to treat injuries, diseases, and deformities. Depending on specialisation — from general to cardiothoracic, orthopaedic, or neurosurgery — you plan procedures, operate with precision, and manage post-operative care. Your decisions directly alter patient outcomes.',
    pathway: 'Undergraduate Medicine (5–6 years) → Foundation Programme (2 years) → Core Surgical Training (2 years) → Higher Surgical Training (6 years) → FRCS Examination',
    whereYouWork: 'Operating theatres in teaching hospitals, district general hospitals, specialist surgical centres, and private hospitals',
    healthcareLink: null,
  },
  {
    id: 'psychiatrist',
    title: 'Psychiatrist',
    sector: 'Clinical',
    tagline: 'Treating the mind with the same rigour as the body',
    subjects: ['Biology', 'Psychology', 'Sociology'],
    skills: ['Mental health assessment', 'Psychopharmacology', 'Psychotherapy', 'Risk assessment'],
    whatYouDo: 'Psychiatrists diagnose and treat mental health disorders ranging from depression and schizophrenia to personality disorders and addiction. You conduct detailed assessments, prescribe and monitor psychiatric medications, and coordinate multidisciplinary care plans. You work with patients through some of the most challenging periods of their lives.',
    pathway: 'Undergraduate Medicine (5–6 years) → Foundation Programme (2 years) → Core Psychiatry Training (3 years) → Higher Psychiatry Training (3 years) → MRCPsych Examination',
    whereYouWork: 'Inpatient psychiatric units, community mental health teams, prisons, forensic units, and private clinics',
    healthcareLink: null,
  },
  {
    id: 'pediatrician',
    title: 'Pediatrician',
    sector: 'Clinical',
    tagline: 'Championing the health of children from birth through adolescence',
    subjects: ['Biology', 'Chemistry', 'Child Development'],
    skills: ['Paediatric assessment', 'Growth and development monitoring', 'Vaccination protocols', 'Family communication'],
    whatYouDo: 'Pediatricians provide medical care to infants, children, and teenagers. You manage acute illness, developmental conditions, chronic diseases, and preventive care including vaccinations and growth monitoring. Your patients cannot always articulate their symptoms, so observational skill is paramount.',
    pathway: 'Undergraduate Medicine (5–6 years) → Foundation Programme (2 years) → Paediatric Core Training (2 years) → Higher Paediatric Training (4 years) → MRCPCH Examination',
    whereYouWork: 'Children\'s hospitals, paediatric wards, neonatal intensive care units, GP practices, and community health clinics',
    healthcareLink: null,
  },
  {
    id: 'nurse-practitioner',
    title: 'Nurse Practitioner',
    sector: 'Clinical',
    tagline: 'Delivering advanced clinical care with independence and compassion',
    subjects: ['Biology', 'Nursing Studies', 'Pharmacology'],
    skills: ['Clinical assessment', 'Prescribing', 'Patient education', 'Care coordination'],
    whatYouDo: 'Nurse Practitioners diagnose conditions, prescribe medications, and manage patient care independently or alongside physicians. Specialisations include family health, mental health, acute care, and paediatrics. You often serve as a primary care provider in under-served areas.',
    pathway: 'Bachelor of Nursing (3–4 years) → Registered Nurse experience (2+ years) → Master of Science in Nursing / Nurse Practitioner Programme (2 years) → NP Registration',
    whereYouWork: 'Primary care clinics, hospitals, urgent care centres, schools, and community health organisations',
    healthcareLink: null,
  },
  {
    id: 'midwife',
    title: 'Midwife',
    sector: 'Clinical',
    tagline: 'Guiding new life into the world with expertise and empathy',
    subjects: ['Biology', 'Nursing', 'Psychology'],
    skills: ['Antenatal care', 'Labour support', 'Newborn assessment', 'Postnatal care'],
    whatYouDo: 'Midwives provide care throughout pregnancy, labour, and the postnatal period. You monitor fetal and maternal wellbeing, support women during delivery, assess newborns, and educate parents. Midwives are the lead care provider for low-risk pregnancies and work alongside obstetricians for complex cases.',
    pathway: 'Direct Entry Midwifery Degree (3 years) or Registered Nurse route → Midwifery qualification → NMC Registration (UK) or equivalent',
    whereYouWork: 'Labour wards, birth centres, community midwifery teams, antenatal clinics, and home birth services',
    healthcareLink: null,
  },
  {
    id: 'dentist',
    title: 'Dentist',
    sector: 'Clinical',
    tagline: 'Protecting oral health as a gateway to overall wellbeing',
    subjects: ['Biology', 'Chemistry', 'Physics'],
    skills: ['Dental examination', 'Restorative procedures', 'Patient communication', 'Oral surgery'],
    whatYouDo: 'Dentists diagnose and treat conditions of the teeth, gums, and mouth. You perform examinations, take X-rays, fill cavities, extract teeth, fit crowns and bridges, and carry out cosmetic procedures. You educate patients on preventive care and identify oral signs of systemic diseases.',
    pathway: 'Bachelor of Dental Surgery / BDS (5 years) → Foundation Training (1 year) → GDC Registration → Optional specialty training',
    whereYouWork: 'NHS and private dental practices, hospital oral and maxillofacial departments, community dental services, and dental schools',
    healthcareLink: null,
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    sector: 'Clinical',
    tagline: 'The medication experts who stand between prescription and patient safety',
    subjects: ['Chemistry', 'Biology', 'Pharmacology', 'Mathematics'],
    skills: ['Medicines management', 'Clinical review', 'Patient counselling', 'Drug interaction checking'],
    whatYouDo: 'Pharmacists dispense medications, review prescriptions for accuracy and safety, counsel patients on medication use, and work with clinical teams to optimise drug therapy. Clinical pharmacists embedded in hospital wards carry out medicines reconciliation, prescribe in some settings, and lead antimicrobial stewardship programmes.',
    pathway: 'MPharm or BPharm Degree (4–5 years) → Pre-registration Training (1 year) → Registration Assessment → GPhC / equivalent registration',
    whereYouWork: 'Community pharmacies, hospital wards, GP practices, care homes, pharmaceutical industry, and regulatory agencies',
    healthcareLink: null,
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    sector: 'Clinical',
    tagline: 'Restoring movement and function to people who have lost it',
    subjects: ['Biology', 'Physics', 'Sports Science', 'Anatomy'],
    skills: ['Musculoskeletal assessment', 'Exercise prescription', 'Manual therapy', 'Rehabilitation planning'],
    whatYouDo: 'Physiotherapists assess and treat movement disorders caused by injury, illness, or ageing. You develop individualised rehabilitation programmes, use manual therapy, electrotherapy, and exercise to restore function. You work with stroke patients, trauma survivors, post-surgical patients, and elite athletes.',
    pathway: 'BSc or MSc Physiotherapy (3–4 years) → HCPC Registration → Optional specialisation (neurological, musculoskeletal, respiratory)',
    whereYouWork: 'NHS hospitals, private clinics, sports clubs, community rehabilitation services, and care homes',
    healthcareLink: null,
  },
  {
    id: 'optometrist',
    title: 'Optometrist',
    sector: 'Clinical',
    tagline: 'Preserving and correcting vision to keep the world in focus',
    subjects: ['Biology', 'Physics', 'Chemistry', 'Mathematics'],
    skills: ['Vision testing', 'Eye disease detection', 'Contact lens fitting', 'Patient education'],
    whatYouDo: 'Optometrists examine eyes for refractive errors and disease, prescribe corrective lenses, manage conditions such as glaucoma and macular degeneration, and refer for medical or surgical treatment when needed. Early detection of conditions such as diabetic retinopathy can be life-changing for patients.',
    pathway: 'BSc Optometry (3–4 years) → Pre-registration Year → Registration Examination → GOC / equivalent registration',
    whereYouWork: 'Optical practices, hospital eye departments, community health centres, and contact lens clinics',
    healthcareLink: null,
  },
  {
    id: 'paramedic',
    title: 'Paramedic',
    sector: 'Clinical',
    tagline: 'Bringing critical care to patients in their most vulnerable moments',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
    skills: ['Emergency assessment', 'Advanced life support', 'Drug administration', 'Clinical decision-making under pressure'],
    whatYouDo: 'Paramedics respond to 999 emergencies, assess patients with life-threatening conditions, administer drugs, carry out advanced airway management, and make critical decisions about the most appropriate care pathway. You operate with significant autonomy in pre-hospital settings.',
    pathway: 'BSc Paramedic Science (3 years) or Apprenticeship → HCPC Registration → Optional specialist practice pathways (critical care, urgent care)',
    whereYouWork: 'Ambulance services, air ambulances, major incident teams, emergency departments, and remote medicine',
    healthcareLink: null,
  },
  {
    id: 'radiographer',
    title: 'Radiographer',
    sector: 'Clinical',
    tagline: 'Using imaging technology to make the invisible visible',
    subjects: ['Physics', 'Biology', 'Mathematics', 'Chemistry'],
    skills: ['Radiographic technique', 'Patient positioning', 'Radiation safety', 'Image interpretation'],
    whatYouDo: 'Diagnostic radiographers produce medical images using X-ray, CT, MRI, and ultrasound that clinicians use to diagnose and monitor disease. Therapeutic radiographers plan and deliver radiotherapy to cancer patients. Both roles demand technical precision and compassionate patient care.',
    pathway: 'BSc Radiography (3 years) → HCPC Registration → Optional specialisation in MRI, CT, or interventional radiology',
    whereYouWork: 'NHS imaging departments, radiotherapy units, private hospitals, and specialist cancer centres',
    healthcareLink: null,
  },
  {
    id: 'occupational-therapist',
    title: 'Occupational Therapist',
    sector: 'Clinical',
    tagline: 'Helping people regain the ability to live and work independently',
    subjects: ['Biology', 'Psychology', 'Sociology', 'Anatomy'],
    skills: ['Functional assessment', 'Adaptive equipment prescription', 'Environmental modification', 'Goal-setting with patients'],
    whatYouDo: 'Occupational Therapists enable people with physical or mental health conditions to participate in everyday activities — from personal care to employment. You assess functional ability, adapt home and work environments, train patients in compensatory techniques, and recommend assistive technology.',
    pathway: 'BSc or MSc Occupational Therapy (3–4 years) → HCPC Registration → Specialist practice areas (mental health, paediatrics, neurological rehab)',
    whereYouWork: 'Hospitals, community mental health teams, social care, schools, prisons, and private practice',
    healthcareLink: null,
  },
  {
    id: 'salt',
    title: 'Speech & Language Therapist',
    sector: 'Clinical',
    tagline: 'Giving people back the ability to communicate and swallow safely',
    subjects: ['Biology', 'Psychology', 'Linguistics', 'Anatomy'],
    skills: ['Communication assessment', 'Dysphagia management', 'Language therapy', 'Augmentative communication'],
    whatYouDo: 'Speech and Language Therapists assess and treat disorders of communication and swallowing. You work with stroke survivors, children with developmental delays, adults with neurological conditions, and people with head and neck cancers. Your work can restore someone\'s ability to eat safely or speak confidently.',
    pathway: 'BSc or MSc Speech and Language Therapy (3–4 years) → HCPC Registration → RCSLT Membership → Specialisation',
    whereYouWork: 'Hospitals, community clinics, schools, residential care, and early intervention services',
    healthcareLink: null,
  },
  {
    id: 'mls',
    title: 'Medical Laboratory Scientist',
    sector: 'Clinical',
    tagline: 'The scientists whose results drive almost every clinical decision',
    subjects: ['Biology', 'Chemistry', 'Mathematics', 'Biochemistry'],
    skills: ['Laboratory analysis', 'Quality control', 'Result interpretation', 'Instrument operation'],
    whatYouDo: 'Medical Laboratory Scientists analyse blood, urine, tissue, and other specimens to detect disease, monitor treatment, and screen populations. You operate complex analysers, ensure quality standards, troubleshoot anomalous results, and often liaise with clinical teams about critical values.',
    pathway: 'BSc Biomedical Science (3 years) → IBMS Registration → Portfolio of Competence → Optional specialist training (haematology, microbiology, histopathology)',
    whereYouWork: 'NHS laboratories, private pathology companies, research institutes, and public health agencies',
    healthcareLink: null,
  },

  // ── Technology ──
  {
    id: 'health-informatics',
    title: 'Health Informatics Specialist',
    sector: 'Technology',
    tagline: 'Healthcare software systems bridge clinical and digital worlds',
    subjects: ['Computer Science', 'Mathematics', 'Biology', 'Statistics'],
    skills: ['Electronic Health Record systems', 'Data governance', 'Systems integration', 'Clinical workflow analysis'],
    whatYouDo: 'Health Informatics Specialists design, implement, and optimise the information systems that underpin modern healthcare — from electronic patient records to clinical decision support tools. You work at the interface between clinicians and technology teams, ensuring systems serve patient care effectively.',
    pathway: 'Degree in Computer Science, Health Informatics, or allied health → MSc Health Informatics → FAMIA Fellowship → Specialist roles in NHS Digital or health-tech companies',
    whereYouWork: 'NHS Trusts, health ministries, global health organisations, and digital health companies',
    healthcareLink: 'Every prescription, lab result, and clinical note is stored in systems you build and maintain — your work underpins safe patient care.',
  },
  {
    id: 'clinical-data-analyst',
    title: 'Clinical Data Analyst',
    sector: 'Technology',
    tagline: 'Turn patient data into life-saving insights',
    subjects: ['Mathematics', 'Statistics', 'Computer Science', 'Biology'],
    skills: ['SQL', 'Statistical analysis', 'Data visualisation', 'Clinical coding knowledge'],
    whatYouDo: 'Clinical Data Analysts extract meaning from large healthcare datasets — identifying patterns in patient outcomes, tracking disease trends, evaluating treatment effectiveness, and supporting clinical research. Your analyses directly influence clinical guidelines and hospital strategy.',
    pathway: 'Degree in Statistics, Data Science, or Mathematics → NHS Graduate Analytics Programme or entry analyst role → MSc Clinical Data Science → Senior analyst or lead roles',
    whereYouWork: 'Hospital analytics departments, public health agencies, clinical research organisations, and pharma companies',
    healthcareLink: 'Your analysis of patient outcomes can identify which treatments save the most lives and where care quality needs to improve.',
  },
  {
    id: 'medical-ai-developer',
    title: 'Medical AI Developer',
    sector: 'Technology',
    tagline: 'Build algorithms that assist doctors in diagnosis',
    subjects: ['Computer Science', 'Mathematics', 'Biology', 'Physics'],
    skills: ['Machine learning', 'Python / R', 'Medical image analysis', 'Model validation'],
    whatYouDo: 'Medical AI Developers build machine learning systems that assist clinicians — detecting cancerous nodules on CT scans, predicting patient deterioration, triaging referrals, or summarising clinical notes. You collaborate with clinicians to define problems and validate that your models are safe and unbiased.',
    pathway: 'Degree in Computer Science or Mathematics → MSc Machine Learning or AI → Roles at health-tech startups or NHS AI Lab → Senior / lead developer',
    whereYouWork: 'Health-tech companies, academic medical centres, NHS AI teams, and medical device firms',
    healthcareLink: 'AI tools you develop can flag a cancer that a clinician might have missed, or predict a sepsis event hours before it becomes life-threatening.',
  },
  {
    id: 'telehealth-coordinator',
    title: 'Telehealth Coordinator',
    sector: 'Technology',
    tagline: 'Deliver care remotely through digital platforms',
    subjects: ['Computer Science', 'Biology', 'Business Studies', 'Communications'],
    skills: ['Telehealth platform management', 'Patient onboarding', 'Digital accessibility', 'Clinical workflow design'],
    whatYouDo: 'Telehealth Coordinators manage the operational and technical delivery of remote care services. You configure video consultation platforms, train clinical staff, support patients in accessing remote appointments, analyse engagement data, and ensure digital services meet clinical governance standards.',
    pathway: 'Degree in Health Sciences, IT, or Business → Certificate in Telehealth → Coordinator roles → Telehealth Programme Manager',
    whereYouWork: 'NHS Trusts, digital health companies, rural health services, and private healthcare providers',
    healthcareLink: 'Your work extends healthcare access to patients who cannot travel — including the elderly, those in remote areas, and people with disabilities.',
  },
  {
    id: 'biomedical-technologist',
    title: 'Biomedical Technologist',
    sector: 'Technology',
    tagline: 'Maintain and operate life-saving medical equipment',
    subjects: ['Physics', 'Electronics', 'Mathematics', 'Biology'],
    skills: ['Equipment calibration', 'Preventive maintenance', 'Fault diagnosis', 'Regulatory compliance'],
    whatYouDo: 'Biomedical Technologists ensure that diagnostic and therapeutic medical equipment — from ventilators and infusion pumps to MRI scanners and laboratory analysers — functions safely and accurately. You install, calibrate, maintain, and repair equipment, and train clinical staff in its correct use.',
    pathway: 'HNC/HND in Biomedical Engineering or Electronics → BSc Biomedical Engineering → IPEM Membership → Specialist and management roles',
    whereYouWork: 'Hospital engineering departments, medical device companies, and equipment manufacturers',
    healthcareLink: 'A faulty ventilator or miscalibrated blood gas analyser can cost lives — your precision keeps clinical equipment trustworthy.',
  },

  // ── Business ──
  {
    id: 'hospital-administrator',
    title: 'Hospital Administrator',
    sector: 'Business',
    tagline: 'Run healthcare organisations that serve thousands',
    subjects: ['Business Studies', 'Economics', 'Mathematics', 'Biology'],
    skills: ['Strategic planning', 'Budget management', 'Staff leadership', 'Regulatory compliance'],
    whatYouDo: 'Hospital Administrators oversee the day-to-day and strategic operations of NHS Trusts or private hospitals. You manage budgets running into hundreds of millions, lead diverse teams, implement national health policies, negotiate contracts, and ensure the organisation meets CQC standards and patient satisfaction targets.',
    pathway: 'Degree in Business, Health Management, or clinical discipline → NHS Graduate Management Training Scheme or MHA → Senior manager → CEO / Executive Director',
    whereYouWork: 'NHS Foundation Trusts, private hospital groups, independent treatment centres, and health authority offices',
    healthcareLink: 'The operational efficiency you create — from reducing waiting lists to improving discharge pathways — directly translates to better patient experiences.',
  },
  {
    id: 'healthcare-consultant',
    title: 'Healthcare Consultant',
    sector: 'Business',
    tagline: 'Solve systemic problems in hospitals and clinics',
    subjects: ['Business Studies', 'Economics', 'Biology', 'Statistics'],
    skills: ['Process analysis', 'Financial modelling', 'Stakeholder management', 'Change management'],
    whatYouDo: 'Healthcare Consultants are engaged by health systems, governments, and private providers to identify inefficiencies, design improvement programmes, and implement organisational change. Projects range from redesigning patient pathways to advising on hospital mergers and new service launches.',
    pathway: 'Degree in Business, Health Policy, or Medicine → MBA or MSc Health Management → Consulting firm entry programme → Senior consultant / partner',
    whereYouWork: 'Management consulting firms, NHS Improvement, health think-tanks, and as independent consultants',
    healthcareLink: 'A consultant who redesigns an emergency pathway or reduces medication errors across a health system can affect thousands of patients simultaneously.',
  },
  {
    id: 'practice-manager',
    title: 'Medical Practice Manager',
    sector: 'Business',
    tagline: 'Oversee the daily operations of clinical practices',
    subjects: ['Business Studies', 'Mathematics', 'IT', 'Health Studies'],
    skills: ['Staff management', 'CQC compliance', 'Financial administration', 'Patient services management'],
    whatYouDo: 'Medical Practice Managers run the non-clinical operations of GP practices, dental surgeries, or specialist clinics. You manage staff rotas, oversee billing and payroll, ensure CQC compliance, handle patient complaints, implement IT systems, and plan for practice growth and sustainability.',
    pathway: 'Degree or HND in Business / Health Management → Practice administrator role → Practice Manager → Senior or multi-site management',
    whereYouWork: 'GP practices, dental practices, private clinics, and specialist outpatient centres',
    healthcareLink: 'A well-run practice means clinicians can focus on patients rather than administration — your efficiency directly supports quality care.',
  },
  {
    id: 'pharma-product-manager',
    title: 'Pharmaceutical Product Manager',
    sector: 'Business',
    tagline: 'Bring life-saving drugs from lab to market',
    subjects: ['Biology', 'Chemistry', 'Business Studies', 'Marketing'],
    skills: ['Market analysis', 'Product launch planning', 'Stakeholder engagement', 'Regulatory understanding'],
    whatYouDo: 'Pharmaceutical Product Managers lead the commercial strategy for drug products — from late-stage clinical trials through launch and lifecycle management. You analyse market data, engage key opinion leaders, develop pricing strategies, and coordinate cross-functional teams across medical affairs, regulatory, and sales.',
    pathway: 'Degree in Life Sciences or Business → Entry-level marketing / brand role in pharma → MBA or MSc Marketing → Product Manager → Marketing Director',
    whereYouWork: 'Global pharmaceutical companies, biotech firms, and specialty pharma organisations',
    healthcareLink: 'A successful product launch gets an effective medicine to the patients who need it, faster and more widely.',
  },
  {
    id: 'health-insurance-analyst',
    title: 'Health Insurance Analyst',
    sector: 'Business',
    tagline: 'Design and evaluate coverage that protects patients',
    subjects: ['Mathematics', 'Economics', 'Biology', 'Business Studies'],
    skills: ['Actuarial analysis', 'Claims assessment', 'Policy design', 'Risk modelling'],
    whatYouDo: 'Health Insurance Analysts design, price, and evaluate health insurance products. You analyse claims data to understand disease burden, model risk pools, assess the viability of new benefit structures, and advise on policy changes. Your work determines whether millions of people have access to affordable coverage.',
    pathway: 'Degree in Mathematics, Actuarial Science, or Economics → Actuarial exams (FIA / FCA) → Analyst roles at insurers → Senior actuary / product director',
    whereYouWork: 'Private health insurers, NHS commissioners, government health departments, and international health financing organisations',
    healthcareLink: 'Well-designed insurance products ensure patients access treatment early — before conditions become catastrophic and costly.',
  },

  // ── Finance ──
  {
    id: 'healthcare-financial-analyst',
    title: 'Healthcare Financial Analyst',
    sector: 'Finance',
    tagline: 'Ensure hospitals stay solvent while serving patients',
    subjects: ['Mathematics', 'Economics', 'Accounting', 'Business Studies'],
    skills: ['Financial modelling', 'Variance analysis', 'Budget forecasting', 'NHS tariff understanding'],
    whatYouDo: 'Healthcare Financial Analysts build and maintain financial models for NHS Trusts or private providers — forecasting revenues, analysing variances against plan, evaluating capital investment cases, and advising directors on financial strategy. You ensure the organisation can sustain its services long-term.',
    pathway: 'Degree in Finance, Accounting, or Economics → CIMA / ACCA / CIPFA qualification → NHS Finance Graduate Scheme → Senior analyst → CFO pathway',
    whereYouWork: 'NHS Foundation Trusts, private hospital finance departments, healthcare investment banks, and health advisory firms',
    healthcareLink: 'Without sound financial management, hospitals cannot invest in new theatres, equipment, or staff — your work keeps care sustainable.',
  },
  {
    id: 'health-economist',
    title: 'Health Economist',
    sector: 'Finance',
    tagline: 'Research the financial impact of health policies',
    subjects: ['Economics', 'Mathematics', 'Statistics', 'Biology'],
    skills: ['Health technology assessment', 'Cost-effectiveness modelling', 'Economic evaluation', 'Policy analysis'],
    whatYouDo: 'Health Economists evaluate whether medical interventions represent value for money — building cost-effectiveness models, assessing the societal burden of disease, and advising NICE, governments, and pharmaceutical companies on pricing and reimbursement decisions. Your work influences which treatments millions of patients can access.',
    pathway: 'Degree in Economics or Mathematics → MSc Health Economics → PhD or research roles at NICE, LSE, or pharma companies → Senior economist / academic',
    whereYouWork: 'NICE, academic health economics units, WHO, pharmaceutical companies, and government health departments',
    healthcareLink: 'Your cost-effectiveness models inform which cancer drugs the NHS funds — directly affecting the treatments available to patients.',
  },
  {
    id: 'medical-billing-specialist',
    title: 'Medical Billing & Coding Specialist',
    sector: 'Finance',
    tagline: 'Bridge clinical documentation and financial systems',
    subjects: ['Biology', 'IT', 'Business Studies', 'Mathematics'],
    skills: ['ICD-10 / OPCS coding', 'Clinical documentation review', 'Revenue cycle management', 'Compliance auditing'],
    whatYouDo: 'Medical Billing and Coding Specialists translate clinical documentation into standardised codes used for billing, NHS tariff payments, and national statistics. Accurate coding ensures hospitals are appropriately reimbursed for the care they deliver and that data quality supports national healthcare planning.',
    pathway: 'HNC or Degree in Health Informatics or Business → Clinical Coding Qualification (ACC / CCPC) → NHS clinical coding roles → Senior coder / coding auditor',
    whereYouWork: 'NHS Trusts, private hospitals, health information companies, and medical record departments',
    healthcareLink: 'Precise coding directly affects hospital income — and inaccurate data at scale distorts national health planning.',
  },
  {
    id: 'pharma-finance-manager',
    title: 'Pharmaceutical Finance Manager',
    sector: 'Finance',
    tagline: 'Oversee R&D budgets for drug development',
    subjects: ['Mathematics', 'Chemistry', 'Economics', 'Business Studies'],
    skills: ['R&D financial planning', 'Transfer pricing', 'Regulatory financial reporting', 'Cost centre management'],
    whatYouDo: 'Pharmaceutical Finance Managers oversee the financial planning and control of drug development programmes. You manage multi-million-pound R&D budgets, perform financial due diligence on licensing deals, coordinate with regulatory teams on pricing submissions, and ensure compliance with financial reporting standards.',
    pathway: 'Degree in Finance, Accounting, or Chemistry → ACA / CIMA qualification → Financial roles in pharma → Finance Manager → CFO',
    whereYouWork: 'Global pharmaceutical companies, biotech firms, and contract research organisations',
    healthcareLink: 'Well-managed R&D finances mean drug development programmes reach completion — bringing new medicines to patients who need them.',
  },

  // ── Law ──
  {
    id: 'medical-lawyer',
    title: 'Medical Lawyer',
    sector: 'Law',
    tagline: 'Advocate for patients and institutions in legal disputes',
    subjects: ['Biology', 'Law', 'English', 'Social Studies'],
    skills: ['Medical negligence litigation', 'Case analysis', 'Expert witness coordination', 'Healthcare regulation'],
    whatYouDo: 'Medical Lawyers represent patients in clinical negligence claims, advise NHS Trusts and private hospitals on liability matters, conduct inquests, and handle regulatory investigations. You must understand complex medical evidence and translate it into compelling legal argument.',
    pathway: 'Law Degree (LLB) → Legal Practice Course / Bar Training Course → Training Contract / Pupillage → Specialisation in clinical negligence → Partner',
    whereYouWork: 'Claimant and defendant law firms, NHS Resolution, and Bar chambers specialising in healthcare',
    healthcareLink: 'Medical lawyers hold healthcare systems accountable, driving systemic changes that prevent future harm to patients.',
  },
  {
    id: 'health-policy-analyst',
    title: 'Health Policy Analyst',
    sector: 'Law',
    tagline: 'Shape legislation that protects public health',
    subjects: ['Politics', 'Biology', 'Sociology', 'Economics'],
    skills: ['Policy research', 'Legislative analysis', 'Stakeholder consultation', 'Report writing'],
    whatYouDo: 'Health Policy Analysts research, develop, and evaluate policies that govern healthcare systems. You analyse legislation, consult with clinicians and patient groups, assess the impact of proposed changes, and write policy papers that inform ministers, parliamentarians, and health leaders.',
    pathway: 'Degree in Politics, Public Health, or Health Policy → MSc Health Policy → Analyst roles at Department of Health, NHS England, or think-tanks → Senior policy adviser',
    whereYouWork: 'Department of Health, NHS England, WHO, The King\'s Fund, health think-tanks, and parliamentary teams',
    healthcareLink: 'A single well-designed health policy can improve cancer screening rates, reduce health inequalities, or transform mental health access for millions.',
  },
  {
    id: 'bioethics-consultant',
    title: 'Bioethics Consultant',
    sector: 'Law',
    tagline: 'Navigate complex moral questions in medicine',
    subjects: ['Philosophy', 'Biology', 'Law', 'Sociology'],
    skills: ['Ethical framework application', 'Clinical case consultation', 'Policy ethics', 'Research ethics review'],
    whatYouDo: 'Bioethics Consultants advise hospitals, research institutions, and governments on ethical dilemmas — from end-of-life care decisions and organ allocation to genomic data use and AI in medicine. You sit on ethics committees, consult on individual patient cases, and write guidance that shapes clinical practice.',
    pathway: 'Degree in Philosophy, Medicine, or Law → MA / PhD Bioethics → Clinical ethics committee involvement → Consultant or academic role',
    whereYouWork: 'Hospital ethics committees, research ethics boards, universities, NICE, and international health organisations',
    healthcareLink: 'Your ethical guidance helps clinicians navigate life-or-death decisions with clarity, protecting patient dignity and autonomy.',
  },
  {
    id: 'regulatory-affairs',
    title: 'Regulatory Affairs Specialist',
    sector: 'Law',
    tagline: 'Ensure drugs and devices meet legal standards',
    subjects: ['Biology', 'Chemistry', 'Law', 'Business Studies'],
    skills: ['Regulatory submissions', 'MHRA / FDA guidance', 'Clinical trial regulation', 'Quality systems'],
    whatYouDo: 'Regulatory Affairs Specialists manage the approval processes for pharmaceuticals, medical devices, and diagnostics. You compile submission dossiers, liaise with regulatory agencies such as the MHRA and EMA, interpret regulatory guidelines, and ensure ongoing compliance throughout a product\'s lifecycle.',
    pathway: 'Degree in Life Sciences, Law, or Pharmacy → MSc Regulatory Affairs or on-the-job training → TOPRA qualification → Senior RA roles → Regulatory Director',
    whereYouWork: 'Pharmaceutical companies, medical device manufacturers, CROs, and regulatory agencies',
    healthcareLink: 'Regulatory approval is the final gate before a new drug or device reaches patients — your work ensures that gate is only opened for safe, effective products.',
  },
  {
    id: 'medical-claims-investigator',
    title: 'Medical Claims Investigator',
    sector: 'Law',
    tagline: 'Detect fraud and ensure fair insurance practices',
    subjects: ['Biology', 'Law', 'Mathematics', 'IT'],
    skills: ['Claims analysis', 'Fraud detection', 'Clinical record review', 'Investigation reporting'],
    whatYouDo: 'Medical Claims Investigators audit insurance claims and healthcare billing to identify fraud, waste, and abuse. You review clinical documentation, interview providers and patients, analyse billing patterns, and produce evidence for legal proceedings. Your work protects the financial integrity of health systems.',
    pathway: 'Degree in Law, Forensic Science, or Healthcare → Insurance industry experience → Specialist investigator training → Senior investigator / team lead',
    whereYouWork: 'Health insurers, NHS Counter Fraud Authority, private investigation firms, and law enforcement agencies',
    healthcareLink: 'Every pound recovered from fraudulent claims can be reinvested in genuine patient care.',
  },

  // ── Engineering ──
  {
    id: 'biomedical-engineer',
    title: 'Biomedical Engineer',
    sector: 'Engineering',
    tagline: 'Design prosthetics, implants, and diagnostic devices',
    subjects: ['Physics', 'Biology', 'Mathematics', 'Chemistry', 'Design Technology'],
    skills: ['Device design', 'Biomaterials science', 'Regulatory testing', 'Prototyping'],
    whatYouDo: 'Biomedical Engineers apply engineering principles to solve medical problems. You design and test implantable devices such as hip replacements and cardiac stents, develop prosthetic limbs, create diagnostic instruments, and conduct the biocompatibility and safety testing required for regulatory approval.',
    pathway: 'BEng / MEng Biomedical Engineering (4 years) → Graduate engineer roles → Chartered Engineer status (CEng) → Senior / principal engineer',
    whereYouWork: 'Medical device companies, NHS medical physics departments, research universities, and prosthetics manufacturers',
    healthcareLink: 'A well-designed hip implant gives a patient decades of mobility; a reliable insulin pump prevents daily life-threatening episodes.',
  },
  {
    id: 'clinical-engineer',
    title: 'Clinical Engineer',
    sector: 'Engineering',
    tagline: 'Ensure medical equipment is safe and effective',
    subjects: ['Physics', 'Electronics', 'Mathematics', 'Biology'],
    skills: ['Equipment safety testing', 'Risk management', 'Procurement evaluation', 'Staff training'],
    whatYouDo: 'Clinical Engineers manage the entire lifecycle of medical devices within healthcare organisations — from procurement and acceptance testing through maintenance, incident investigation, and decommissioning. You advise clinicians on equipment selection, investigate device-related adverse events, and ensure compliance with safety standards.',
    pathway: 'BEng Engineering or Physics → Post-graduate training in clinical engineering → IPEM membership → Consultant Clinical Scientist → Registration with HCPC',
    whereYouWork: 'NHS medical physics and clinical engineering departments, private hospital groups, and NHS Supply Chain',
    healthcareLink: 'Every defibrillator that fires correctly and every infusion pump that delivers the right dose reflects your quality assurance work.',
  },
  {
    id: 'medical-device-designer',
    title: 'Medical Device Designer',
    sector: 'Engineering',
    tagline: 'Create tools that surgeons and clinicians rely on',
    subjects: ['Design Technology', 'Physics', 'Mathematics', 'Biology'],
    skills: ['CAD design', 'Human factors engineering', 'Usability testing', 'ISO 13485 compliance'],
    whatYouDo: 'Medical Device Designers conceive, prototype, and refine the physical and digital products that clinicians use every day — from surgical instruments and wound care products to patient monitoring systems and hospital beds. You integrate clinical insight, engineering rigour, and aesthetic precision.',
    pathway: 'Degree in Product Design, Mechanical Engineering, or Biomedical Engineering → Junior designer roles → Senior / lead designer → Design director',
    whereYouWork: 'Medical device companies, design consultancies with health specialisms, NHS innovation hubs, and academic spin-outs',
    healthcareLink: 'An intuitively designed syringe or infusion pump reduces clinical error; a poorly designed one can kill.',
  },
  {
    id: 'prosthetics-engineer',
    title: 'Prosthetics & Orthotics Engineer',
    sector: 'Engineering',
    tagline: 'Restore movement and function to patients',
    subjects: ['Biology', 'Physics', 'Design Technology', 'Mathematics'],
    skills: ['Biomechanical analysis', 'Casting and fitting', 'Gait analysis', 'Computer-aided fabrication'],
    whatYouDo: 'Prosthetics and Orthotics Engineers design, manufacture, and fit artificial limbs and orthotic supports — from below-knee prosthetics and spinal braces to myoelectric arm systems. You assess patient anatomy and biomechanics, produce custom devices, and conduct fitting and gait-training sessions.',
    pathway: 'BSc Prosthetics and Orthotics (4 years) → HCPC Registration → Specialist practice → Research or academic roles',
    whereYouWork: 'NHS prosthetic and orthotic centres, rehabilitation hospitals, private O&P clinics, and device manufacturers',
    healthcareLink: 'A well-fitted prosthetic limb allows an amputee to walk, work, and live independently.',
  },
  {
    id: 'hospital-infra-engineer',
    title: 'Hospital Infrastructure Engineer',
    sector: 'Engineering',
    tagline: 'Design the electrical and mechanical systems of hospitals',
    subjects: ['Physics', 'Mathematics', 'Design Technology', 'Chemistry'],
    skills: ['MEP engineering', 'Medical gas systems', 'Infection control engineering', 'Building regulations'],
    whatYouDo: 'Hospital Infrastructure Engineers design and oversee the mechanical, electrical, and plumbing systems that keep clinical environments operational — from ventilation systems in operating theatres and intensive care units to medical gas pipelines, clean water systems, and emergency power supplies.',
    pathway: 'BEng Mechanical or Electrical Engineering → Graduate engineer roles in building services → Chartered Engineer (CEng) → Specialisation in healthcare estates',
    whereYouWork: 'Building services consultancies, NHS Estates and Facilities teams, and specialist healthcare construction contractors',
    healthcareLink: 'A ventilation failure in an operating theatre or a power cut to a critical care unit can be fatal — your engineering prevents these events.',
  },

  // ── Art & Design ──
  {
    id: 'medical-illustrator',
    title: 'Medical Illustrator',
    sector: 'Art',
    tagline: 'Visualise anatomy and procedures for education and publication',
    subjects: ['Art & Design', 'Biology', 'Chemistry'],
    skills: ['Scientific illustration', 'Anatomy knowledge', 'Digital illustration', 'Publication standards'],
    whatYouDo: 'Medical Illustrators create accurate, detailed images of anatomical structures, surgical procedures, disease processes, and medical devices for use in textbooks, patient education materials, legal cases, and scientific publications. Your work makes complex medical concepts accessible and comprehensible.',
    pathway: 'Degree in Medical Illustration, Fine Art, or Biology → MSc Medical Illustration → AHIMSA membership → Freelance or institutional roles',
    whereYouWork: 'Medical publishers, universities, hospitals, pharmaceutical companies, legal firms, and as freelancers',
    healthcareLink: 'A clear surgical illustration in a textbook trains the next generation of clinicians; a patient-education diagram improves informed consent.',
  },
  {
    id: 'healthcare-ux-designer',
    title: 'Healthcare UX Designer',
    sector: 'Art',
    tagline: 'Design hospital apps and patient portals that are intuitive',
    subjects: ['Art & Design', 'IT', 'Psychology', 'Sociology'],
    skills: ['User research', 'Wireframing', 'Accessibility design', 'Usability testing'],
    whatYouDo: 'Healthcare UX Designers research how clinicians and patients interact with digital health products — then design interfaces that are intuitive, accessible, and safe. Poor UX in a drug prescribing system can cause fatal errors; excellent UX can transform patient engagement with their own health.',
    pathway: 'Degree in Interaction Design, Graphic Design, or Psychology → UX bootcamp or portfolio development → Junior UX roles → Senior / lead designer',
    whereYouWork: 'Health-tech companies, NHS digital programmes, medical device firms, and design agencies',
    healthcareLink: 'An electronic prescribing system with clear UX reduces medication errors; a patient portal that people can actually use improves adherence and self-management.',
  },
  {
    id: 'medical-animator',
    title: 'Medical Animator',
    sector: 'Art',
    tagline: 'Create 3D animations explaining surgical procedures',
    subjects: ['Art & Design', 'Biology', 'IT', 'Physics'],
    skills: ['3D modelling', 'Animation software', 'Anatomical accuracy', 'Scientific communication'],
    whatYouDo: 'Medical Animators produce three-dimensional animations that visualise cellular processes, explain surgical techniques, demonstrate drug mechanisms, and bring medical education to life. Your work is used in medical training, patient consent videos, pharmaceutical marketing, and public health campaigns.',
    pathway: 'Degree in Animation, 3D Design, or Medical Illustration → Portfolio development → Junior animator roles → Senior animator → Creative director',
    whereYouWork: 'Medical education companies, pharmaceutical firms, surgical robotics companies, and medical communication agencies',
    healthcareLink: 'An animation showing patients exactly what their operation involves reduces anxiety and improves informed consent.',
  },
  {
    id: 'health-comms-designer',
    title: 'Health Communications Designer',
    sector: 'Art',
    tagline: 'Design public health campaigns that save lives',
    subjects: ['Art & Design', 'English', 'Sociology', 'Media Studies'],
    skills: ['Graphic design', 'Campaign strategy', 'Data visualisation', 'Accessibility and plain language'],
    whatYouDo: 'Health Communications Designers produce the visual and written materials that communicate health messages to the public — from vaccination campaign posters and NHS leaflets to social media content and infographics on disease prevention. You make complex health information clear, compelling, and equitable.',
    pathway: 'Degree in Graphic Design, Communications, or Public Health → Junior designer or campaign roles → Senior designer / creative lead → Communications Director',
    whereYouWork: 'Public Health England / UKHSA, NHS communications teams, global health organisations, and health charities',
    healthcareLink: 'A well-designed COVID-19 vaccination campaign can increase uptake by millions, directly reducing hospitalisation and death.',
  },
  {
    id: 'patient-experience-designer',
    title: 'Patient Experience Designer',
    sector: 'Art',
    tagline: 'Reimagine hospital environments for healing',
    subjects: ['Art & Design', 'Psychology', 'Sociology', 'Architecture'],
    skills: ['Service design', 'Co-design with patients', 'Environmental design', 'Journey mapping'],
    whatYouDo: 'Patient Experience Designers apply service design and human-centred design principles to reimagine how patients move through and experience healthcare. You co-design waiting areas, wayfinding systems, digital touchpoints, and clinical consultation processes — always centring patient dignity and comfort.',
    pathway: 'Degree in Service Design, Interior Design, or Psychology → Experience in healthcare or service design → Senior experience designer → Head of Patient Experience',
    whereYouWork: 'NHS Trusts, hospital architecture firms, health-tech companies, and patient experience consultancies',
    healthcareLink: 'A calm, well-designed A&E waiting area reduces patient anxiety and staff stress; clear wayfinding prevents dangerous delays in reaching emergency care.',
  },

  // ── Construction ──
  {
    id: 'hospital-architect',
    title: 'Hospital Architect',
    sector: 'Construction',
    tagline: 'Design healing spaces that improve patient outcomes',
    subjects: ['Art & Design', 'Mathematics', 'Physics', 'Biology'],
    skills: ['Architectural design', 'Infection control planning', 'Healthcare planning standards', 'BIM software'],
    whatYouDo: 'Hospital Architects design clinical environments — from emergency departments and operating theatres to mental health inpatient units and community health centres. You apply evidence-based design principles that reduce healthcare-associated infections, improve wayfinding, support staff wellbeing, and create environments that aid patient recovery.',
    pathway: 'MArch Architecture (5 years) → RIBA Part 3 → Architectural registration → Specialisation in healthcare architecture → Associate / Director',
    whereYouWork: 'Architecture practices specialising in healthcare, NHS Estates, and government health infrastructure agencies',
    healthcareLink: 'Research shows that natural light, single-bedded rooms, and thoughtful layout design reduce hospital-acquired infections and length of stay.',
  },
  {
    id: 'healthcare-facility-planner',
    title: 'Healthcare Facility Planner',
    sector: 'Construction',
    tagline: 'Plan the layout of hospitals and clinics for optimal flow',
    subjects: ['Mathematics', 'Design Technology', 'Business Studies', 'Biology'],
    skills: ['Activity and capacity modelling', 'Functional adjacency planning', 'Operational brief writing', 'Stakeholder engagement'],
    whatYouDo: 'Healthcare Facility Planners develop the operational and functional briefs that guide hospital design — translating clinical workflows, capacity requirements, and infection control standards into room data sheets, departmental adjacencies, and space programmes that architects then use to design buildings.',
    pathway: 'Degree in Architecture, Surveying, or Health Management → Postgraduate training in health facility planning → NHS Estates or consultant roles → Principal planner',
    whereYouWork: 'NHS Capital Planning teams, healthcare architecture practices, and health infrastructure consultancies',
    healthcareLink: 'An optimally planned surgical suite allows more operations to be performed safely per day, reducing waiting lists and improving outcomes.',
  },
  {
    id: 'clean-room-manager',
    title: 'Clean Room Construction Manager',
    sector: 'Construction',
    tagline: 'Build sterile environments for surgeries and labs',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Design Technology'],
    skills: ['ISO clean room standards', 'HVAC systems management', 'Infection control construction', 'Commissioning and validation'],
    whatYouDo: 'Clean Room Construction Managers oversee the construction and commissioning of controlled environments — including operating theatres, pharmaceutical manufacturing facilities, and laboratory clean rooms — that must meet strict standards for air quality, particulate counts, and microbial contamination.',
    pathway: 'HNC/HND Building Services Engineering → Project management experience in specialist construction → Specialist contractor roles → Project / programme manager',
    whereYouWork: 'Specialist healthcare construction contractors, pharmaceutical facility builders, and NHS Estates project teams',
    healthcareLink: 'A correctly constructed operating theatre ventilation system prevents surgical site infections — a major cause of post-operative mortality.',
  },
  {
    id: 'medical-equipment-installer',
    title: 'Medical Equipment Installation Specialist',
    sector: 'Construction',
    tagline: 'Install and commission imaging suites and ORs',
    subjects: ['Physics', 'Electronics', 'Mathematics', 'Design Technology'],
    skills: ['Technical installation', 'Radiation shielding compliance', 'Equipment commissioning', 'Handover documentation'],
    whatYouDo: 'Medical Equipment Installation Specialists manage the complex installation, commissioning, and handover of major medical equipment — including MRI scanners, CT suites, linear accelerators, robotic surgical systems, and endoscopy units. You coordinate between equipment manufacturers, building contractors, and clinical teams.',
    pathway: 'HNC/HND Engineering → Apprenticeship or graduate engineering role → Manufacturer training programmes → Senior installer / commissioning manager',
    whereYouWork: 'Medical equipment manufacturers, specialist installation contractors, and NHS Estates project teams',
    healthcareLink: 'A correctly installed MRI scanner or radiotherapy unit can begin treating cancer patients; a misinstalled system means months of delays and delayed diagnoses.',
  },
];

// ─── Sector Config ────────────────────────────────────────────────────────────

const sectorConfig = {
  Clinical:     { color: 'bg-[#003366] text-white', border: 'border-[#003366]' },
  Technology:   { color: 'bg-indigo-700 text-white', border: 'border-indigo-700' },
  Business:     { color: 'bg-teal-700 text-white', border: 'border-teal-700' },
  Finance:      { color: 'bg-emerald-700 text-white', border: 'border-emerald-700' },
  Law:          { color: 'bg-purple-700 text-white', border: 'border-purple-700' },
  Engineering:  { color: 'bg-orange-600 text-white', border: 'border-orange-600' },
  Art:          { color: 'bg-pink-600 text-white', border: 'border-pink-600' },
  Construction: { color: 'bg-amber-600 text-white', border: 'border-amber-600' },
};

const filterLabels = ['All', 'Clinical', 'Technology', 'Business', 'Finance', 'Law', 'Engineering', 'Art & Design', 'Construction'];
const filterToSector = { 'Art & Design': 'Art' };

// ─── Quiz Data ────────────────────────────────────────────────────────────────

const questions = [
  {
    question: 'What energizes you most in a typical day?',
    options: [
      { label: 'Working directly with people to solve their problems', weights: { Clinical: 3, Business: 1 } },
      { label: 'Building and fixing technical systems', weights: { Technology: 3, Engineering: 2 } },
      { label: 'Analyzing data and finding patterns', weights: { Finance: 2, Technology: 2 } },
      { label: 'Creating something visual or spatial', weights: { Art: 3, Construction: 2 } },
      { label: 'Researching, writing, and arguing a case', weights: { Law: 3, Finance: 1 } },
    ],
  },
  {
    question: 'Which school subjects do you enjoy most?',
    options: [
      { label: 'Biology and Chemistry', weights: { Clinical: 3 } },
      { label: 'Computer Science and Mathematics', weights: { Technology: 3, Finance: 1 } },
      { label: 'Business Studies and Economics', weights: { Business: 3, Finance: 2 } },
      { label: 'Art, Design, or Technical Drawing', weights: { Art: 3, Construction: 2 } },
      { label: 'Social Studies, Law, or Politics', weights: { Law: 3, Business: 1 } },
      { label: 'Physics and Engineering', weights: { Engineering: 3, Technology: 1 } },
    ],
  },
  {
    question: 'In a team project, you naturally take the role of...',
    options: [
      { label: 'The one who keeps everyone organized and on track', weights: { Business: 2, Finance: 1 } },
      { label: 'The one who comes up with creative ideas', weights: { Art: 3, Technology: 1 } },
      { label: 'The one who researches and presents the facts', weights: { Law: 2, Clinical: 1 } },
      { label: 'The one who builds or codes the solution', weights: { Engineering: 3, Technology: 2 } },
      { label: 'The one who connects with teammates and resolves conflict', weights: { Clinical: 2, Business: 1 } },
    ],
  },
  {
    question: 'What kind of environment suits you best?',
    options: [
      { label: 'Hospital, clinic, or community health setting', weights: { Clinical: 3 } },
      { label: 'Office or corporate environment', weights: { Business: 2, Finance: 2, Law: 1 } },
      { label: 'Lab, workshop, or technical facility', weights: { Engineering: 3, Technology: 2 } },
      { label: 'Studio, creative agency, or flexible workspace', weights: { Art: 3 } },
      { label: 'Construction site, hospital building project', weights: { Construction: 3 } },
    ],
  },
  {
    question: 'What motivates you most?',
    options: [
      { label: 'Directly saving or improving a patient\'s life', weights: { Clinical: 3 } },
      { label: 'Making complex systems run more efficiently', weights: { Business: 2, Engineering: 2 } },
      { label: 'Creating something beautiful that communicates clearly', weights: { Art: 3 } },
      { label: 'Ensuring fairness, rights, and accountability', weights: { Law: 3 } },
      { label: 'Solving financial puzzles and managing resources', weights: { Finance: 3 } },
      { label: 'Building things that will last for generations', weights: { Construction: 3 } },
    ],
  },
  {
    question: 'How do you handle pressure and stress?',
    options: [
      { label: 'I stay calm and make quick decisions', weights: { Clinical: 3, Law: 2 } },
      { label: 'I break the problem into logical steps', weights: { Engineering: 3, Technology: 2 } },
      { label: 'I focus on the numbers and find a solution', weights: { Finance: 3 } },
      { label: 'I lead the team and keep morale up', weights: { Business: 3 } },
      { label: 'I use creativity to find an unexpected solution', weights: { Art: 3 } },
    ],
  },
  {
    question: 'Which of these excites you most?',
    options: [
      { label: 'Performing a successful medical procedure', weights: { Clinical: 3 } },
      { label: 'Launching a health app used by thousands', weights: { Technology: 3 } },
      { label: 'Running a hospital that serves a city', weights: { Business: 3 } },
      { label: 'Winning a landmark healthcare court case', weights: { Law: 3 } },
      { label: 'Designing a medical device used in surgeries', weights: { Engineering: 3 } },
      { label: 'Drawing the illustrations for a medical textbook', weights: { Art: 3 } },
      { label: 'Building a children\'s hospital from the ground up', weights: { Construction: 3 } },
    ],
  },
  {
    question: 'Where do you see yourself in 15 years?',
    options: [
      { label: 'Leading a team of clinicians in a hospital', weights: { Clinical: 3 } },
      { label: 'CTO of a health-tech company', weights: { Technology: 3 } },
      { label: 'CEO of a healthcare organisation', weights: { Business: 3 } },
      { label: 'Partner at a healthcare law firm', weights: { Law: 3 } },
      { label: 'CFO of a pharmaceutical company', weights: { Finance: 3 } },
      { label: 'Chief Engineer at a medical device firm', weights: { Engineering: 3 } },
      { label: 'Creative director for global health campaigns', weights: { Art: 3 } },
      { label: 'Principal architect specialising in hospitals', weights: { Construction: 3 } },
    ],
  },
];

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// ═══════════════════════════════════════════════════════════════════════════════
// Career Explorer Tab
// ═══════════════════════════════════════════════════════════════════════════════

const CareerCard = ({ career, isExpanded, onToggle }) => {
  const cfg = sectorConfig[career.sector] || sectorConfig.Clinical;

  return (
    <motion.div
      layout
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.color}`}>
            {career.sector}
          </span>
        </div>
        <h3 className="playfair text-lg font-bold text-[#003366] mb-1 leading-snug">{career.title}</h3>
        <p className="text-sm text-gray-500 mb-3 italic">{career.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {career.subjects.map((s) => (
            <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{s}</span>
          ))}
        </div>
        <button
          onClick={onToggle}
          className="text-sm font-semibold text-[#003366] border border-[#003366] rounded-lg px-4 py-1.5 hover:bg-[#003366] hover:text-white transition-colors duration-200"
        >
          {isExpanded ? 'Close' : 'Explore'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 bg-gray-50 p-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#DAA520] mb-1">What You Will Do</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{career.whatYouDo}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#DAA520] mb-1">Key Skills</h4>
                <ul className="flex flex-wrap gap-1.5">
                  {career.skills.map((s) => (
                    <li key={s} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full">{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#DAA520] mb-1">Study Pathway</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{career.pathway}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#DAA520] mb-1">Where You Can Work</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{career.whereYouWork}</p>
              </div>
              {career.healthcareLink && (
                <div className="bg-[#003366]/5 border-l-4 border-[#DAA520] pl-4 py-2 rounded-r-lg">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#DAA520] mb-1">Healthcare Connection</h4>
                  <p className="text-sm text-gray-700 leading-relaxed italic">{career.healthcareLink}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CareerExplorer = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const sectorKey = filterToSector[activeFilter] || activeFilter;
  const filtered = activeFilter === 'All' ? careers : careers.filter((c) => c.sector === sectorKey);

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterLabels.map((label) => {
          const isActive = activeFilter === label;
          return (
            <button
              key={label}
              onClick={() => { setActiveFilter(label); setExpandedId(null); }}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors duration-150 ${
                isActive
                  ? 'bg-[#003366] text-white border-[#003366]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#003366] hover:text-[#003366]'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((career) => (
            <motion.div
              key={career.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <CareerCard
                career={career}
                isExpanded={expandedId === career.id}
                onToggle={() => handleToggle(career.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">No careers found for this filter.</p>
      )}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// Career Quiz Tab
// ═══════════════════════════════════════════════════════════════════════════════

const initialWeights = {
  Clinical: 0, Technology: 0, Business: 0, Finance: 0,
  Law: 0, Engineering: 0, Art: 0, Construction: 0,
};

const QuizRecommendationCard = ({ career }) => {
  const cfg = sectorConfig[career.sector] || sectorConfig.Clinical;
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${cfg.color}`}>
        {career.sector}
      </span>
      <h3 className="playfair text-base font-bold text-[#003366] mb-1">{career.title}</h3>
      <p className="text-sm text-gray-500 italic">{career.tagline}</p>
    </div>
  );
};

const CareerQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [weights, setWeights] = useState({ ...initialWeights });
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);
  const [topSectors, setTopSectors] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const progress = ((current) / questions.length) * 100;

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (!selected) return;

    const newWeights = { ...weights };
    Object.entries(selected.weights).forEach(([sector, pts]) => {
      newWeights[sector] = (newWeights[sector] || 0) + pts;
    });
    setWeights(newWeights);

    if (current < questions.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      // Compute results
      const sorted = Object.entries(newWeights)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([sector]) => sector);

      setTopSectors(sorted);

      const picks = sorted.flatMap((sector) => {
        const sectorCareers = careers.filter((c) => c.sector === sector);
        return sectorCareers.slice(0, 2);
      });
      setRecommended(picks);
      setDone(true);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setWeights({ ...initialWeights });
    setDone(false);
    setTopSectors([]);
    setRecommended([]);
  };

  const sectorDisplayName = (s) => (s === 'Art' ? 'Art & Design' : s);

  if (done) {
    return (
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block w-14 h-14 rounded-full bg-[#DAA520]/20 flex items-center justify-center mb-4">
            <div className="w-7 h-7 rounded-full bg-[#DAA520]" />
          </div>
          <h2 className="playfair text-3xl font-bold text-[#003366] mb-3">Your Path is Taking Shape</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Based on your answers, your strengths and interests align most closely with these sectors of healthcare.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {topSectors.map((s, i) => {
            const cfg = sectorConfig[s] || sectorConfig.Clinical;
            return (
              <span key={s} className={`px-4 py-1.5 rounded-full font-semibold text-sm ${cfg.color}`}>
                {i + 1}. Healthcare + {sectorDisplayName(s)}
              </span>
            );
          })}
        </div>

        <h3 className="playfair text-xl font-bold text-[#003366] mb-4 text-center">This could be your path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {recommended.map((c) => (
            <QuizRecommendationCard key={c.id} career={c} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleRestart}
            className="bg-[#003366] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#002244] transition-colors"
          >
            Retake the Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  const q = questions[current];

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Question {current + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#DAA520] rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="playfair text-2xl font-bold text-[#003366] mb-6 leading-snug">{q.question}</h2>

          <div className="space-y-3 mb-8">
            {q.options.map((opt, i) => {
              const isSelected = selected?.label === opt.label;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 ${
                    isSelected
                      ? 'border-[#003366] bg-[#003366]/5 text-[#003366] font-medium'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#003366]/40'
                  }`}
                >
                  <span className={`inline-block w-5 h-5 rounded-full border-2 mr-3 align-middle transition-colors ${
                    isSelected ? 'border-[#003366] bg-[#003366]' : 'border-gray-300'
                  }`} />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex gap-3">
        {current > 0 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:border-gray-400 transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!selected}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-colors ${
            selected
              ? 'bg-[#003366] text-white hover:bg-[#002244]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {current === questions.length - 1 ? 'See My Results' : 'Next'}
        </button>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// Professional Resources Tab (preserved from original)
// ═══════════════════════════════════════════════════════════════════════════════

const MedicalResources = () => (
  <div className="space-y-8">
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">World Directory of Medical Schools (WDOMS)</h3>
      <p className="text-gray-600 mb-4">
        The <a href="https://www.wdoms.org/" className="text-[#003366] hover:underline">World Directory of Medical Schools (WDOMS)</a> is a comprehensive directory of medical schools worldwide, recognized by the World Health Organization (WHO). Being listed in WDOMS is often a prerequisite for eligibility in many countries' licensing exams.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Country-Specific Requirements</h3>
      <p className="text-sm text-gray-500 mb-6"><strong>Note</strong>: The following information is accurate as of June 2025. For the most up-to-date requirements, please check the respective verification links.</p>

      <div className="grid gap-6">
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">USA (USMLE)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS. For ECFMG Certification, the school must have an ECFMG Sponsor Note in WDOMS.</p>
          <p className="text-gray-600 mb-2"><strong>Verification</strong>: <a href="https://www.ecfmg.org/certification-requirements-2025.html" className="text-[#003366] hover:underline">ECFMG Certification Requirements</a></p>
          <p className="text-gray-600"><strong>Note</strong>: As of 2025, WFME accreditation is not mandatory for ECFMG eligibility.</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">Canada (MCCQE)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS with a Canada Sponsor Note.</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://mcc.ca/examinations/acceptable-medical-schools/" className="text-[#003366] hover:underline">Medical Council of Canada - Acceptable Medical Schools</a></p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">UK (PLAB/UKMLA)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The school must be listed in WDOMS, and the qualification must be accepted by the General Medical Council (GMC).</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.gmc-uk.org/registration-and-licensing/join-the-register/before-you-apply/acceptable-overseas-qualifications" className="text-[#003366] hover:underline">GMC - Acceptable Overseas Qualifications</a></p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">Italy (Esame di Stato)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The medical school must be recognized by the Italian Ministry of Education, University, and Research (MIUR). For international graduates, the school must be listed in WDOMS, and the degree must be recognized by Italian authorities.</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.salute.gov.it/portale/temi/p2_6.jsp?lingua=italiano&id=1357&area=professioniSanitarie&menu=esami" className="text-[#003366] hover:underline">Italian Ministry of Health - State Exam</a></p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">China (NMLE)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: The medical school must be recognized by the Chinese Ministry of Education. For international graduates, the school must be listed in WDOMS, and the degree must be evaluated by the China Academic Degrees and Graduate Education Development Center (CDGDC).</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.cdgdc.edu.cn/" className="text-[#003366] hover:underline">China Academic Degrees and Graduate Education</a></p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive List of Medical Specialties Worldwide (2025)</h3>
      <p className="text-gray-600 mb-6">With Post-Nominal Qualifications - Primary Medical Specialties (Alphabetical)</p>

      <div className="grid gap-4">
        {[
          { name: 'Addiction Medicine', desc: 'Focuses on prevention, evaluation, diagnosis, treatment, and recovery from substance use disorders and addiction-related medical complications.', postnominals: 'FASAM (Fellow, American Society of Addiction Medicine), DipAddMed (Diploma in Addiction Medicine), MSc Addiction Studies, Certificate in Addiction Medicine', sub: 'None recognized.' },
          { name: 'Aerospace Medicine', desc: 'Deals with the health and safety of flight crews, astronauts, and space travelers; studies effects of flight and space environment on human physiology.', postnominals: 'MPH (Master of Public Health), MSc Aviation Medicine, DipAvMed (Diploma in Aviation Medicine), FAAM (Fellow, Aerospace Medical Association)', sub: 'None recognized.' },
          { name: 'Allergy and Immunology', desc: 'Diagnoses and treats immune system disorders including asthma, allergies, immunodeficiencies, and autoimmune diseases.', postnominals: 'FAAAAI (Fellow, American Academy of Allergy, Asthma & Immunology), FRCP (Fellow, Royal College of Physicians), MSc Clinical Immunology, DipAllergy', sub: 'None recognized.' },
          { name: 'Anesthesiology', desc: 'Administers anesthesia for surgeries, manages perioperative care, and oversees critical care medicine.', postnominals: 'FRCA (Fellow, Royal College of Anaesthetists), DA (Diploma in Anaesthetics), MD Anesthesiology, FASA (Fellow, American Society of Anesthesiologists), DNB Anaesthesiology', sub: 'Adult Cardiothoracic Anesthesiology (Fellowship), Critical Care Medicine (FCCM), Pain Medicine (FIPP), Pediatric Anesthesiology (Fellowship), Sleep Medicine (DABSM), Neurocritical Care (Fellowship), Hospice and Palliative Medicine (ABHPM).' },
          { name: 'Dermatology', desc: 'Diagnoses and treats disorders of skin, hair, nails, and mucous membranes including medical, surgical, and cosmetic conditions.', postnominals: 'FRCP, AAD (American Academy of Dermatology), MD Dermatology, DNB Dermatology, MSc Dermatology', sub: 'Dermatopathology (Fellowship, FRCPath), Pediatric Dermatology (Fellowship), Mohs Surgery (Fellowship).' },
          { name: 'Emergency Medicine', desc: 'Provides immediate medical care for acute illnesses and injuries in emergency department settings.', postnominals: 'FCEM (Fellow, College of Emergency Medicine), FACEM (Fellow, Australasian College for Emergency Medicine), MD Emergency Medicine, ABEM', sub: 'Pediatric Emergency Medicine, Medical Toxicology, Undersea and Hyperbaric Medicine, Sports Medicine, Critical Care Medicine, Wilderness Medicine.' },
          { name: 'Family Medicine', desc: 'Provides comprehensive, continuous healthcare for individuals and families across all ages, genders, and diseases.', postnominals: 'MRCGP (Member, Royal College of General Practitioners), FRACGP (Fellow, Royal Australian College of General Practitioners), MD Family Medicine, ABFM', sub: 'Geriatric Medicine (BGS), Adolescent Medicine, Sports Medicine, Rural Medicine.' },
          { name: 'Internal Medicine', desc: 'Comprehensive medical care of adults, focusing on prevention, diagnosis, and treatment of diseases affecting internal organs.', postnominals: 'FRCP, FACP (Fellow, American College of Physicians), MD Internal Medicine, ABIM', sub: 'Cardiology, Endocrinology, Gastroenterology, Hematology, Nephrology, Oncology, Pulmonology, Rheumatology, Sleep Medicine, Transplant Hepatology.' },
          { name: 'Neurology', desc: 'Diagnosis and treatment of disorders affecting the nervous system including brain, spinal cord, nerves, and muscles.', postnominals: 'FRCP, FAAN (Fellow, American Academy of Neurology), MD Neurology, DNB Neurology', sub: 'Child Neurology, Neurocritical Care, Neuromuscular Medicine, Epilepsy, Movement Disorders.' },
          { name: 'Obstetrics and Gynecology', desc: 'Medical and surgical care of the female reproductive system and management of pregnancy and childbirth.', postnominals: 'FRCOG, FACOG, MD OB/GYN, MS Obstetrics & Gynaecology', sub: 'Gynecologic Oncology, Maternal-Fetal Medicine, Reproductive Endocrinology and Infertility, Female Pelvic Medicine and Reconstructive Surgery.' },
          { name: 'Ophthalmology', desc: 'Medical and surgical treatment of eye diseases and vision disorders.', postnominals: 'FRCOphth (Fellow, Royal College of Ophthalmologists), AAO (American Academy of Ophthalmology), MS Ophthalmology, DNB Ophthalmology', sub: 'Cornea, Retinal Diseases, Glaucoma, Neuro-ophthalmology, Pediatric Ophthalmology.' },
          { name: 'Orthopedic Surgery', desc: 'Surgical treatment of musculoskeletal system including bones, joints, ligaments, tendons, and muscles.', postnominals: 'FRCS(Orth), FAAOS (Fellow, American Academy of Orthopaedic Surgeons), MS Orthopaedics, MCh Orthopaedics', sub: 'Orthopedic Sports Medicine, Hand Surgery, Spine Surgery, Joint Replacement Surgery.' },
          { name: 'Pathology', desc: 'Diagnosis of disease through examination of tissues, organs, bodily fluids, and whole bodies.', postnominals: 'FRCPath, FCAP (Fellow, College of American Pathologists), MD Pathology, DNB Pathology', sub: 'Anatomic Pathology, Clinical Pathology, Forensic Pathology, Hematopathology, Dermatopathology, Neuropathology.' },
          { name: 'Pediatrics', desc: 'Medical care of infants, children, and adolescents from birth to young adulthood.', postnominals: 'FRCPCH, FAAP (Fellow, American Academy of Pediatrics), MD Pediatrics, DNB Pediatrics', sub: 'Neonatal-Perinatal Medicine, Pediatric Cardiology, Pediatric Critical Care, Pediatric Emergency Medicine, Pediatric Endocrinology, Pediatric Hematology-Oncology, and others.' },
          { name: 'Psychiatry', desc: 'Diagnosis, treatment, and prevention of mental health disorders and emotional disturbances.', postnominals: 'FRCPsych, FAPA (Fellow, American Psychiatric Association), MD Psychiatry, DNB Psychiatry', sub: 'Child and Adolescent Psychiatry, Addiction Psychiatry, Geriatric Psychiatry, Forensic Psychiatry, Consultation-Liaison Psychiatry.' },
          { name: 'Radiology', desc: 'Medical imaging to diagnose and treat diseases using various imaging modalities.', postnominals: 'FRCR (Fellow, Royal College of Radiologists), ABR (American Board of Radiology), MD Radiology, DNB Radiology', sub: 'Diagnostic Radiology, Interventional Radiology, Neuroradiology, Pediatric Radiology, Breast Imaging.' },
          { name: 'Surgery (General)', desc: 'Surgical treatment of abdominal organs, breast, skin, soft tissues, and trauma.', postnominals: 'FRCS (Fellow, Royal College of Surgeons), FACS (Fellow, American College of Surgeons), MS General Surgery, MCh Surgery', sub: 'Surgical Critical Care, Pediatric Surgery, Vascular Surgery, Thoracic Surgery.' },
        ].map((item) => (
          <div key={item.name}>
            <h4 className="font-medium text-gray-800">{item.name}</h4>
            <p className="text-gray-600 text-sm"><strong>Specialty</strong>: {item.desc}</p>
            <p className="text-gray-600 text-sm"><strong>Post-nominals</strong>: {item.postnominals}</p>
            <p className="text-gray-600 text-sm"><strong>Subspecialties</strong>: {item.sub}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional International Medical Qualifications by Region</h3>
      <div className="grid gap-6">
        {[
          { region: 'United Kingdom & Commonwealth', items: ['MRCP - Member, Royal College of Physicians', 'MRCGP - Member, Royal College of General Practitioners', 'MRCS - Member, Royal College of Surgeons', 'FRCR - Fellow, Royal College of Radiologists', 'FRCPath - Fellow, Royal College of Pathologists', 'FRCOG - Fellow, Royal College of Obstetricians and Gynaecologists', 'FRCA - Fellow, Royal College of Anaesthetists', 'FRCPCH - Fellow, Royal College of Paediatrics and Child Health', 'FRCPsych - Fellow, Royal College of Psychiatrists', 'FFPH - Fellow, Faculty of Public Health'] },
          { region: 'United States', items: ['ABMS Board Certifications - American Board of Medical Specialties', 'FACP - Fellow, American College of Physicians', 'FACS - Fellow, American College of Surgeons', 'FACOG - Fellow, American College of Obstetricians and Gynecologists', 'FAAP - Fellow, American Academy of Pediatrics', 'FAPA - Fellow, American Psychiatric Association', 'FAAFP - Fellow, American Academy of Family Physicians'] },
          { region: 'India', items: ['MS - Master of Surgery', 'MD - Doctor of Medicine', 'MCh - Magister Chirurgiae (Master of Surgery - Superspecialty)', 'DM - Doctorate of Medicine (Superspecialty)', 'DNB - Diplomate of National Board', 'FICP - Fellow, Indian College of Physicians'] },
          { region: 'Australia & New Zealand', items: ['FRACGP - Fellow, Royal Australian College of General Practitioners', 'FRACP - Fellow, Royal Australasian College of Physicians', 'FRACS - Fellow, Royal Australasian College of Surgeons', 'FANZCA - Fellow, Australian and New Zealand College of Anaesthetists', 'FRANZCOG - Fellow, Royal Australian and New Zealand College of Obstetricians and Gynaecologists'] },
          { region: 'Canada', items: ['FRCPC - Fellow, Royal College of Physicians of Canada', 'FRCSC - Fellow, Royal College of Surgeons of Canada', 'CCFP - Certificate of the College of Family Physicians of Canada'] },
        ].map(({ region, items }) => (
          <div key={region}>
            <h4 className="text-lg font-medium text-gray-800 mb-2">{region}</h4>
            <div className="grid gap-2 text-sm">
              {items.map((item) => {
                const [bold, ...rest] = item.split(' - ');
                return <div key={item}><strong>{bold}</strong>{rest.length ? ` - ${rest.join(' - ')}` : ''}</div>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Eligibility Summary</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#003366] text-white">
              <th className="border border-gray-300 p-3 text-left">Exam</th>
              <th className="border border-gray-300 p-3 text-left">Country</th>
              <th className="border border-gray-300 p-3 text-left">Key Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 p-3">USMLE</td><td className="border border-gray-300 p-3">USA</td><td className="border border-gray-300 p-3">School in WDOMS with ECFMG Sponsor Note</td></tr>
            <tr><td className="border border-gray-300 p-3">MCCQE</td><td className="border border-gray-300 p-3">Canada</td><td className="border border-gray-300 p-3">School in WDOMS with Canada Sponsor Note</td></tr>
            <tr><td className="border border-gray-300 p-3">PLAB/UKMLA</td><td className="border border-gray-300 p-3">UK</td><td className="border border-gray-300 p-3">School in WDOMS and GMC approval</td></tr>
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
      <p className="text-gray-600 mb-6">This section provides an overview of key nursing specialties and subspecialties, detailing their roles, responsibilities, and certification requirements. Information is accurate as of June 2025; consult relevant certification boards for updates.</p>
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
      <p className="text-gray-600 mb-6">This section outlines the nursing licensing exams required to practice as a nurse in various countries. Information is accurate as of June 2025; verify with official regulatory bodies for updates.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#003366] text-white">
              <th className="border border-gray-300 p-3 text-left">Country</th>
              <th className="border border-gray-300 p-3 text-left">Exam Name</th>
              <th className="border border-gray-300 p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 p-3">USA</td><td className="border border-gray-300 p-3">NCLEX-RN (for RNs), NCLEX-PN (for LPNs/VNs)</td><td className="border border-gray-300 p-3">National Council Licensure Examination assessing entry-level nursing competency.</td></tr>
            <tr><td className="border border-gray-300 p-3">UK</td><td className="border border-gray-300 p-3">NMC Test of Competence (ToC)</td><td className="border border-gray-300 p-3">For internationally educated nurses, includes Computer-Based Test (CBT) and OSCE.</td></tr>
            <tr><td className="border border-gray-300 p-3">Australia</td><td className="border border-gray-300 p-3">NCLEX-RN, OSCE</td><td className="border border-gray-300 p-3">NCLEX-RN assesses nursing knowledge; OSCE evaluates clinical skills.</td></tr>
            <tr><td className="border border-gray-300 p-3">Canada</td><td className="border border-gray-300 p-3">NCLEX-RN (for RNs), NCLEX-PN (for RPNs)</td><td className="border border-gray-300 p-3">Same as in the USA, administered by provincial regulatory bodies.</td></tr>
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
        The <a href="https://www.wdoms.org/" className="text-[#003366] hover:underline">World Directory of Medical Schools (WDOMS)</a> includes some pharmacy programs, but pharmacy education is primarily regulated by national bodies such as the Pharmacy Council of India (PCI), Accreditation Council for Pharmacy Education (ACPE), or equivalent. For international practice, a B.Pharm or Pharm.D degree must be recognized by the respective national pharmacy board, often requiring additional exams or certifications.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Country-Specific Licensing Requirements</h3>
      <p className="text-sm text-gray-500 mb-6"><strong>Note</strong>: The following information is accurate as of June 2025. For the most up-to-date requirements, please check the respective verification links.</p>
      <div className="grid gap-6">
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">USA (NAPLEX)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: Foreign-educated B.Pharm or Pharm.D graduates must obtain Foreign Pharmacy Graduate Examination Committee (FPGEC) Certification from NABP, which requires a 5-year pharmacy degree, TOEFL iBT, and passing the FPGEE.</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://nabp.pharmacy/programs/foreign-pharmacy/" className="text-[#003366] hover:underline">NABP FPGEC Certification</a></p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">Canada (PEBC Qualifying Exam)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: International graduates must pass the PEBC Evaluating Examination, followed by the PEBC Qualifying Examination. A one-year internship is required.</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://pebc.ca/" className="text-[#003366] hover:underline">Pharmacy Examining Board of Canada</a></p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">UK (OSPAP)</h4>
          <p className="text-gray-600 mb-2"><strong>Requirement</strong>: International graduates must complete a one-year Overseas Pharmacists' Assessment Programme (OSPAP), followed by 52 weeks of preregistration training.</p>
          <p className="text-gray-600"><strong>Verification</strong>: <a href="https://www.pharmacyregulation.org/registration/registering-pharmacist/overseas-non-eea-pharmacists" className="text-[#003366] hover:underline">GPhC - Overseas Pharmacists</a></p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Pharmacy Degree Pathways Comparison</h3>
      <p className="text-gray-600 mb-6">This comprehensive comparison outlines the key differences between major pharmacy degree programs worldwide, helping students choose the pathway that best aligns with their career goals.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-[#003366] text-white">
              <th className="border border-gray-300 p-3 text-left font-semibold">Feature</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">BPharm</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">MPharm (Integrated)</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">PharmD</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Typical Duration', '4 years', 'UK: 4 years; EU: 5 years in some countries', 'EU: 5 years; US/Canada: 6 years'],
              ['Entry Point', 'Direct from high school', 'Direct from high school', 'EU: Direct from high school; US/Canada: after pre-pharmacy coursework'],
              ['Academic Level', 'Undergraduate bachelor\'s degree', 'Undergraduate integrated master\'s', 'Professional doctorate (entry-level)'],
              ['Primary Focus', 'Pharmaceutical sciences, formulation, basic pharmacy practice', 'Balanced: science + clinical pharmacy + placements', 'Clinical pharmacy, patient care, therapeutics'],
              ['Clinical Exposure', 'Limited; usually final-year internship', 'Significant placements (UK: ~1,000 hours)', 'Extensive clinical rotations (US: ~1,740 hours)'],
              ['Licensing Outcome', 'Eligible for pharmacist registration in countries recognising BPharm', 'Meets EU Directive requirements for pharmacist registration', 'Meets national pharmacist registration requirements'],
              ['Common Regions', 'India, Pakistan, Nigeria, Malaysia, parts of Middle East', 'UK, Ireland, Australia, NZ, parts of EU', 'EU (Hungary, Poland), US, Canada, Japan, Saudi Arabia'],
            ].map(([feature, ...cols]) => (
              <tr key={feature}>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">{feature}</td>
                {cols.map((col, i) => <td key={i} className="border border-gray-300 p-3">{col}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
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
            <tr className="bg-[#003366] text-white">
              <th className="border border-gray-300 p-3 text-left">Exam</th>
              <th className="border border-gray-300 p-3 text-left">Country</th>
              <th className="border border-gray-300 p-3 text-left">Key Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 p-3">NAPLEX</td><td className="border border-gray-300 p-3">USA</td><td className="border border-gray-300 p-3">FPGEC Certification, 5-year degree, TOEFL iBT, FPGEE</td></tr>
            <tr><td className="border border-gray-300 p-3">PEBC Qualifying Exam</td><td className="border border-gray-300 p-3">Canada</td><td className="border border-gray-300 p-3">CCAPP-recognized degree, Evaluating Exam, internship</td></tr>
            <tr><td className="border border-gray-300 p-3">OSPAP</td><td className="border border-gray-300 p-3">UK</td><td className="border border-gray-300 p-3">GPhC-recognized degree, OSPAP course, training</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ProfessionalResources = () => {
  const [activeSubTab, setActiveSubTab] = useState('medical');

  const subTabs = [
    { key: 'medical', label: 'Medical Students & Graduates' },
    { key: 'nursing', label: 'Nursing Students & Graduates' },
    { key: 'pharmacy', label: 'Pharmacists' },
  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible">
      <div className="flex flex-wrap justify-center gap-1 bg-gray-100 p-1 rounded-xl mb-8">
        {subTabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveSubTab(key)}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              activeSubTab === key
                ? 'bg-[#003366] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeSubTab === 'medical' && <MedicalResources />}
          {activeSubTab === 'nursing' && <NursingResources />}
          {activeSubTab === 'pharmacy' && <PharmacyResources />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// Main Page
// ═══════════════════════════════════════════════════════════════════════════════

const topTabs = [
  { key: 'explorer', label: 'Career Explorer' },
  { key: 'quiz', label: 'Find Your Path' },
  { key: 'resources', label: 'Professional Resources' },
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('explorer');

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100">
          <motion.div
            className="containers text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="open-sans text-xs font-bold tracking-[0.2em] text-[#DAA520] uppercase mb-4 block">
              Medical Education Guild
            </span>
            <h1 className="playfair text-5xl md:text-6xl font-bold text-[#003366] mb-5 leading-tight">
              Career Guide
            </h1>
            <p className="open-sans text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Explore every path where your passion meets healthcare — whether you are drawn to the clinic, the code, the courtroom, or the construction site.
            </p>
            <div className="w-16 h-0.5 bg-[#DAA520] mx-auto" />
          </motion.div>
        </div>

        {/* Top Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
          <div className="containers py-0 lg:py-0" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <nav className="flex" aria-label="Page sections">
              {topTabs.map(({ key, label }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-6 py-4 text-sm font-semibold transition-colors duration-150 border-b-2 ${
                      isActive
                        ? 'text-[#003366] border-[#DAA520]'
                        : 'text-gray-500 border-transparent hover:text-[#003366]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="containers">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === 'explorer' && <CareerExplorer />}
              {activeTab === 'quiz' && <CareerQuiz />}
              {activeTab === 'resources' && <ProfessionalResources />}
            </motion.div>
          </AnimatePresence>
        </div>

        <CTAsecton />
      </div>
    </PageTransition>
  );
};

export default ResourcesPage;
