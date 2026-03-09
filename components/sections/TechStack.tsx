"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Cpu, Database, Share2 } from "lucide-react"

const techs = [
    { name: "Next.js", icon: Code2 },
    { name: "TailwindCSS", icon: Zap },
    { name: "Node.js", icon: Cpu },
    { name: "Voice AI", icon: Database },
    { name: "ABHA APIs", icon: Share2 },
]

export function TechStack() {
    return (
        <section className="py-24 bg-white dark:bg-background transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-[0.2em] mb-12 transition-colors">
                        Powered By Modern Tech
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                        {techs.map((tech, idx) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-[#0f2e2a] border border-gray-100 dark:border-white/5 flex items-center justify-center group-hover:bg-green-50 dark:group-hover:bg-primary/20 group-hover:border-green-200 dark:group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-sm dark:shadow-none">
                                    <tech.icon className="text-gray-500 dark:text-muted-foreground group-hover:text-green-600 dark:group-hover:text-primary-light transition-colors" size={36} />
                                </div>
                                <span className="text-sm font-bold text-gray-500 dark:text-muted-foreground group-hover:text-gray-900 dark:group-hover:text-white transition-colors uppercase tracking-widest">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
