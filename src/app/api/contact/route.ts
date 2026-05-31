import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  sessionType?: string;
  preferredLocation?: string;
  message?: string;
  howDidYouHear?: string;
  // Honeypot field — should always be empty for real users.
  company?: string;
}

const SESSION_LABELS: Record<string, string> = {
  maternity: 'Maternity',
  newborn: 'Newborn',
  milestone: 'Milestone',
  'cake-smash': 'Cake Smash',
  'mini-session': 'Mini Session',
  family: 'Family',
  children: 'Children',
  other: 'Other',
};

const HEARD_LABELS: Record<string, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  google: 'Google',
  'word-of-mouth': 'Word of Mouth',
  'returning-client': 'Returning Client',
  other: 'Other',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending anything.
  if (body.company && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const sessionType = (body.sessionType ?? '').trim();
  const preferredLocation = (body.preferredLocation ?? '').trim();
  const howDidYouHear = (body.howDidYouHear ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error('Contact form is not configured: missing SMTP2GO env vars.');
    return NextResponse.json(
      { error: 'The contact form is not configured yet. Please email directly.' },
      { status: 500 }
    );
  }

  const sessionLabel = SESSION_LABELS[sessionType] ?? sessionType ?? 'Not specified';
  const heardLabel = HEARD_LABELS[howDidYouHear] ?? howDidYouHear;

  const textBody = [
    `New inquiry from photobytiff.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Session type: ${sessionLabel || 'Not specified'}`,
    `Preferred location: ${preferredLocation || 'Not provided'}`,
    `How they heard: ${heardLabel || 'Not provided'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  const htmlBody = `
    <h2 style="font-family:sans-serif;">New inquiry from photobytiff.com</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Phone</strong></td><td>${escapeHtml(phone || 'Not provided')}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Session type</strong></td><td>${escapeHtml(sessionLabel || 'Not specified')}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Preferred location</strong></td><td>${escapeHtml(preferredLocation || 'Not provided')}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>How they heard</strong></td><td>${escapeHtml(heardLabel || 'Not provided')}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;"><strong>Message:</strong><br>${escapeHtml(message)}</p>
  `;

  try {
    const res = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Smtp2go-Api-Key': apiKey,
      },
      body: JSON.stringify({
        sender: fromEmail,
        to: [toEmail],
        reply_to: `${name} <${email}>`,
        subject: `New ${sessionLabel || 'photography'} inquiry from ${name}`,
        text_body: textBody,
        html_body: htmlBody,
      }),
    });

    const data = await res.json().catch(() => ({}));

    // SMTP2GO returns { data: { succeeded: 1, failed: 0, ... } }
    const succeeded = data?.data?.succeeded ?? 0;
    if (!res.ok || succeeded < 1) {
      console.error('SMTP2GO send failed:', JSON.stringify(data));
      return NextResponse.json(
        { error: 'We could not send your message. Please try again or email directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('SMTP2GO request error:', err);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or email directly.' },
      { status: 502 }
    );
  }
}
