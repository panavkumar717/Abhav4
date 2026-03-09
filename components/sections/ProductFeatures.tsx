"use client"

import { motion } from "framer-motion"
import { Mic, Globe, Zap, ShieldCheck } from "lucide-react"

const features = [
    {
        icon: Mic,
        title: "Voice Registration",
        description: "Patients can simply speak their details. AI extracts name, age, and symptoms accurately.",
    },
    {
        icon: Globe,
        title: "Multilingual AI",
        description: "Supports Hindi, English, Tamil, Telugu and more to bridge the language gap in healthcare.",
    },
    {
        icon: Zap,
        title: "Instant OPD Token",
        description: "Generates digital OPD tokens instantly, assigning patients to the correct department.",
    },
    {
        icon: ShieldCheck,
        title: "ABHA Auto Verification",
        description: "Instantly verifies ABHA ID to fetch health records and ensure profile accuracy.",
    },
]

export function ProductFeatures() {
    return (
        <section className="py-24 bg-white dark:bg-background relative overflow-hidden transition-colors">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 dark:bg-primary/10 border border-green-200 dark:border-primary/20 text-green-700 dark:text-primary-light text-sm font-bold mb-6 transition-colors"
                    >
                        The Solution
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-black mb-6 text-gray-900 dark:text-white"
                    >
                        Meet ABHA+
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto"
                    >
                        A smart hospital registration system that allows patients to register using voice or typing and instantly receive an OPD token.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0f2e2a] border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-primary/30 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-green-600 dark:bg-gradient-to-br dark:from-primary-dark dark:to-primary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                                <feature.icon className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
