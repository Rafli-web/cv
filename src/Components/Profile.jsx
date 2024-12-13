import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pp from "../assets/kucing.jpeg";
import Project1 from "../assets/js.jpg";
import Project2 from "../assets/html.jpg";
import Project3 from "../assets/css.jpg";
import "./project.css"; // Import CSS file

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Apply dark mode class based on the state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div
      id="Home"
      className={`container mx-auto transition-all duration-300 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Azhar-cv</h1>
          <ul className="flex space-x-6">
            {[
              { label: "Home", href: "#Home" },
              { label: "About", href: "#About" },
              { label: "Projects", href: "#Project" },
              { label: "Contact", href: "#Contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="text-left" data-aos="fade-right">
            <p className="text-xl font-medium">Hello</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              My Name is <br />
              <span className="text-primary">Rafli Saepull Azhar</span>
            </h1>
            <p className="text-xl mt-4 font-medium">
              I’m a <span className="font-bold">Student</span> from SMK Prakarya Internasional
            </p>
          </div>

          {/* Right Section */}
          <div data-aos="fade-left">
            <img
              src={pp}
              alt="Profile of Rafli Saepull Azhar"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="About" className="py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl lg:text-5xl font-medium mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Perkenalkan nama saya Rafli Saepull Azhar, saya sekarang masih menduduki bangku pelajar.
        </p>
        <div className="skills mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { skill: "JavaScript", level: "80%" },
            { skill: "HTML", level: "90%" },
            { skill: "CSS", level: "85%" },
          ].map((item, index) => (
            <div
              key={index}
              className="skill-item text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.skill}
              </h3>
              <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="Project" className="py-16">
        <h2 className="text-3xl lg:text-5xl font-medium text-center mb-12" data-aos="zoom-in">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[
            { img: Project1, title: "JavaScript", desc: "Projek 1", link: "#" },
            { img: Project2, title: "HTML", desc: "Projek 2", link: "#" },
            { img: Project3, title: "CSS", desc: "Projek 3", link: "#" },
          ].map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="box p-4 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[220px] rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl lg:text-5xl font-medium mb-4">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <p className="mb-2 text-lg font-medium">Phone: +62 831-9020-8290</p>
          <p className="mb-2">
            Email: <a href="mailto:azharrafli200@gmail.com" className="text-blue-500">azharrafli200@gmail.com</a>
          </p>
          <p className="mb-2">
            GitHub: <a href="https://github.com/Rafli-web" target="_blank" rel="noopener noreferrer" className="text-blue-500">github.com/Rafli-web</a>
          </p>
          <p>
            Instagram: <a href="https://instagram.com/rafly.s.azhar" target="_blank" rel="noopener noreferrer" className="text-blue-500">@rafly.s.azhar</a>
          </p>
          <form className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center text-sm">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; 2024 Rafli Saepull Azhar. All rights reserved.
        </p>
      </footer>

      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
