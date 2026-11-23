
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ShieldCheck,
  GraduationCap,
  Lightbulb,
  Target,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications, backend services, REST APIs, database systems, authentication, and real-time applications.",
    color: "indigo",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, machine learning, deep learning, data analysis, and AI-powered software solutions.",
    color: "teal",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Cybersecurity & Networking",
    description:
      "Developing knowledge in network infrastructure, information security, threat analysis, and secure system design.",
    color: "blue",
  },
];

const professionalGoals = [
  "Build practical software that solves real-world problems.",
  "Explore research opportunities in AI and cybersecurity.",
  "Contribute to innovative technology projects and collaborations.",
  "Continue developing technical and professional skills.",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
            01 — About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Driven by curiosity.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Focused on innovation.
            </span>
          </h2>
        </motion.div>

        {/* Main introduction */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    My Background
                  </p>
                  <p className="text-xs text-slate-500">
                    Information Technology
                  </p>
                </div>
              </div>

              <p className="text-lg leading-9 text-slate-700">
                I'm Hayelom Hailay Tsadik, an Information Technology
                graduate from Mekelle University, with a strong interest
                in software engineering, artificial intelligence,
                cybersecurity, and emerging technologies.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                My academic journey has provided me with a foundation
                in programming, software engineering, databases,
                networking, operating systems, and information security.
                Through academic projects and independent learning,
                I've explored how these areas can work together to
                develop useful and intelligent digital solutions.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                I enjoy learning new technologies, solving technical
                challenges, and turning ideas into practical applications.
                My long-term ambition is to contribute to meaningful
                technology development while continuing to grow through
                advanced study, research, and professional experience.
              </p>
            </div>
          </motion.div>

          {/* Professional direction */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white shadow-xl shadow-indigo-200/50 sm:p-9">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Target size={25} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">
                My Direction
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                Learning continuously.
                <br />
                Building meaningfully.
              </h3>

              <p className="mt-5 text-sm leading-7 text-indigo-100">
                I aim to combine software development, intelligent
                technologies, and research to create solutions that
                address real challenges and make a positive impact.
              </p>

              <a
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-200"
              >
                Explore My Work
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Lightbulb size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Professional Goals
                  </h3>
                  <p className="text-xs text-slate-500">
                    What I'm working toward
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {professionalGoals.map((goal, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    <span className="text-sm leading-6 text-slate-600">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Expertise cards */}
        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
              Areas of Interest
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Where technology meets possibility.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              These are the key areas shaping my technical development,
              project work, and future professional direction.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              const colorStyles = {
                indigo: {
                  icon: "bg-indigo-50 text-indigo-600",
                  number: "text-indigo-600",
                  border: "hover:border-indigo-200",
                },
                teal: {
                  icon: "bg-teal-50 text-teal-600",
                  number: "text-teal-600",
                  border: "hover:border-teal-200",
                },
                blue: {
                  icon: "bg-blue-50 text-blue-600",
                  number: "text-blue-600",
                  border: "hover:border-blue-200",
                },
              };

              const style = colorStyles[item.color];

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100/50 ${style.border}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}>
                      <Icon size={27} />
                    </div>

                    <span className={`text-sm font-bold ${style.number}`}>
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-8 text-xl font-bold text-slate-900 transition group-hover:text-indigo-700">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-500 group-hover:w-24" />
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
