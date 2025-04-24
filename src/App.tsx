import "./App.css";

export default function App() {
  return (
    <main className="text-gray-900 font-sans bg-white min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        {/* Placeholder SVG Logo */}
        <div className="mx-auto mb-6 flex justify-center">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            aria-label="Apiary Logic Logo"
          >
            <circle cx="36" cy="36" r="36" fill="#007AFF" />
            <ellipse cx="36" cy="36" rx="22" ry="14" fill="#fff" />
            <ellipse cx="36" cy="32" rx="8" ry="5" fill="#FFD700" />
            <ellipse cx="36" cy="44" rx="12" ry="7" fill="#FFD700" />
            <circle cx="36" cy="36" r="4" fill="#007AFF" />
          </svg>
        </div>
        <h1 className="text-5xl font-semibold text-blue mb-4">Apiary Logic</h1>
        <p className="text-lg text-gray-600">
          Web tools and early-stage prototypes focused on accessibility,
          privacy, and real-world usability.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 bg-blue text-white rounded transition hover:bg-blue-dark"
        >
          Get in Touch
        </a>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <img
            src="https://placehold.co/64x64?text=🌱"
            alt="Wellness"
            className="mx-auto mb-3 rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Personal Wellness</h3>
          <p className="text-gray-600 text-base">
            Simple, private tools for tracking habits, reminders, and self-care.
          </p>
        </div>
        <div>
          <img
            src="https://placehold.co/64x64?text=📋"
            alt="Business"
            className="mx-auto mb-3 rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Small Business</h3>
          <p className="text-gray-600 text-base">
            Organize tasks, appointments, and notes—no account required.
          </p>
        </div>
        <div>
          <img
            src="https://placehold.co/64x64?text=🔒"
            alt="Privacy"
            className="mx-auto mb-3 rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
          <p className="text-gray-600 text-base">
            Your data stays yours. No tracking, no hidden costs.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-medium mb-4">About</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Apiary Logic creates thoughtful digital tools for personal wellness
          and small businesses—grounded in ethical tech, privacy, and real-world
          usability. Our solutions are inspired by hands-on experience in
          creative development and everyday problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section className="py-12 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col">
          <img
            src="https://placehold.co/600x400?text=Daily+Dose+Wellness"
            alt="Daily Dose Screenshot"
            className="rounded mb-4 object-cover h-48 w-full"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Daily Dose (Open Source)
          </h3>
          <p className="text-gray-700 mb-2 flex-1">
            A minimal, open source wellness tracker for personal use—log
            medications and wellness habits with a simple NFC tap.{" "}
          </p>
          <a
            href="https://github.com/YOUR_USERNAME/dailydose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue hover:underline"
          >
            View on GitHub →
          </a>
          <span className="inline-block bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded mt-3">
            Public Prototype
          </span>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col">
          <img
            src="https://placehold.co/600x400?text=Compliance+Tracker"
            alt="Small Business Organizer Screenshot"
            className="rounded mb-4 object-cover h-48 w-full"
          />
          <h3 className="text-2xl font-semibold mb-2">
            Compliance Tracker (Private Beta)
          </h3>
          <p className="text-gray-700 mb-2 flex-1">
            A focused tool for tracking certification and training compliance
            for long-term care aides in Washington’s adult group homes.
          </p>
          <a href="#" className="inline-block mt-2 text-blue hover:underline">
            Coming Soon
          </a>
          <span className="inline-block bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded mt-3">
            Private Beta
          </span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium mb-8 text-center">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <img
              src="https://placehold.co/48x48?text=🙂"
              alt="User avatar"
              className="rounded-full mb-3"
            />
            <p className="text-gray-800 italic mb-3 text-center">
              “Finally, a wellness tracker that respects my privacy and doesn’t
              overcomplicate things.”
            </p>
            <footer className="text-gray-600 text-sm">— Alex P.</footer>
          </blockquote>
          <blockquote className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <img
              src="https://placehold.co/48x48?text=🧑‍💻"
              alt="User avatar"
              className="rounded-full mb-3"
            />
            <p className="text-gray-800 italic mb-3 text-center">
              “The business organizer is exactly what I needed to keep my
              freelance work on track.”
            </p>
            <footer className="text-gray-600 text-sm">— Jamie L.</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-medium mb-4">Contact</h2>
        <p className="text-base text-gray-700 mb-6">
          Interested in collaborating or learning more? Send a message.
        </p>
        <form
          action="https://formspree.io/f/xovegebo"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded p-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded p-3"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="border border-gray-300 rounded p-3"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue text-white font-medium px-6 py-3 rounded hover:bg-blue-dark transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12 pb-8">
        <p>
          © 2025 Apiary Logic. Made with love and <i>bees</i>.
        </p>
      </footer>
    </main>
  );
}
