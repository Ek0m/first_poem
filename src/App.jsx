
import { motion } from "framer-motion";
import './index.css'

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans ">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          "Like I was stargazing—my favorite kind of magic."
        </h1>
      </section>


      {/* Poem Section */}
      <section className="py-6 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-2xl md:text-3xl leading-relaxed mb-5"
          >
            Let me tell you a story, A moment suspended in time, A night etched
            so clearly, The best day of my life.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-2xl md:text-3xl leading-relaxed mb-5"
          >
            Her eyes, The way they drew me in, Like constellations scattered
            across a dark sky— My favorite kind of magic.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-2xl md:text-3xl leading-relaxed mb-5"
          >
            So quiet, so composed, Yet shadowed by danger. A fleeting exchange
            unraveled the truth: Her—trouble in its purest form.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-2xl md:text-3xl leading-relaxed mb-5"
          >
            And that's the frightening beauty, Like a weakness made sacred. My
            heart and mind raised a toast— To wickedness wrapped in kindness.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <p>&copy; 2024 Saintekom | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
