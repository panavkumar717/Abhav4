"use client"

import { motion } from "framer-motion"

const stats = [
    {
        label: "Registration Time",
        value: "1 min",
        sub: "Reduced from 30 min",
        prefix: "⬇️",
    },
    {
        label: "Queue Reduction",
        value: "70%",
        sub: "Efficiency improvement",
        prefix: "📉",
    },
    {
        label: "Languages",
        value: "4+",
        sub: "Multilingual Support",
        prefix: "🗣️",
    },
    {
        label: "Compatible Hospitals",
        value: "50,000+",
        sub: "Nationwide Integration",
        prefix: "🏥",
    },
]

export function ImpactStats() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-background/50 transition-colors">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                            className="relative p-8 rounded-3xl bg-white dark:bg-[#0f2e2a] border border-gray-200 dark:border-white/5 group text-center shadow-sm dark:shadow-none transition-all duration-300"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.prefix}</div>
                            <div className="text-4xl lg:text-5xl font-black text-green-600 dark:text-primary-light mb-2">{stat.value}</div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{stat.label}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
