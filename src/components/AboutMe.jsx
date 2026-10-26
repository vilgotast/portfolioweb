import React from 'react';
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const skills = [
    {
      name: "Machine Learning",
      stamp: "AI / ML",
      stampClass: "ff-stamp-rare",
      description: "Deep Learning, Reinforcement Learning, Neural Networks",
    },
    {
      name: "Programming",
      stamp: "Code",
      stampClass: "ff-stamp-uncommon",
      description: "Python, PyTorch, TensorFlow, React",
    },
    {
      name: "Data Science",
      stamp: "Data",
      stampClass: "ff-stamp-elusive",
      description: "Data Analysis, Visualization, Statistical Modeling",
    },
  ];

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { margin: "-80px", once: true });

  return (
    <section ref={sectionRef} className="py-14">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="ff-section-heading mb-6">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Portrait Box */}
          <div className="md:col-span-4">
            <div className="ff-box p-4 flex flex-col items-center text-center">
              <img
                src={`${import.meta.env.BASE_URL}/images/contact/profile_pic.jpg`}
                alt="Vilgot Åström"
                className="w-32 h-32 object-cover mb-3"
                style={{ boxShadow: '0 0 0 1px #2b2118' }}
              />
              <p className="font-pixel uppercase tracking-[0.14em] text-[20px] text-[#2b2118]">
                Vilgot Åström
              </p>
            </div>
          </div>

          {/* Copy & Skills Table */}
          <div className="md:col-span-8 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-[18px] sm:text-[19px] leading-[1.55] text-[#2b2118]"
            >
              <p>
                I’m passionate about AI and exploring its frontiers through interesting projects.
                I love learning about new techniques and often want to try implementing them into something concrete and functional to see the theory work in practice.
              </p>
              <p className="text-[#6a583f]">
                I wanted a place to share some of my projects, so I created this page!
                My work spans across various domains of AI, but I especially enjoy NLP,
                reinforcement learning, and neural networks.
              </p>
            </motion.div>

            <div className="pt-2">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-[3px] border-double border-[#2b2118] font-pixel uppercase tracking-[0.14em] text-[16px] text-[#6a583f]">
                    <th className="pb-2 pr-4 font-normal w-2/5">Area</th>
                    <th className="pb-2 font-normal">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#b9a67e] last:border-b-[#2b2118] align-top"
                    >
                      <th className="py-3.5 pr-4 font-semibold text-[#2b2118]">
                        <div>{skill.name}</div>
                        <span className={`ff-stamp ${skill.stampClass} mt-1.5`}>
                          {skill.stamp}
                        </span>
                      </th>
                      <td className="py-3.5 text-[#2b2118]">
                        {skill.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
