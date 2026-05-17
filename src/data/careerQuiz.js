// Career discovery quiz for the MEG Career Guide
//
// Each option carries weights across multiple sectors so that no single
// answer locks the user into one path. Use computeResults() to derive
// percentage-match scores and the top sectors.

export const SECTORS = [
  'Clinical', 'Technology', 'Business', 'Finance',
  'Law', 'Engineering', 'Art', 'Construction',
];

export const sectorDisplayName = (s) => (s === 'Art' ? 'Art & Design' : s);

export const initialWeights = SECTORS.reduce((acc, s) => ({ ...acc, [s]: 0 }), {});

export const questions = [
  {
    question: 'Which school subjects do you genuinely enjoy spending time on?',
    helper: 'Pick the option that feels most natural — the subjects you reach for first.',
    options: [
      { label: 'Biology and Chemistry', weights: { Clinical: 3, Engineering: 1, Art: 1 } },
      { label: 'Mathematics and Physics', weights: { Engineering: 3, Technology: 2, Finance: 2, Construction: 1 } },
      { label: 'Computer Science', weights: { Technology: 4, Engineering: 1, Finance: 1 } },
      { label: 'Business Studies and Economics', weights: { Business: 4, Finance: 3 } },
      { label: 'Art, Design, or Technical Drawing', weights: { Art: 4, Construction: 2, Technology: 1 } },
      { label: 'Law, Politics, or Sociology', weights: { Law: 4, Business: 1 } },
      { label: 'English or Languages', weights: { Law: 2, Art: 2, Business: 1, Clinical: 1 } },
      { label: 'Geography or Environmental Science', weights: { Construction: 2, Engineering: 1, Business: 1 } },
    ],
  },
  {
    question: 'Which physical environment do you imagine yourself working in?',
    helper: 'Where do you want to be on a Wednesday morning?',
    options: [
      { label: 'A bustling hospital ward with patients and clinicians', weights: { Clinical: 4, Business: 1 } },
      { label: 'A quiet lab, workshop, or research facility', weights: { Engineering: 3, Technology: 2, Clinical: 1 } },
      { label: 'A modern office with screens, meetings, and dashboards', weights: { Business: 3, Finance: 3, Law: 2, Technology: 1 } },
      { label: 'A creative studio or design space', weights: { Art: 4, Technology: 1 } },
      { label: 'An active construction site or building project', weights: { Construction: 4, Engineering: 1 } },
      { label: 'A courtroom, chambers, or legal office', weights: { Law: 4 } },
      { label: 'Outdoors or in community settings', weights: { Clinical: 2, Construction: 2, Business: 1 } },
    ],
  },
  {
    question: 'When you finish a project, what gives you the most satisfaction?',
    helper: 'The end-of-project feeling that keeps you coming back.',
    options: [
      { label: 'Knowing a patient is healthier because of you', weights: { Clinical: 4 } },
      { label: 'Seeing your code or system used by thousands of people', weights: { Technology: 4, Engineering: 1 } },
      { label: 'Watching a team you led hit its targets', weights: { Business: 4, Law: 1, Construction: 1 } },
      { label: 'Closing the books with every number reconciled', weights: { Finance: 4, Business: 1 } },
      { label: 'Defending a position with a precise, well-built argument', weights: { Law: 4 } },
      { label: 'Building something elegant from raw materials', weights: { Engineering: 3, Construction: 2, Art: 2 } },
      { label: 'Watching people use a beautiful thing you designed', weights: { Art: 4, Technology: 1 } },
      { label: 'Standing in a finished building you helped create', weights: { Construction: 4 } },
    ],
  },
  {
    question: 'How do you most naturally approach a problem?',
    helper: 'Your first instinct when facing something new.',
    options: [
      { label: 'Talk to the people involved and gather their stories', weights: { Clinical: 3, Law: 2, Business: 1, Art: 1 } },
      { label: 'Break it into smaller logical pieces', weights: { Technology: 3, Engineering: 3, Finance: 1 } },
      { label: 'Sketch it out visually and look for patterns', weights: { Art: 3, Technology: 1, Construction: 1 } },
      { label: 'Build a model or run the numbers', weights: { Finance: 3, Technology: 1, Business: 1, Engineering: 1 } },
      { label: 'Research what others have done before', weights: { Law: 3, Clinical: 1, Business: 1 } },
      { label: 'Get hands-on and start prototyping', weights: { Engineering: 3, Construction: 2, Art: 1, Technology: 1 } },
    ],
  },
  {
    question: 'How close to patient care do you want to be?',
    helper: 'Some people want bedside; others want to shape the system that delivers care.',
    options: [
      { label: 'Right there at the bedside, every day', weights: { Clinical: 5 } },
      { label: 'Behind the scenes, but supporting clinicians directly', weights: { Technology: 2, Engineering: 2, Business: 2, Clinical: 1 } },
      { label: 'One step removed — designing the systems clinicians use', weights: { Technology: 3, Engineering: 2, Art: 1 } },
      { label: 'Setting the policies and rules that govern care', weights: { Law: 4, Business: 2 } },
      { label: 'Funding, costing, and resourcing care', weights: { Finance: 4, Business: 2 } },
      { label: 'Building the physical spaces where care happens', weights: { Construction: 4, Engineering: 1, Art: 1 } },
    ],
  },
  {
    question: 'Under pressure, what do you do?',
    helper: 'Honestly — not how you wish you behaved.',
    options: [
      { label: 'Make rapid decisions with incomplete information', weights: { Clinical: 3, Law: 1, Business: 2 } },
      { label: 'Work systematically through the logic', weights: { Technology: 3, Engineering: 3, Finance: 2 } },
      { label: 'Step back and look at the bigger picture', weights: { Business: 3, Law: 2, Construction: 1 } },
      { label: 'Trust the numbers and stick to the plan', weights: { Finance: 3, Engineering: 1, Construction: 1 } },
      { label: 'Get more creative and improvise', weights: { Art: 4, Clinical: 1 } },
      { label: 'Get hands-on and start fixing things', weights: { Engineering: 3, Construction: 2, Technology: 1, Clinical: 1 } },
    ],
  },
  {
    question: 'Do you prefer working alone or with others?',
    helper: 'Both can shape a healthcare career — answer for what energises you.',
    options: [
      { label: 'I thrive in big cross-functional teams', weights: { Clinical: 2, Business: 3, Construction: 2 } },
      { label: 'I like leading a team I trust', weights: { Business: 3, Clinical: 2, Construction: 1, Engineering: 1 } },
      { label: 'I prefer one-to-one client or patient work', weights: { Clinical: 3, Law: 2, Art: 2 } },
      { label: 'I do my best work alone but check in often', weights: { Technology: 3, Finance: 3, Art: 2, Engineering: 1 } },
      { label: 'I want long stretches of solo deep work', weights: { Technology: 2, Art: 3, Finance: 2, Law: 1 } },
    ],
  },
  {
    question: 'Which skills do you most want to develop?',
    helper: 'The capabilities that excite you to spend years getting good at.',
    options: [
      { label: 'Clinical assessment, diagnosis, and treatment', weights: { Clinical: 5 } },
      { label: 'Coding, data, and machine learning', weights: { Technology: 5 } },
      { label: 'Strategy, leadership, and stakeholder management', weights: { Business: 5 } },
      { label: 'Financial modelling and quantitative analysis', weights: { Finance: 5 } },
      { label: 'Legal reasoning, drafting, and advocacy', weights: { Law: 5 } },
      { label: 'Engineering design and physical prototyping', weights: { Engineering: 5 } },
      { label: 'Visual design, illustration, or creative storytelling', weights: { Art: 5 } },
      { label: 'Architectural planning and project delivery', weights: { Construction: 5 } },
    ],
  },
  {
    question: 'When you hear about a major healthcare problem, your first instinct is to…',
    helper: 'Imagine the news headline: "NHS waiting lists at record high." What angle attracts you?',
    options: [
      { label: 'Roll up your sleeves and treat the patients in front of you', weights: { Clinical: 4 } },
      { label: 'Build a tool or system that helps clinicians cope', weights: { Technology: 3, Engineering: 2 } },
      { label: 'Look at the operational and organisational fixes', weights: { Business: 4 } },
      { label: 'Examine the funding and incentive structure', weights: { Finance: 4, Business: 1 } },
      { label: 'Look at the regulations and accountability mechanisms', weights: { Law: 4 } },
      { label: 'Investigate the equipment, devices, and supplies', weights: { Engineering: 3, Technology: 1 } },
      { label: 'Look at how communication and patient education failed', weights: { Art: 3, Clinical: 1 } },
      { label: 'Look at the buildings, layout, and physical access', weights: { Construction: 4, Art: 1 } },
    ],
  },
  {
    question: 'How do you feel about long stretches of study and research?',
    helper: 'Different paths demand different rhythms of learning and doing.',
    options: [
      { label: 'I love it — I would happily do a PhD', weights: { Technology: 2, Engineering: 2, Clinical: 1, Finance: 1, Law: 1 } },
      { label: 'I prefer applied learning to academic study', weights: { Construction: 3, Business: 2, Clinical: 1, Engineering: 1 } },
      { label: 'I want a mix of theory and immediate practice', weights: { Clinical: 2, Engineering: 2, Law: 1, Business: 1, Technology: 1 } },
      { label: 'I would rather spend my time designing or making', weights: { Art: 3, Construction: 2, Engineering: 2, Technology: 1 } },
    ],
  },
  {
    question: 'Which topic would you most willingly read about for hours?',
    helper: 'The book you would buy on impulse.',
    options: [
      { label: 'Anatomy, physiology, or how the body works', weights: { Clinical: 4, Engineering: 1 } },
      { label: 'AI, software, and how machines learn', weights: { Technology: 4 } },
      { label: 'Business strategy and how companies grow', weights: { Business: 4, Finance: 2 } },
      { label: 'Investment, markets, and how money flows', weights: { Finance: 4 } },
      { label: 'Ethics, philosophy, and how we should act', weights: { Law: 3, Clinical: 1, Business: 1 } },
      { label: 'Bridges, engines, and how things are built', weights: { Engineering: 3, Construction: 2 } },
      { label: 'Typography, photography, or design history', weights: { Art: 4 } },
      { label: 'Architecture, urban planning, or interiors', weights: { Construction: 3, Art: 2 } },
    ],
  },
  {
    question: 'Imagine you have £10,000 to start a healthcare project. You spend it on…',
    helper: 'A snapshot of how you would naturally turn money into impact.',
    options: [
      { label: 'Training to volunteer at a free clinic', weights: { Clinical: 3 } },
      { label: 'Building a prototype health-tech app', weights: { Technology: 3, Business: 1 } },
      { label: 'Market research for a healthcare startup', weights: { Business: 3, Finance: 1 } },
      { label: 'Investing in a promising medtech company', weights: { Finance: 3 } },
      { label: 'Funding a strategic legal case for patients', weights: { Law: 3 } },
      { label: 'Buying lab equipment to test a device idea', weights: { Engineering: 3 } },
      { label: 'Producing a public health communication campaign', weights: { Art: 3, Business: 1 } },
      { label: 'Materials to renovate a community health space', weights: { Construction: 3 } },
    ],
  },
  {
    question: 'What is your relationship with detail versus the big picture?',
    helper: 'Most jobs need both, but you naturally lean one way.',
    options: [
      { label: 'I obsess over the smallest detail — accuracy matters', weights: { Clinical: 2, Engineering: 2, Finance: 2, Law: 1, Technology: 1 } },
      { label: 'I want to see the whole landscape and the long horizon', weights: { Business: 3, Construction: 2, Law: 1, Finance: 1 } },
      { label: 'I love translating big ideas into beautiful detail', weights: { Art: 3, Construction: 1, Technology: 1 } },
      { label: 'I balance both — switching as the problem demands', weights: { Clinical: 1, Business: 2, Engineering: 1, Law: 1, Technology: 1 } },
    ],
  },
  {
    question: 'What would you most want said about your career in thirty years?',
    helper: 'Your future legacy in one sentence.',
    options: [
      { label: 'They treated thousands of patients with skill and care', weights: { Clinical: 5 } },
      { label: 'They built tools that became part of how healthcare works', weights: { Technology: 4, Engineering: 2 } },
      { label: 'They built and ran an organisation that improved millions of lives', weights: { Business: 5, Construction: 1 } },
      { label: 'They made healthcare more affordable and sustainable', weights: { Finance: 4, Business: 1 } },
      { label: 'They changed the rules so patients were better protected', weights: { Law: 5 } },
      { label: 'They invented devices that saved or changed lives', weights: { Engineering: 5 } },
      { label: 'They communicated health ideas so clearly that behaviour changed', weights: { Art: 4, Clinical: 1 } },
      { label: 'They built hospitals that healed people just by being well-designed', weights: { Construction: 5, Art: 1 } },
    ],
  },
];

// Compute max possible score per sector (assumes user picks the best option for that sector on every question)
export const maxPerSector = SECTORS.reduce((acc, sector) => {
  acc[sector] = questions.reduce((sum, q) => {
    const bestForSector = Math.max(0, ...q.options.map((o) => o.weights[sector] || 0));
    return sum + bestForSector;
  }, 0);
  return acc;
}, {});

// Convert raw weights to percentages and rank sectors
export function computeResults(rawWeights) {
  const percentages = SECTORS.map((sector) => {
    const raw = rawWeights[sector] || 0;
    const max = maxPerSector[sector] || 1;
    return { sector, raw, percent: Math.round((raw / max) * 100) };
  });
  // Sort by raw score (not percentage — percentage can be tied at 0%)
  percentages.sort((a, b) => b.raw - a.raw || b.percent - a.percent);
  return percentages;
}
