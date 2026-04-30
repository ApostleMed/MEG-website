import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTAsecton from '../components/Home/CTAsecton';

/* ─────────────────────────────────────────────
   SVG Icons (no emoji slop)
───────────────────────────────────────────── */
const IconBook = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const IconHeart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconPen = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IconUser = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconSchool = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
const IconChevronDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
const IconSend = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
const IconWhatsApp = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

/* ─────────────────────────────────────────────
   Terms Accordion
───────────────────────────────────────────── */
const TermsAccordion = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f9f7f3] transition"
      >
        <span className="font-semibold text-[#003366] text-sm">{item.title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0 ml-4 text-gray-400"
        >
          <IconChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Google Apps Script web-app endpoint
   Replace with your deployed URL after setup
───────────────────────────────────────────── */
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4mitN0NL39gRnpaChSWd1HlE3uJefUBRGZnJoadoUt6pdiiZl9HDpa2rjztDkM0In/exec';

/* ─────────────────────────────────────────────
   Interest / Application Form
───────────────────────────────────────────── */
const InterestForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    school: '', grade: '', career: '', hear: '', statement: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.school.trim()) e.school = 'Required';
    if (!form.grade) e.grade = 'Required';
    if (!form.statement.trim() || form.statement.trim().length < 30) e.statement = 'Please write at least 30 characters';
    if (!form.agreed) e.agreed = 'You must agree to the Terms & Conditions to apply';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setSubmitError('');

    try {
      // POST to Google Apps Script — no-cors so the request fires even if
      // the browser can't read the response (opaque). Data still lands in the sheet.
      const params = new URLSearchParams({
        name:      form.name,
        email:     form.email,
        phone:     form.phone,
        country:   form.country,
        school:    form.school,
        grade:     form.grade,
        career:    form.career,
        hear:      form.hear,
        statement: form.statement,
      });
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-[#003366] flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#DAA520]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#003366] mb-3">Application Sent</h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          Thank you for your interest. A member of our team will be in touch shortly via WhatsApp.
        </p>
      </motion.div>
    );
  }

  const field = (name, label, icon, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-semibold text-[#003366] mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition ${errors[name] ? 'border-red-400' : 'border-gray-200'}`}
        />
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  const selectField = (name, label, icon, options) => (
    <div>
      <label className="block text-sm font-semibold text-[#003366] mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <select
          name={name}
          value={form[name]}
          onChange={handleChange}
          className={`w-full pl-11 pr-8 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DAA520] appearance-none transition ${errors[name] ? 'border-red-400' : 'border-gray-200'}`}
        >
          <option value="">Select…</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><IconChevronDown /></span>
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        {field('name', 'Full Name *', <IconUser />, 'text', 'Your full name')}
        {field('email', 'Email Address *', <IconMail />, 'email', 'you@example.com')}
        {field('phone', 'Phone / WhatsApp', <IconPhone />, 'tel', '+1 234 567 8900')}
        {field('country', 'Country', <IconGlobe />, 'text', 'e.g. Myanmar, Thailand…')}
        {field('school', 'School / Institution *', <IconSchool />, 'text', 'Your current school')}
        {selectField('grade', 'Grade / Year *', <IconBook />, [
          'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
          'Recent Graduate (< 1 year)', 'Other'
        ])}
        {selectField('career', 'Intended Healthcare Career', <IconStar />, [
          'Medicine (MBBS / MD)', 'Dentistry', 'Pharmacy', 'Nursing',
          'Biomedical Science', 'Physiotherapy', 'Public Health', 'Other'
        ])}
        {selectField('hear', 'How did you hear about us?', <IconHeart />, [
          'Social Media', 'School / Teacher', 'Friend / Family',
          'MEG Partner Organisation', 'Online Search', 'Other'
        ])}
      </div>

      <div className="mt-5">
        <label className="block text-sm font-semibold text-[#003366] mb-1.5">
          Personal Statement * <span className="font-normal text-gray-400">(Why do you want to be an Oathkeeper?)</span>
        </label>
        <textarea
          name="statement"
          value={form.statement}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your motivation, any relevant experience, and what ethical healthcare means to you…"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition resize-none ${errors.statement ? 'border-red-400' : 'border-gray-200'}`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.statement
            ? <p className="text-red-500 text-xs">{errors.statement}</p>
            : <span />
          }
          <span className="text-xs text-gray-400">{form.statement.length} chars</span>
        </div>
      </div>

      {/* T&C agreement */}
      <div className="mt-6">
        <label className={`flex items-start gap-3 cursor-pointer group ${errors.agreed ? 'text-red-500' : 'text-gray-600'}`}>
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition peer-focus:ring-2 peer-focus:ring-[#DAA520] ${form.agreed ? 'bg-[#003366] border-[#003366]' : errors.agreed ? 'border-red-400' : 'border-gray-300 group-hover:border-[#003366]'}`}>
              {form.agreed && <IconCheck />}
            </div>
          </div>
          <span className="text-sm leading-relaxed">
            I have read and agree to the{' '}
            <a
              href="#terms"
              onClick={e => { e.preventDefault(); document.getElementById('terms-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="underline text-[#003366] hover:text-[#DAA520] transition"
            >
              Terms &amp; Conditions
            </a>{' '}
            of the Oathkeeper Scholarship, including the 85% academic performance requirement. *
          </span>
        </label>
        {errors.agreed && <p className="text-red-500 text-xs mt-2 ml-8">{errors.agreed}</p>}
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
      )}

      <div className="mt-7 flex flex-col sm:flex-row gap-4 items-center">
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={loading ? {} : { scale: 1.03 }}
          whileTap={loading ? {} : { scale: 0.97 }}
          className={`flex items-center gap-2.5 font-semibold px-8 py-3.5 rounded-full shadow-lg transition ${
            loading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#003366] text-white hover:shadow-xl'
          }`}
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              <IconSend />
              Submit Application
            </>
          )}
        </motion.button>
        <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
          Your application will be saved securely and our team will respond within 5 business days.
        </p>
      </div>
    </form>
  );
};

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const ScholarshipPage = () => {
  const eligibility = [
    {
      icon: <IconBook />,
      title: 'Academic Status',
      desc: 'Current high school students or recent graduates intending to pursue a career in medicine or another healthcare profession.',
    },
    {
      icon: <IconHeart />,
      title: 'Character & Dedication',
      desc: 'Clear, demonstrable evidence of long-term motivation, integrity, and commitment to the healthcare field.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Written Submission',
      desc: 'A motivation essay demonstrating your commitment to ethical healthcare and why you embody the Oathkeeper spirit.',
    },
    {
      step: '02',
      title: 'Personal Interview',
      desc: 'A one-on-one conversation to assess your values, purpose, and readiness for a career in healthcare.',
    },
    {
      step: '03',
      title: 'Reflective Activity',
      desc: 'A structured exercise evaluating your ethical reasoning, empathy, and sense of responsibility.',
    },
  ];

  const conditions = [
    'Maintain active involvement in MEG programmes',
    'Embody the core values promoted by the Guild',
    'Mentor and support younger peers when possible',
    'Participate in community healthcare education initiatives',
    'Uphold academic integrity and ethical conduct',
    'Remain committed to healthcare professionalism throughout your studies',
    'Maintain a minimum academic score of 85% in MEG-granted institutions at all times',
  ];

  const terms = [
    {
      title: '1. Award & Nature of the Scholarship',
      body: 'The Oathkeeper Scholarship is a merit-based, non-monetary award granted by the Medical Education Guild (MEG). The scholarship does not constitute a financial grant or bursary unless explicitly stated in a separate award letter. MEG reserves the right to determine the form and value of any associated benefits at its sole discretion.',
    },
    {
      title: '2. Eligibility & Verification',
      body: 'Applicants must be current high school students or recent graduates with a clear intention to pursue a career in medicine or another healthcare profession. MEG reserves the right to request supporting documentation — including but not limited to academic transcripts, school enrolment letters, and identification — to verify eligibility at any stage of the application process.',
    },
    {
      title: '3. Academic Performance Requirement',
      body: 'Recipients are required to maintain a minimum academic score of 85% (or equivalent grade) in their enrolled institution throughout the duration of the award. Failure to meet this threshold may result in suspension or permanent revocation of the scholarship, at MEG\'s discretion. Recipients must provide updated academic records upon request.',
    },
    {
      title: '4. Selection Process',
      body: 'Selection is conducted by a panel appointed by MEG and is based on the written submission, personal interview, and reflective activity. MEG\'s decision is final and binding. No correspondence regarding the outcome of unsuccessful applications will be entered into.',
    },
    {
      title: '5. Conduct & Representation',
      body: 'Recipients are considered ambassadors of the Oathkeeper standard and are expected to conduct themselves with integrity, professionalism, and compassion at all times — both in academic settings and in public, including on social media. Any conduct deemed by MEG to be contrary to these values may result in immediate revocation of the award.',
    },
    {
      title: '6. Obligations of the Recipient',
      body: 'Recipients agree to: (a) remain actively engaged in MEG programmes and events; (b) mentor younger peers where feasible; (c) participate in community healthcare education initiatives as directed by MEG; and (d) provide honest and timely updates on their academic progress when requested.',
    },
    {
      title: '7. Revocation',
      body: 'MEG reserves the right to revoke the scholarship at any time if a recipient: (a) fails to maintain the required academic standard; (b) provides false or misleading information during the application process; (c) engages in conduct unbecoming of an Oathkeeper; or (d) withdraws from their intended healthcare programme without prior notification to MEG.',
    },
    {
      title: '8. Privacy & Data',
      body: 'Personal information submitted as part of the application will be used solely for the purposes of administering the Oathkeeper Scholarship programme. MEG will not share applicant data with third parties without explicit consent, except where required by law. By submitting this form, applicants consent to MEG contacting them via the channels provided.',
    },
    {
      title: '9. Amendments',
      body: 'MEG reserves the right to amend these terms and conditions at any time. Recipients and applicants will be notified of material changes. Continued participation in the programme following notification constitutes acceptance of the revised terms.',
    },
    {
      title: '10. Governing Law',
      body: 'These terms and conditions are governed by and construed in accordance with applicable law. Any disputes arising in connection with the Oathkeeper Scholarship shall be subject to the exclusive jurisdiction of MEG\'s governing body.',
    },
  ];

  const spirit = [
    { title: 'Ethical', desc: 'Guided by principle in every decision' },
    { title: 'Reflective', desc: 'Continuously learning and growing' },
    { title: 'Compassionate', desc: 'Putting patients and people first' },
    { title: 'Committed', desc: 'Unwavering in purpose and practice' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="bg-[#003366] text-white">
          <div className="max-w-5xl mx-auto px-5 md:px-10 py-24 md:py-32 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#DAA520] uppercase tracking-widest text-sm font-semibold mb-5"
            >
              Medical Education Guild
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="playfair text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              The Oathkeeper Scholarship
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Honouring the next generation of ethical, compassionate, and committed healthcare professionals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="h-px w-24 bg-[#DAA520] mx-auto"
            />
          </div>
        </div>

        {/* ── Quote ── */}
        <div className="bg-[#f9f7f3] border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-5 py-14 text-center">
            <p className="playfair text-2xl md:text-3xl text-[#003366] italic leading-relaxed">
              "First, do no harm."
            </p>
            <p className="mt-4 text-sm text-gray-500 tracking-wide uppercase">
              Hippocratic Oath — the timeless foundation of ethical medicine
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0">

          {/* ── About the Scholarship ── */}
          <motion.section
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="py-20 border-b border-gray-100"
          >
            <p className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">About</p>
            <h2 className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-6">
              What Is the Oathkeeper Scholarship?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Established by the Medical Education Guild (MEG), the Oathkeeper Scholarship is a merit-based award
              designed to support high school students who demonstrate an unwavering commitment to becoming ethical
              and impactful healthcare professionals. It is more than financial assistance — it is a recognition of
              character, purpose, and the courage to choose a life of service.
            </p>
          </motion.section>

          {/* ── Eligibility ── */}
          <motion.section
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20 border-b border-gray-100"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Eligibility</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-10">
              Who Can Apply?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {eligibility.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="border border-gray-200 rounded-2xl p-7 hover:border-[#DAA520] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#003366] flex items-center justify-center text-[#DAA520] mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Selection Process ── */}
          <motion.section
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20 border-b border-gray-100"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Process</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Selection Process
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-12 max-w-2xl">
              All candidates complete a comprehensive multi-stage process organised by MEG.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-6">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex-1 relative pl-6 border-l-2 border-[#DAA520] md:border-l-0 md:border-t-2 md:pt-6 md:pl-0"
                >
                  <span className="text-[#DAA520] font-bold text-3xl leading-none block mb-3">{item.step}</span>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Scholarship Conditions ── */}
          <motion.section
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20 border-b border-gray-100"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Conditions</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-10">
              Scholarship Expectations
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {conditions.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#f9f7f3]"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DAA520] text-white flex items-center justify-center mt-0.5">
                    <IconCheck />
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Oathkeeper Spirit ── */}
          <motion.section
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20 border-b border-gray-100"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Values</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              The Oathkeeper Spirit
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-12 max-w-2xl">
              Awardees carry the spirit of the Oathkeeper — contributing to the MEG community and spreading
              the vision of healthcare as a lifelong civic and moral duty.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {spirit.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl border border-gray-200 hover:border-[#003366] hover:bg-[#003366] transition-all duration-300 cursor-default"
                >
                  <h3 className="font-bold text-[#003366] group-hover:text-[#DAA520] text-lg mb-2 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 group-hover:text-blue-200 text-sm transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Terms & Conditions ── */}
          <motion.section
            id="terms-section"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20 border-b border-gray-100"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Legal</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-3">
              Terms &amp; Conditions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-10 max-w-2xl">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.
              By applying for the Oathkeeper Scholarship you confirm that you have read, understood, and agreed to the following terms.
            </motion.p>

            <div className="space-y-0 border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
              {terms.map((item, i) => (
                <TermsAccordion key={i} item={item} />
              ))}
            </div>
          </motion.section>

          {/* ── Interest Form ── */}
          <motion.section
            id="apply"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="py-20"
          >
            <motion.p variants={fadeUp} className="text-[#DAA520] uppercase tracking-widest text-xs font-semibold mb-4">Apply</motion.p>
            <motion.h2 variants={fadeUp} className="playfair text-3xl md:text-4xl font-bold text-[#003366] mb-3">
              Express Your Interest
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-10 max-w-2xl">
              Fill in the form below and your application will be sent directly to our team via WhatsApp.
              We review all applications and respond within 5 business days.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-10"
            >
              <InterestForm />
            </motion.div>
          </motion.section>

        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="bg-[#003366]">
          <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <p className="playfair text-2xl font-bold mb-1">Have questions?</p>
              <p className="text-blue-200 text-sm">Our team is available to guide you through the process.</p>
            </div>
            <a
              href="https://wa.me/message/3HRH775DRT42A1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#DAA520] text-white font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition whitespace-nowrap"
            >
              <IconWhatsApp />
              Chat with Us
            </a>
          </div>
        </div>

      </div>
      <CTAsecton />
    </PageTransition>
  );
};

export default ScholarshipPage;
