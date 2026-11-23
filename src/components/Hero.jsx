
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  "React.js",
  "Node.js",
  "Python",
  "Flutter",
  "AI / ML",
  "Cybersecurity",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />

        <div className="absolute right-[15%] top-[15%] h-40 w-40 rounded-full border border-indigo-100/80" />

        <div className="absolute right-[18%] top-[18%] h-28 w-28 rounded-full border border-teal-100/80" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT: Introduction */}
        <div className="relative z-10">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
            </span>

            <span className="text-xs font-semibold tracking-wide text-slate-600">
              Open to Opportunities & Collaborations
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Hayelom
            <br />

            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Hailay Tsadik.
            </span>
          </motion.h1>

          {/* Professional title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 text-xl font-medium text-slate-700 sm:text-2xl"
          >
            Software Developer & IT Professional
          </motion.h2>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            I build modern digital solutions by combining software
            engineering, artificial intelligence, mobile technologies,
            and cybersecurity. I enjoy transforming ideas and complex
            problems into practical, meaningful applications.
          </motion.p>

          {/* Specialization highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700">
              <Code2 size={15} />
              Full-Stack Development
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-medium text-teal-700">
              <BrainCircuit size={15} />
              AI & Machine Learning
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
              <ShieldCheck size={15} />
              Cybersecurity
            </span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Explore My Projects

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Mail size={17} />
              Contact Me
            </a>

            <a
              href="/Hayelom-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-600 transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-7"
          >
            <a
              href="https://github.com/macciss14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/hayelom-hailay-t405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:hayelomhailay405@gmail.com"
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Email ↗
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative background */}
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-indigo-200/70 via-white to-teal-100/80 opacity-80 blur-2xl" />

          {/* Main profile card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-indigo-200/40">

            {/* Actual profile photograph */}
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white">

              <img
                src="/images/profile.jpg"
                alt="Portrait of Hayelom Hailay Tsadik"
                className="h-full w-full object-contain object-center"
                loading="eager"
                decoding="async"
              />

            </div>

            {/* Profile information */}
            <div className="px-3 pb-2 pt-6">
              <p className="text-lg font-bold text-slate-900">
                Hayelom Hailay Tsadik
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Software Developer · IT Professional
              </p>

              {/* Technology highlights */}
              <div className="mb-4 mt-7 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Technologies & Interests
                </p>

                <span className="h-2 w-2 rounded-full bg-teal-500" />
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating software card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 top-20 hidden rounded-2xl border border-white bg-white p-4 shadow-xl shadow-indigo-100/70 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Code2 size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Software
                </p>

                <p className="text-xs text-slate-500">
                  Development
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating AI card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 bottom-32 hidden rounded-2xl border border-white bg-white p-4 shadow-xl shadow-teal-100/70 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <BrainCircuit size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Artificial
                </p>

                <p className="text-xs text-slate-500">
                  Intelligence
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 transition hover:text-indigo-600 md:flex"
      >
        Explore

        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
