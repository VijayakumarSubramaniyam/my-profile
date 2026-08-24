'use client';

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || "Message sent successfully.");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row two-columns">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="Your email" required />
        </label>
      </div>

      <div className="field-row">
        <label>
          <span>Subject</span>
          <input type="text" name="subject" placeholder="Project inquiry" required />
        </label>
      </div>

      <div className="field-row">
        <label>
          <span>Message</span>
          <textarea name="message" rows={6} placeholder="Tell me about your project" required />
        </label>
      </div>

      <button type="submit" className="primary-button submit-button">
        Send Message
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
