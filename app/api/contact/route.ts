import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

import { getPortfolioData } from "@/data/portfolio";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, message: "Please complete all fields before sending your message." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const portfolio = await getPortfolioData();
  const recipient = portfolio.contactEmail || portfolio.profile.email || "vijisubramaniyam123@gmail.com";
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD?.replace(/\s+/g, "");

  if (!smtpHost || !smtpUser || !smtpPassword) {
    return NextResponse.json(
      { ok: false, message: "Email delivery needs SMTP settings. Add them to .env.local and restart the app." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: smtpUser, pass: smtpPassword },
  });

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || recipient,
      to: recipient,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (error) {
    const mailError = error as { code?: string; responseCode?: number; message?: string };
    console.error("Contact email delivery failed", {
      code: mailError.code,
      responseCode: mailError.responseCode,
      message: mailError.message,
    });
    const message = mailError.code === "EAUTH"
      ? "SMTP authentication failed. Check that you used a Gmail App Password, then restart the app."
      : "We could not send your message right now. Please try again later.";

    return NextResponse.json({ ok: false, message }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks ${name}! Your message has been sent successfully.`,
  });
}
