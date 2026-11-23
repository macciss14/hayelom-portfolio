
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Copy,
  MessageCircle,
  Globe,
} from "lucide-react";
const contactMethods = [
  {
    title: "Email",
    value: "hayelomhailay405@gmail.com",
    description: "For professional inquiries and opportunities.",
    href: "mailto:hayelomhailay405@gmail.com",
    icon: Mail,
    color: "indigo",
    action: "Send an email",
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    description: "Let's connect and grow our professional networks.",
    href: "https://www.linkedin.com/in/hayelom-hailay-t405",
    icon: null,
    symbol: "in",
    color: "blue",
    action: "Visit LinkedIn",
  },
  {
    title: "GitHub",
    value: "Explore my repositories",
    description: "Discover my software and technical projects.",
    href: "https://github.com/macciss14",
    icon: null,
    symbol: "GH",
    color: "slate",
    action: "Visit GitHub",
  },
];

const colorStyles = {
  indigo: "bg-indigo-100 text-indigo-700",
  blue: "bg-blue-100 text-blue-700",
  slate: "bg-slate-100 text-slate-700",
};

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "hayelomhailay405@gmail.com"
      );
      alert("Email address copied!");
    } catch {
      window.location.href = "mailto:hayelomhailay405@gmail.com";
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-28 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            05 — Get In Touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Let's start a
            <span className="block bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600">
            Whether you have a professional opportunity, research
            collaboration, scholarship-related connection, or an
            interesting technology project, I'd be glad to hear from you.
          </p>
        </motion.div>

        {/* Main contact panel */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left introduction card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-8 text-white shadow-xl shadow-indigo-200/70 sm:p-10"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <MessageCircle size={26} />
              </div>

              <h3 className="mt-10 text-3xl font-semibold leading-tight sm:text-4xl">
                Have an idea?
                <br />
                Let's talk.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-8 text-indigo-100">
                I welcome meaningful connections with people working
                in software development, artificial intelligence,
                cybersecurity, research, and technology innovation.
              </p>
            </div>

            <div className="mt-12 border-t border-white/20 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                Direct email
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hayelomhailay405@gmail.com"
                  className="break-all text-sm font-medium transition hover:text-teal-200 sm:text-base"
                >
                  hayelomhailay405@gmail.com
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  title="Copy email address"
                  className="rounded-lg border border-white/20 bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={
                    method.title === "Email" ? undefined : "_blank"
                  }
                  rel={
                    method.title === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex flex-1 items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-8"
                >
                  <div
  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition group-hover:scale-110 ${colorStyles[method.color]}`}
>
  {method.icon ? (
    <method.icon size={24} />
  ) : (
    <span className="text-lg font-bold">
      {method.symbol}
    </span>
  )}
</div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {method.title}
                    </p>

                    <h3 className="mt-2 break-words text-lg font-semibold text-slate-900 transition group-hover:text-indigo-700">
                      {method.value}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {method.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                      {method.action}
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-teal-700">
            <Globe size={17} />
            <span>Open to global opportunities and collaborations</span>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Building technology, sharing knowledge, and creating
            opportunities through continuous learning.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
