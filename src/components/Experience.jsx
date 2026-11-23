
import { motion } from "framer-motion";
import {
  GraduationCap,
  FolderCode,
  BrainCircuit,
  ShieldCheck,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    category: "Education",
    title: "Information Technology",
    organization: "Mekelle University",
    description:
      "Completed undergraduate studies in Information Technology, developing a foundation in software engineering, programming, databases, computer networks, operating systems, and information security.",
    tags: [
      "Software Engineering",
      "Programming",
      "Database Systems",
      "Computer Networks",
    ],
    icon: GraduationCap,
    color: "indigo",
  },
  {
    number: "02",
    category: "Academic Project",
    title: "AI-Powered Parent–Teacher Communication and Student Monitoring System",
    organization: "Final-Year Project",
    description:
      "Worked on an educational platform designed to improve communication between parents and teachers while supporting student academic monitoring. The project explored messaging, attendance, academic records, and AI-assisted features.",
    tags: [
      "React",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Artificial Intelligence",
    ],
    icon: FolderCode,
    color: "teal",
  },
  {
    number: "03",
    category: "Technical Projects",
    title: "Machine Learning & Data Analysis",
    organization: "Academic and Independent Learning",
    description:
      "Explored practical machine learning through projects involving image classification and housing-price prediction, applying data preparation, model training, evaluation, and analysis.",
    tags: [
      "Python",
      "Machine Learning",
      "CNN",
      "Random Forest",
      "Data Analysis",
    ],
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "04",
    category: "Technical Interests",
    title: "Cybersecurity & Computer Networking",
    organization: "Academic Study and Practical Exploration",
    description:
      "Developed knowledge of cybersecurity principles, network technologies, and security threats through academic study and practical exploration, including research into cybersecurity risks associated with the dark web.",
    tags: [
      "Cybersecurity",
      "Networking",
      "Nmap",
      "Network Security",
      "Threat Research",
    ],
    icon: ShieldCheck,
    color: "blue",
  },
];

const colorStyles = {
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    number: "text-indigo-600",
    line: "bg-indigo-200",
    tag: "border-indigo-100 bg-indigo-50 text-indigo-700",
  },
  teal: {
    icon: "bg-teal-100 text-teal-700",
    number: "text-teal-600",
    line: "bg-teal-200",
    tag: "border-teal-100 bg-teal-50 text-teal-700",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    number: "text-violet-600",
    line: "bg-violet-200",
    tag: "border-violet-100 bg-violet-50 text-violet-700",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    number: "text-blue-600",
    line: "bg-blue-200",
    tag: "border-blue-100 bg-blue-50 text-blue-700",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden border-t border-slate-200 px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            04 — My Journey
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Learning, building,
              <br />
              and growing.
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-600">
              My journey combines academic learning, hands-on project
              development, and continuous exploration of emerging
              technologies. Each experience contributes to my growth
              as an IT professional.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-slate-200 sm:block" />

          <div className="space-y-7">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="relative grid gap-5 sm:grid-cols-[52px_1fr] sm:gap-7"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white shadow-md">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Experience card */}
                  <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                        {item.category}
                      </span>

                      <span
                        className={`text-sm font-semibold ${styles.number}`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-3xl text-xl font-semibold leading-snug text-slate-900 transition group-hover:text-indigo-700 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {item.organization}
                    </p>

                    <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-teal-50 p-8 sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                <Code2 size={23} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  The journey continues.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  I am continuously strengthening my technical skills,
                  exploring new technologies, and looking for opportunities
                  to contribute to meaningful software and technology projects.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Let's Connect
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
