"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Using \r\n for better compatibility with email clients
    const body = `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;
    
    const mailtoUrl = `mailto:hermitxxx.dev@gmail.com?subject=${encodeURIComponent(subject || "Project Inquiry")}&body=${encodeURIComponent(body)}`;
    
    // Using a temporary anchor to trigger the mailto for better browser compatibility
    const link = document.createElement("a");
    link.href = mailtoUrl;
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="pb-10 lg:pb-16"
    >
      <div className="flex items-center gap-2 mb-6 lg:mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-success"></span>
        <span className="text-[11px] sm:text-xs xl:text-sm font-semibold tracking-[0.2em] text-base-content/50 uppercase">
          Get in Touch
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 text-base-content tracking-tight">
        Let's Work Together
      </h2>
      <p className="text-base-content/40 text-sm sm:text-base lg:text-lg max-w-xl mb-8 lg:mb-12 leading-relaxed">
        Have a project in mind? Drop me a message and I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider text-base-content/30 font-black ml-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-base-200 border border-base-300 rounded-xl px-5 py-4 text-base-content text-base placeholder:text-base-content/20 focus:outline-none focus:border-primary transition"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider text-base-content/30 font-black ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full bg-base-200 border border-base-300 rounded-xl px-5 py-4 text-base-content text-base placeholder:text-base-content/20 focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] uppercase tracking-wider text-base-content/30 font-black ml-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
            className="w-full bg-base-200 border border-base-300 rounded-xl px-5 py-4 text-base-content text-base placeholder:text-base-content/20 focus:outline-none focus:border-primary transition"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] uppercase tracking-wider text-base-content/30 font-black ml-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Tell me about your project..."
            className="w-full bg-base-200 border border-base-300 rounded-xl px-5 py-4 text-base-content text-base placeholder:text-base-content/20 focus:outline-none focus:border-primary transition resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-10 py-5 rounded-full bg-base-content text-base-100 text-sm font-black uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 cursor-pointer flex items-center gap-3"
        >
          Send Message
          <Icon icon="mdi:send" className="text-sm" />
        </button>
      </form>
    </motion.section>
  );
}
