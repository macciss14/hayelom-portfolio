
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  Network,
  Database,
  Globe,
  Terminal,
  Cpu,
  Lock,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and engaging user interfaces for modern web applications.",
    icon: Code2,
    color: "indigo",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "React.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Code2 },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, authentication systems, and database-driven services.",
    icon: Server,
    color: "blue",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "NestJS", icon: Server },
      { name: "Express.js", icon: Terminal },
      { name: "REST APIs", icon: Globe },
      { name: "MongoDB", icon: Database },
      { name: "Mongoose", icon: Database },
      { name: "JWT", icon: Lock },
      { name: "Socket.IO", icon: Network },
    ],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Exploring data-driven systems, predictive models, computer vision, and intelligent applications.",
    icon: BrainCircuit,
    color: "teal",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Machine Learning", icon: BrainCircuit },
      { name: "Deep Learning", icon: Cpu },
      { name: "CNN", icon: BrainCircuit },
      { name: "Random Forest", icon: GitBranch },
      { name: "Regression", icon: GitBranch },
    ],
  },
  {
    number: "04",
    title: "Mobile Development",
    description:
      "Building cross-platform mobile application experiences with a focus on usability and functionality.",
    icon: Smartphone,
    color: "violet",
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "Dart", icon: Code2 },
      { name: "Responsive UI", icon: Globe },
      { name: "Mobile APIs", icon: Network },
      { name: "Localization", icon: Globe },
    ],
  },
  {
    number: "05",
    title: "Cybersecurity",
    description:
      "Developing knowledge of security principles, network defense, threat analysis, and secure applications.",
    icon: ShieldCheck,
    color: "rose",
    skills: [
      { name: "Network Security", icon: ShieldCheck },
      { name: "Nmap", icon: Network },
      { name: "Kali Linux", icon: Terminal },
      { name: "IDS Concepts", icon: ShieldCheck },
      { name: "Threat Analysis", icon: Lock },
      { name: "Web Security", icon: Globe },
    ],
  },
  {
    number: "06",
    title: "Networking",
    description:
      "Understanding network architecture, IP addressing, routing protocols, and network communication.",
    icon: Network,
    color: "cyan",
    skills: [
      { name: "IPv4", icon: Network },
      { name: "IPv6", icon: Network },
      { name: "OSPF", icon: GitBranch },
      { name: "RIP", icon: Network },
      { name: "EIGRP", icon: GitBranch },
      { name: "BGP", icon: Globe },
    ],
  },
];

const colorStyles = {
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    number: "text-indigo-600",
    tag: "border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    line: "from-indigo-500 to-blue-400",
    hover: "hover:border-indigo-200",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    number: "text-blue-600",
    tag: "border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100",
    line: "from-blue-500 to-indigo-400",
    hover: "hover:border-blue-200",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600",
    number: "text-teal-600",
    tag: "border-teal-100 bg-teal-50 text-teal-700 hover:bg-teal-100",
    line: "from-teal-500 to-emerald-400",
    hover: "hover:border-teal-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    number: "text-violet-600",
    tag: "border-violet-100 bg-violet-50 text-violet-700 hover:bg-violet-100",
    line: "from-violet-500 to-indigo-400",
    hover: "hover:border-violet-200",
  },
  rose: {
    icon: "bg-rose-50 text-rose-600",
    number: "text-rose-600",
    tag: "border-rose-100 bg-rose-50 text-rose-700 hover:bg-rose-100",
    line: "from-rose-500 to-orange-400",
    hover: "hover:border-rose-200",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    number: "text-cyan-600",
    tag: "border-cyan-100 bg-cyan-50 text-cyan-700 hover:bg-cyan-100",
    line: "from-cyan-500 to-blue-400",
    hover: "hover:border-cyan-200",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

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
            02 — Technical Expertise
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Skills & Technologies
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
              I work with.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            My technical interests span software engineering,
            intelligent systems, mobile application development,
            cybersecurity, and computer networking. These are the
            technologies and concepts I've explored through academic
            work, projects, and continued learning.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const style = colorStyles[group.color];

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100/50 ${style.hover}`}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}>
                    <Icon size={27} />
                  </div>

                  <span className={`text-sm font-bold ${style.number}`}>
                    {group.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-7 text-xl font-bold text-slate-900 transition group-hover:text-indigo-700">
                  {group.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                  {group.description}
                </p>

                {/* Technology tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition ${style.tag}`}
                      >
                        <SkillIcon size={13} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

                {/* Bottom decoration */}
                <div
                  className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r ${style.line} transition-all duration-500 group-hover:w-24`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Learning philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-teal-50 p-8 sm:p-10"
        >
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Continuous Learning
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Technology never stands still.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                I'm continuously strengthening my development skills,
                exploring emerging technologies, and expanding my
                understanding through practical projects and research.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              See My Projects
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
