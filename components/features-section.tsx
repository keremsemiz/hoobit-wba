"use client";

import { motion } from 'framer-motion'
import { Code, Zap, Palette, Layout, Users, ChevronRight } from 'lucide-react'
import React from 'react'

function FeaturesSection() {
  return (
    <section id="features-section" className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Everything you need to learn Python efficiently.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-sky-500" />,
              title: "Hands-On Coding Practice",
              description:
                "Engage in practical coding exercises to reinforce your Python skills, helping you learn through real-world applications.",
            },
            {
              icon: <Zap className="h-8 w-8 text-sky-500" />,
              title: "Interactive Learning",
              description:
                "Get instant feedback on your code and learn interactively with our tutors, making each session more engaging and effective.",
            },
            {
              icon: <Palette className="h-8 w-8 text-sky-500" />,
              title: "Customized Curriculum",
              description:
                "Follow a curriculum tailored to your skill level, ensuring you master each concept at your own pace.",
            },
            {
              icon: <Layout className="h-8 w-8 text-sky-500" />,
              title: "Project-Based Learning",
              description:
                "Work on exciting projects that challenge your knowledge and give you a portfolio of Python applications.",
            },
            {
              icon: <Users className="h-8 w-8 text-sky-500" />,
              title: "Supportive Community",
              description:
                "Join a community of fellow learners and tutors who encourage, motivate, and help you every step of the way.",
            },
            {
              icon: <ChevronRight className="h-8 w-8 text-sky-500" />,
              title: "Future-Ready Skills",
              description:
                "Prepare yourself for future tech opportunities by mastering Python, one of the most in-demand programming languages.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
