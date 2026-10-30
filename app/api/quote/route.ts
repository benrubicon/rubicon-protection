import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || "info@rubiconprotection.com";
const FROM_EMAIL = process.env.QUOTE_FROM_EMAIL || "info@rubiconprotection.com";
const FROM_NAME = "Rubicon Website";

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Not configured yet; the form falls back to opening the visitor's email app.
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 501 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const company = clean(body.company, 200);
  const service = clean(body.service, 200);
  const message = clean(body.message);

  if (!name || !email || !phone || !company || !service || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Company: ${company}`,
    `Service needed: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `<p><strong>New quote request from rubiconprotection.com</strong></p>
<p>Name: ${esc(name)}<br>Email: ${esc(email)}<br>Phone: ${esc(phone)}<br>Company: ${esc(company)}<br>Service needed: ${esc(service)}</p>
<p>Message:<br>${esc(message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: TO_EMAIL }],
      replyTo: { email, name },
      subject: `Quote request: ${service}, ${company}`,
      textContent: text,
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
