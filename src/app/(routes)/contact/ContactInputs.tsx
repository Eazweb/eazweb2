"use client";

import { useState } from "react";

export default function ContactInputs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    how: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message ||
      !form.how
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess("Message sent! (Not really, this is a demo)");
    setForm({ name: "", email: "", subject: "", message: "", how: "" });
  };

  return (
    <form
      className="mt-2 mb-20 flex flex-1 flex-col items-center justify-center gap-12 lg:mb-0"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="flex w-full flex-col gap-10 sm:flex-row">
        <div className="flex w-full flex-col">
          <label className="contact-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="contact-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 sm:flex-row">
        <div className="flex w-full flex-col">
          <label className="contact-label">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="contact-label">How did you hear about us?</label>
          <input
            type="text"
            name="how"
            placeholder="Enter your answer"
            value={form.how}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <label className="contact-label">Message</label>
        <textarea
          name="message"
          placeholder="Type your message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="contact-input resize-none"
        />
      </div>
      {error && (
        <div className="w-full text-right text-xs text-red-400">{error}</div>
      )}
      {success && (
        <div className="w-full text-right text-xs text-green-400">
          {success}
        </div>
      )}
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}
