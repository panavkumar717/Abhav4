"use client"

import { motion } from "framer-motion"
import { PlayCircle, MessageSquareText, Search, Ticket } from "lucide-react"

const steps = [
    {
        icon: PlayCircle,
        title: "Tap Start",
        desc: "Patients tap the Start Registration button at the kiosk.",
    },
    {
        icon: MessageSquareText,
        title: "Speak or Type",
        desc: "Speak naturally or use the keyboard to provide details.",
    },
    {
        icon: Search,
        title: "Verify ABHA",
        desc: "System fetches and verifies the patient health ID.",
    },
    {
        icon: Ticket,
        title: "Get Token",
        desc: "Instant token printout with department and counter info.",
    },
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-background/30 backdrop-blur-sm border-y border-gray-100 dark:border-white/5 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white"
                    >
                        How ABHA+ Works
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-green-500 dark:bg-primary-light mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/20 dark:via-primary/20 to-transparent -translate-y-12" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2rem] bg-white dark:bg-[#0f2e2a] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-300"
                        >
                            <div className="w-20 h-20 rounded-full bg-white dark:bg-background border-4 border-green-100 dark:border-primary/20 flex items-center justify-center mb-6 shadow-xl relative transition-colors">
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 dark:bg-primary flex items-center justify-center text-xs font-black text-white border-2 border-white dark:border-background transition-colors">
                                    {idx + 1}
                                </div>
                                <step.icon className="text-green-700 dark:text-primary-light" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[200px]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
