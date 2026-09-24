"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

/**
 * No backend needed: the form opens the visitor's email app with the message filled in.
 * Swap handleSubmit for a fetch() to your own API or a form service if you prefer.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n—\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPlayer ID: ${data.get("playerId") || "-"}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-sun-400/60 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Ali Khan" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">Topic</span>
          <select name="topic" className={field} defaultValue="Support">
            <option className="bg-ink-900">Support</option>
            <option className="bg-ink-900">Download problem</option>
            <option className="bg-ink-900">Account</option>
            <option className="bg-ink-900">Report a player</option>
            <option className="bg-ink-900">Feedback</option>
            <option className="bg-ink-900">Business</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">Player ID (optional)</span>
          <input name="playerId" className={field} placeholder="Found in your profile" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/80">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className={field}
          placeholder="Tell us what's going on. Your phone model helps if it's a technical issue."
        />
      </label>
      <button
        type="submit"
        className="bg-brand w-full rounded-full px-7 py-3.5 font-semibold text-ink-950 shadow-lg shadow-ember-500/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send message
      </button>
      {sent && (
        <p role="status" className="text-sm text-sun-300">
          Your email app should have opened with the message ready to send. If it didn&apos;t, email us at{" "}
          {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
