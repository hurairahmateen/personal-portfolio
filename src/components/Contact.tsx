"use client";

import React, { useState } from "react";

import { PERSONAL_INFO } from "@/constants";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
        redirect: "manual",
      });

      if (response.type === "opaqueredirect") {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let&apos;s <span className="text-sky-400">Connect</span>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            Interested in working together or just want to say hi? My inbox is
            always open. I&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-sky-400">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email Me
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white transition-colors hover:text-sky-400"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-sky-400">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Location
                </p>
                <p className="text-white">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl border border-slate-700/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState({ ...formState, name: event.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState({ ...formState, email: event.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(event) =>
                  setFormState({ ...formState, message: event.target.value })
                }
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              disabled={status !== "idle"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-4 font-bold text-white shadow-lg shadow-sky-900/20 transition-all hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "idle" && (
                <>
                  Send Message{" "}
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                </>
              )}
              {status === "sending" && (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  Message Sent! <i className="fa-solid fa-check"></i>
                </>
              )}
              {status === "error" && (
                <>
                  Try Again <i className="fa-solid fa-triangle-exclamation"></i>
                </>
              )}
            </button>
            {errorMessage && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
