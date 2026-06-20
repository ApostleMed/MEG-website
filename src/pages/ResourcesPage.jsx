import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTAsecton from '../components/Home/CTAsecton';
import { careers } from '../data/careers';
import { questions, initialWeights, computeResults, sectorDisplayName } from '../data/careerQuiz';


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


const QuizRecommendationCard = ({ career }) => {
  const cfg = sectorConfig[career.sector] || sectorConfig.Clinical;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-[#003366]/40 transition-all">
      <h4 className="playfair text-sm font-bold text-[#003366] mb-1 leading-snug">{career.title}</h4>
      <p className="text-xs text-gray-500 italic line-clamp-2">{career.tagline}</p>
    </div>
  );
};

// Google Apps Script endpoint that emails quiz submissions to MEG
const QUIZ_RESULTS_URL = 'https://script.google.com/macros/s/AKfycbx3kfiQAw2GHP6MrYCeY3datMq1ALjXjP4BvYiTmkn1Dd3PtIM6YvVDNx6GEdVqyu9z/exec';

// Deterministic shuffle so the same answers yield the same recommendations
const seededShuffle = (arr, seed) => {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const CareerQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [weights, setWeights] = useState({ ...initialWeights });
  const [answers, setAnswers] = useState([]); // history for back navigation
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState([]);
  const [recommendedBySector, setRecommendedBySector] = useState({});

  // Save-results form state
  const [saveName, setSaveName] = useState('');
  const [saveAge, setSaveAge] = useState('');
  const [saveEmail, setSaveEmail] = useState('');
  const [saveErrors, setSaveErrors] = useState({});
  const [saveSubmitting, setSaveSubmitting] = useState(false);
  const [saveSubmitted, setSaveSubmitted] = useState(false);

  const progress = ((current) / questions.length) * 100;

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    if (!selected) return;

    const newWeights = { ...weights };
    Object.entries(selected.weights).forEach(([sector, pts]) => {
      newWeights[sector] = (newWeights[sector] || 0) + pts;
    });
    setWeights(newWeights);
    setAnswers((prev) => [...prev, selected]);

    if (current < questions.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      // Compute results — percentage match per sector
      const ranked = computeResults(newWeights);
      setResults(ranked);

      // Pick 3 careers per top sector, deterministic but seeded by answers
      const seed = Object.values(newWeights).reduce((acc, v, i) => acc + v * (i + 1) * 7, 1);
      const picks = {};
      ranked.slice(0, 3).forEach(({ sector }) => {
        const pool = careers.filter((c) => c.sector === sector);
        picks[sector] = seededShuffle(pool, seed + sector.length).slice(0, 3);
      });
      setRecommendedBySector(picks);
      setDone(true);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      // Roll back the last answer's weight contribution
      const last = answers[answers.length - 1];
      const rolled = { ...weights };
      if (last) {
        Object.entries(last.weights).forEach(([sector, pts]) => {
          rolled[sector] = (rolled[sector] || 0) - pts;
        });
      }
      setWeights(rolled);
      setAnswers((prev) => prev.slice(0, -1));
      setDirection(-1);
      setCurrent((c) => c - 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setWeights({ ...initialWeights });
    setAnswers([]);
    setDone(false);
    setResults([]);
    setRecommendedBySector({});
    setSaveName('');
    setSaveAge('');
    setSaveEmail('');
    setSaveErrors({});
    setSaveSubmitted(false);
  };

  const handleSaveResults = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!saveName.trim()) errs.name = 'Required';
    const ageNum = parseInt(saveAge, 10);
    if (!saveAge || Number.isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
      errs.age = 'Please enter a valid age';
    }
    if (saveEmail.trim() && !/\S+@\S+\.\S+/.test(saveEmail)) {
      errs.email = 'Please enter a valid email';
    }
    if (Object.keys(errs).length) {
      setSaveErrors(errs);
      return;
    }
    setSaveErrors({});
    setSaveSubmitting(true);

    // Build a clean summary of the results
    const top3 = results.slice(0, 3);
    const sectorSummary = top3
      .map(({ sector, percent }, i) => `${i + 1}. Healthcare + ${sectorDisplayName(sector)} — ${percent}% match`)
      .join('\n');
    const careersSummary = top3
      .map(({ sector }) => {
        const picks = (recommendedBySector[sector] || []).map((c) => `   • ${c.title}`).join('\n');
        return `Healthcare + ${sectorDisplayName(sector)}:\n${picks}`;
      })
      .join('\n\n');

    try {
      const params = new URLSearchParams({
        name: saveName.trim(),
        age: String(ageNum),
        email: saveEmail.trim(),
        topSectors: sectorSummary,
        recommendedCareers: careersSummary,
        submittedAt: new Date().toISOString(),
      });
      await fetch(QUIZ_RESULTS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      setSaveSubmitted(true);
    } catch {
      setSaveErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSaveSubmitting(false);
    }
  };

  // ── Capture form: shown after Q14 is answered, before results are revealed ──
  if (done && !saveSubmitted) {
    return (
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-full bg-[#DAA520]/20 items-center justify-center mb-4">
            <svg className="w-7 h-7 text-[#DAA520]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-3">Almost There</h2>
          <p className="text-gray-600">
            Enter your details below to see your personalised career match. Your results will be sent to the MEG team so we can follow up with tailored guidance.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#003366] to-[#002244] text-white rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSaveResults} noValidate className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  value={saveName}
                  onChange={(e) => { setSaveName(e.target.value); if (saveErrors.name) setSaveErrors({ ...saveErrors, name: '' }); }}
                  placeholder="Your full name"
                  className={`w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition ${saveErrors.name ? 'ring-2 ring-red-400' : ''}`}
                />
                {saveErrors.name && <p className="text-red-300 text-xs mt-1">{saveErrors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">Age *</label>
                <input
                  type="number"
                  value={saveAge}
                  onChange={(e) => { setSaveAge(e.target.value); if (saveErrors.age) setSaveErrors({ ...saveErrors, age: '' }); }}
                  placeholder="e.g. 17"
                  min={5}
                  max={100}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition ${saveErrors.age ? 'ring-2 ring-red-400' : ''}`}
                />
                {saveErrors.age && <p className="text-red-300 text-xs mt-1">{saveErrors.age}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">Email <span className="font-normal text-blue-300 normal-case">(optional — for us to reply to you)</span></label>
              <input
                type="email"
                value={saveEmail}
                onChange={(e) => { setSaveEmail(e.target.value); if (saveErrors.email) setSaveErrors({ ...saveErrors, email: '' }); }}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition ${saveErrors.email ? 'ring-2 ring-red-400' : ''}`}
              />
              {saveErrors.email && <p className="text-red-300 text-xs mt-1">{saveErrors.email}</p>}
            </div>
            {saveErrors.submit && <p className="text-red-300 text-sm">{saveErrors.submit}</p>}
            <button
              type="submit"
              disabled={saveSubmitting}
              className="w-full bg-[#DAA520] text-white font-semibold px-7 py-3.5 rounded-lg hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              {saveSubmitting ? 'Revealing your results…' : 'See My Results'}
              {!saveSubmitting && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Your details are private and used only by the MEG team to follow up.
        </p>
      </motion.div>
    );
  }

  // ── Results screen: shown only after form has been submitted ──
  if (done && saveSubmitted) {
    const top3 = results.slice(0, 3);
    return (
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex w-14 h-14 rounded-full bg-[#DAA520]/20 items-center justify-center mb-4">
            <svg className="w-7 h-7 text-[#DAA520]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-3">Your Path is Taking Shape</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Thank you, {saveName}. Based on your fourteen answers, here are the three healthcare sectors where your interests and strengths line up most closely — and three careers in each to explore. Our team has received your results and will be in touch.
          </p>
        </div>

        {/* Sector match bars */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
          <h3 className="text-xs uppercase tracking-widest text-[#DAA520] font-semibold mb-4">Your Sector Match</h3>
          <div className="space-y-4">
            {top3.map(({ sector, percent }, i) => {
              const cfg = sectorConfig[sector] || sectorConfig.Clinical;
              return (
                <div key={sector}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#003366]">
                      <span className="inline-block w-6 text-gray-400">{i + 1}.</span>
                      Healthcare + {sectorDisplayName(sector)}
                    </span>
                    <span className="text-sm font-bold text-[#003366]">{percent}% match</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.9, delay: 0.15 * i, ease: 'easeOut' }}
                      className={`h-full rounded-full ${cfg.color.split(' ')[0]}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career recommendations grouped by top sector */}
        <div className="space-y-8 mb-10">
          {top3.map(({ sector }) => {
            const cfg = sectorConfig[sector] || sectorConfig.Clinical;
            const picks = recommendedBySector[sector] || [];
            return (
              <div key={sector}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${cfg.color}`}>
                    Healthcare + {sectorDisplayName(sector)}
                  </span>
                  <span className="text-xs text-gray-400">3 careers to explore</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {picks.map((c) => (
                    <QuizRecommendationCard key={c.id} career={c} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-gray-500">
            Want to see every career in these sectors? Switch to the <span className="font-semibold text-[#003366]">Career Explorer</span> tab and filter by sector.
          </p>
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
          <h2 className="playfair text-2xl font-bold text-[#003366] mb-2 leading-snug">{q.question}</h2>
          {q.helper && (
            <p className="text-sm text-gray-500 mb-6 italic">{q.helper}</p>
          )}

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
          {current === questions.length - 1 ? 'Continue' : 'Next'}
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
