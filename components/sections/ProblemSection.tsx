"use client"

import { motion } from "framer-motion"
import { Clock, FileWarning, UserMinus, AlertCircle } from "lucide-react"

const problems = [
    {
        icon: Clock,
        title: "Long OPD Queues",
        description: "Patients wait on average 30-45 minutes just to get a token.",
        color: "from-orange-500/20 to-orange-500/5",
    },
    {
        icon: FileWarning,
        title: "Manual Paperwork",
        description: "Repeated manual entry of patient details leads to errors.",
        color: "from-red-500/20 to-red-500/5",
    },
    {
        icon: AlertCircle, // Using AlertCircle instead of Language if not available
        title: "Language Barriers",
        description: "Difficulty communicating symptoms across different languages.",
        color: "from-blue-500/20 to-blue-500/5",
    },
    {
        icon: UserMinus,
        title: "Low ABHA Awareness",
        description: "Paper records make it impossible to track longitudinal health history.",
        color: "from-purple-500/20 to-purple-500/5",
    },
]

export function ProblemSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-background/50 relative transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white"
                    >
                        Hospital Registration Shouldn&apos;t Take 30 Minutes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto"
                    >
                        The current manual registration process is slow, error-prone, and frustrating for both patients and hospital staff.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, idx) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-[2rem] bg-white dark:bg-[#0f2e2a] border border-gray-200 dark:border-white/5 relative overflow-hidden group shadow-sm dark:shadow-none transition-all duration-300`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-900/60 transition-colors">
                                    <problem.icon className="text-green-700 dark:text-green-300" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{problem.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
