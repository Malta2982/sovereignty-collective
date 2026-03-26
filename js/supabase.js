// ── THE SOVEREIGNTY COLLECTIVE — Supabase Integration ──
// Project: btvaccofypcehaqxaxme
// URL: https://btvaccofypcehaqxaxme.supabase.co

const SUPABASE_URL  = 'https://btvaccofypcehaqxaxme.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmFjY29meXBjZWhhcXhheG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MzU2OTksImV4cCI6MjA4OTExMTY5OX0.55tDhqLFw4_fobaolaDVVPPn3lIh2JTOv86_tyV4syc';

// ── Generic REST call ──
async function sbInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON,
      'Authorization': `Bearer ${SUPABASE_ANON}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `HTTP ${res.status}`);
  }
  return res.json();
}

// ── Submit application ──
export async function submitApplication(formData) {
  return sbInsert('applications', {
    tier:          formData.tier,
    first_name:    formData.firstName,
    last_name:     formData.lastName,
    email:         formData.email,
    location:      formData.location || null,
    context:       formData.context,
    lang:          formData.lang || 'en',
    q1_reactions:  formData.q1,
    q2_moment:     formData.q2,
    q3_prior_work: formData.q3,
    q4_challenge:  formData.q4,
    q5_structure:  formData.q5,
    q6_readiness:  formData.q6,
    q7_interrupted: formData.q7,
    q8_if_declined: formData.q8,
    anything_else:  formData.anything || null,
    status:        'pending'
  });
}

// ── Add to waitlist ──
export async function addToWaitlist(email, firstName, context, lang, source) {
  return sbInsert('waitlist', {
    email,
    first_name: firstName || null,
    context:    context   || null,
    lang:       lang      || 'en',
    source:     source    || 'masterclass'
  });
}

// ── Track page view ──
export async function trackPageView(page, lang) {
  return sbInsert('page_views', {
    page,
    lang:       lang      || 'en',
    referrer:   document.referrer || null,
    user_agent: navigator.userAgent || null
  });
}
