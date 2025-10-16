import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './../styles/tailwind.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About({aboutRef}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // bg canvas effect
  }, []);

  

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#05040a] via-[#071226] to-[#0c1020] text-white" ref={aboutRef}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
          aria-hidden="true"
        />

        {/* --- About Us Text (centered, bigger, Caudex font) --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl w-full text-center font-caudex mb-12"
        >
          <h2 className="text-7xl font-bold mb-6" id='aboutTitle'>ABOUT US</h2>
          <p className="text-xl leading-relaxed mb-5">
            FlavorForge blends imagination and technology to help home cooks create chef-level meals using whatever ingredients are at hand. Our friendly and fast platform is built around preserving privacy and actually joyful cooking, whether you’re a beginner or a culinary explorer. Our difference is in the attention to detail, thoughtful UX, and a commitment to honest flavor and community empowerment.
          </p>
          <p className="text-lg leading-relaxed">
            From inspiring kitchen adventures to practical solutions for busy weeknights, FlavorForge is your partner in creativity, flavor, and genuine satisfaction.
          </p>
        </motion.div>

        {/* --- Vision and Mission Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
          <motion.div
            initial="hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(119,255,200,0.15)' }}
            animate="visible"
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-md rounded-xl p-7 shadow-lg transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">Our Vision</h3>
            <p className="text-base leading-relaxed">
              To democratize creativity in the kitchen: gourmet results, no fancy tools required.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(119,255,200,0.15)' }}
            animate="visible"
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-md rounded-xl p-7 shadow-lg transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">Our Mission</h3>
            <p className="text-base leading-relaxed">
              Inspire home cooks to experiment, explore, and thrive with reliable recipes and honest privacy.
            </p>
          </motion.div>
        </div>

        {/* --- Why Choose Us (vertical stacked list with bullets and scroll animation) --- */}
    
        {/* --- Why Choose Us card wrapper with shadow --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-3xl w-full relative py-20 flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#05040a] via-[#071226] to-[#0c1020] text-white"
        >
          <h3 className="font-bold mb-8 pb-5 text-center underline" id='chooseTitle'>Why Choose Us?</h3>
          <ul className="space-y-6">
            {[
              'User-Centric Experience: Minimalist interface built for distraction-free cooking and instant ingredient input.',
              'AI-Powered Suggestions: Recipes adapt instantly to your pantry, taste, and dietary needs.',
              'Privacy Matters: Data never sold or shared. Your food journey is private and secure.',
              'Real Flavors, Real Life: Every recipe is kitchen-tested for simplicity and true flavor.',
              'Active Community: Friendly support and connection for cooks of all backgrounds.',
              'Continuous Improvement: We update features and recipes based on real user feedback.',
            ].map((point, i) => (
              <motion.li
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeInUp}
                className="list-disc list-inside p-5 border border-gray-50 rounded-xl bg-gradient-to-b from-[#05040a] via-[#071226] to-[#0c1020]"
              >
                <span className="text-white font-caudex text-lg">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

    </section>
  );
}
