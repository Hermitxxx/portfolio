"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
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
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-base-content/50 uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              Let's craft <br /> something <span className="text-primary italic">iconic</span>.
            </h1>
            <p className="text-lg text-base-content/40 leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to say hi, 
              my inbox is always open.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/30 mb-2 group-hover:text-primary transition-colors">
                Email me at
              </p>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-base-content">
                hermitxxx.dev@gmail.com
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/30 mb-2 group-hover:text-primary transition-colors">
                Based in
              </p>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-base-content">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 pt-8">
            {[
              { name: "Discord", icon: "fa-brands fa-discord", href: "https://discord.com/users/901784245255671848" },
              { name: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/Hermitxxx" },
              { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/hermitdev" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full border border-base-300 text-base-content hover:bg-base-content hover:text-base-100 transition-all duration-300 group"
              >
                <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform`}></i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-base-200 border border-base-300 rounded-[3.5rem] p-8 sm:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 pl-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-base-100 border border-base-300 rounded-2xl px-6 py-4 text-base-content focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-base-100 border border-base-300 rounded-2xl px-6 py-4 text-base-content focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 pl-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full bg-base-100 border border-base-300 rounded-2xl px-6 py-4 text-base-content focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 pl-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-base-100 border border-base-300 rounded-2xl px-6 py-4 text-base-content focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 rounded-full bg-base-content text-base-100 font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              Send Message
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
