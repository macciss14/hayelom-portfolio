
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
              03 — Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            A collection of software, AI, mobile, and cybersecurity
            projects developed through academic work, research, and
            independent exploration.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60 sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[80px_1fr_1fr]">

                {/* Project number */}
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    {project.number}
                  </span>
                </div>

                {/* Project title and category */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 transition group-hover:text-indigo-700 sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                {/* Description and technologies */}
                <div>
                  <p className="text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="mt-8 flex flex-wrap items-center gap-5">

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                      >
                        GitHub Repository ↗
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">
                        GitHub — Coming soon
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-teal-600 transition hover:text-teal-800"
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">
                        Live Demo — Coming soon
                      </span>
                    )}

                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects link */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/macciss14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Explore More on GitHub
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
