
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

          {/* Brand */}
         <div>
  <a
    href="#home"
    className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-indigo-700"
  >
    Hayelom Hailay Tsadik
    <span className="text-indigo-600">.</span>
  </a>

  <p className="mt-2 text-sm text-slate-500">
    Software Developer · IT Professional
  </p>

  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
    Building practical digital solutions through software
    engineering, artificial intelligence, and technology.
  </p>
</div>

          {/* Social links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/macciss14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/hayelom-hailay-t405"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              in
            </a>

            <a
              href="mailto:hayelomhailay405@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Mail size={18} />
            </a>

          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>

        <div className="mt-9 border-t border-slate-100 pt-6 text-center sm:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Hayelom Hailay. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
