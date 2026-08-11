export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-zinc-900">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f8f8f6]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <a href="#" className="text-xl font-semibold tracking-tight">
            Sidhantdeep Singh
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-zinc-500">
              About
            </a>

            <a href="#skills" className="transition hover:text-zinc-500">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-zinc-500">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-zinc-500">
              Experience
            </a>

            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition hover:bg-zinc-700"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-10">

        <div className="max-w-5xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Open to new opportunities
          </div>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[105px]">
            IT support meets
            <span className="text-zinc-400"> software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            I&apos;m Sidhant Deep Singh, a Bachelor of Applied Computer Science
            graduate who enjoys solving technical problems, building useful
            software, and creating great experiences for users.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-zinc-700"
            >
              View my work →
            </a>

            <a
              href="/__Resume.pdf"
              target="_blank"
              className="rounded-full border border-zinc-300 bg-white px-7 py-4 font-medium transition hover:-translate-y-1 hover:border-zinc-500"
            >
              View résumé
            </a>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span>📍 Canada</span>
            <span>Software Development</span>
            <span>IT Support</span>
            <span>Technical Operations</span>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-zinc-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:px-10">

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About me
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Technology should make things simpler.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">

            <p>
              My background sits at the intersection of software development,
              technical support, and customer service.
            </p>

            <p>
              I graduated from Dalhousie University with a Bachelor of Applied
              Computer Science and have worked with technologies including
              Next.js, React, Flutter, Python, SQL, and Git.
            </p>

            <p>
              I enjoy both sides of technology — building software and helping
              people solve technical problems. Whether I&apos;m debugging an
              application or troubleshooting an end-user issue, I focus on
              finding practical solutions and communicating them clearly.
            </p>

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              My toolkit
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Technologies & skills
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              A combination of development technologies and IT skills I use
              to build applications and solve technical problems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Development */}
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8">
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
                01 / Development
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "React",
                  "Next.js",
                  "Flutter",
                  "Dart",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems */}
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8">
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
                02 / Systems
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Windows",
                  "macOS",
                  "Linux",
                  "Networking",
                  "SQL",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* IT Support */}
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8">
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
                03 / IT & Support
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Technical Support",
                  "Troubleshooting",
                  "Hardware",
                  "Software Support",
                  "End-User Support",
                  "Customer Service",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected work
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Projects
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              A selection of projects that reflect my experience in software
              development, problem solving, and technical leadership.
            </p>
          </div>

          <div className="space-y-8">

            {/* Project 1 */}
            <article className="grid gap-8 rounded-[32px] border border-zinc-200 bg-[#f8f8f6] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">

              <div>
                <p className="mb-6 text-sm text-zinc-400">
                  01
                </p>

                <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  Beach Bluenoser
                </h3>

                <p className="mt-6 leading-7 text-zinc-600">
                  A location-based mobile application developed as part of a
                  Dalhousie University capstone project. I contributed to both
                  software development and team leadership.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Flutter", "Dart", "GPS", "Mobile Development"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-zinc-900 p-7 text-white sm:p-10">

                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Highlights
                </p>

                <ul className="space-y-5">
                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Implemented location-based functionality with a 35 km radius.
                  </li>

                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Worked on alerts, advertisements, feedback, and admin workflows.
                  </li>

                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Progressed from developer responsibilities into Development Director.
                  </li>

                  <li className="flex gap-4 text-zinc-300">
                    <span className="text-white">→</span>
                    Collaborated with a development team and real-world client.
                  </li>
                </ul>

              </div>

            </article>

            {/* Project 2 */}
            <article className="grid gap-8 rounded-[32px] border border-zinc-200 bg-[#f8f8f6] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">

              <div>
                <p className="mb-6 text-sm text-zinc-400">
                  02
                </p>

                <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  PSYMLE
                </h3>

                <p className="mt-6 leading-7 text-zinc-600">
                  A modern e-commerce website built using Next.js featuring
                  product browsing, cart functionality, checkout, image
                  galleries, and automated order emails.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Next.js", "React", "JavaScript", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-zinc-900 p-7 text-white sm:p-10">

                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Highlights
                </p>

                <ul className="space-y-5">

                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Built responsive product catalog and product detail pages.
                  </li>

                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Implemented cart, size selection, and checkout functionality.
                  </li>

                  <li className="flex gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <span className="text-white">→</span>
                    Added image carousel and full-screen product gallery.
                  </li>

                  <li className="flex gap-4 text-zinc-300">
                    <span className="text-white">→</span>
                    Added customer and admin order confirmation emails.
                  </li>

                </ul>

              </div>

            </article>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Background
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Experience
            </h2>
          </div>

          <div>

            <div className="grid gap-4 border-t border-zinc-300 py-9 md:grid-cols-[1fr_1fr_2fr]">
              <div>
                <h3 className="text-xl font-medium">
                  Event Lead
                </h3>

                <p className="mt-1 text-zinc-500">
                  HRM Mascots & Inflatables
                </p>
              </div>

              <p className="text-zinc-500">
                2026 – Present
              </p>

              <p className="max-w-2xl leading-7 text-zinc-600">
                Lead event teams, coordinate operations, work directly with
                clients, and help ensure events run safely and smoothly.
              </p>
            </div>

            <div className="grid gap-4 border-t border-zinc-300 py-9 md:grid-cols-[1fr_1fr_2fr]">
  <div>
    <h3 className="text-xl font-medium">
      Teaching Assistant
    </h3>

    <p className="mt-1 text-zinc-500">
      Dalhousie University
    </p>
  </div>

  <p className="text-zinc-500">
    2024 – 2025
  </p>

  <p className="max-w-2xl leading-7 text-zinc-600">
    Supported students with course concepts, assignments, and technical
    questions while providing clear explanations and one-on-one guidance.
  </p>
</div>

            <div className="grid gap-4 border-t border-b border-zinc-300 py-9 md:grid-cols-[1fr_1fr_2fr]">
              <div>
                <h3 className="text-xl font-medium">
                  Student IT Technician
                </h3>

                <p className="mt-1 text-zinc-500">
                  Dalhousie University — MED IT
                </p>
              </div>

              <p className="text-zinc-500">
                2021 – 2023
              </p>

              <p className="max-w-2xl leading-7 text-zinc-600">
                Provided technical support for students, faculty, computers,
                Wi-Fi, classroom systems, and presentation technology.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#e9e7e1]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Education
          </p>

          <div className="grid gap-8 lg:grid-cols-2">

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Dalhousie University
            </h2>

            <div>
              <h3 className="text-2xl font-medium">
                Bachelor of Applied Computer Science
              </h3>

              <p className="mt-3 text-zinc-600">
                Faculty of Computer Science
              </p>

              <p className="mt-1 text-zinc-600">
                Halifax, Nova Scotia
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-7xl">
            Have an opportunity?
            <span className="text-zinc-500"> Let&apos;s talk.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I&apos;m interested in opportunities across IT support, technical
            operations, and software development.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="mailto:sidhantdeepsingh30@gmail.com"
              className="rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-200"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/sidhant-deep-singh/"
              target="_blank"
              className="rounded-full border border-white/20 px-7 py-4 transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>


          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 px-6 pb-10 text-zinc-600 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm sm:flex-row">

          <p>
            © {new Date().getFullYear()} Sidhant Deep Singh
          </p>

          <p>
            Built with Next.js
          </p>

        </div>
      </footer>

    </main>
  );
}