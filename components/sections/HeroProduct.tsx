"use client"

import { motion } from "framer-motion"
import { Mic, CheckCircle2, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroProduct() {
    return (
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-white dark:bg-transparent transition-colors">
            <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Side: Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white"
                    >
                        Voice-Powered Hospital Registration using{" "}
                        <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                            ABHA
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                    >
                        Register for OPD in seconds using voice or typing with multilingual AI. Seamlessly integrated with India's Digital Health Mission.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
                    >
                        {[
                            "Voice AI",
                            "Multilingual Support",
                            "ABHA Integration"
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-primary/20 text-sm font-semibold text-green-700 dark:text-primary-light shadow-sm dark:shadow-none transition-colors">
                                <CheckCircle2 size={16} />
                                {feature}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4"
                    >
                        <Link href="/hospital/opd">
                            <Button size="lg" className="rounded-2xl px-8 py-7 text-lg font-bold bg-green-600 hover:bg-green-700 dark:bg-gradient-to-br dark:from-primary-dark dark:to-primary hover:scale-105 transition-all text-white border-0">
                                Try OPD Demo <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-2xl px-8 py-7 text-lg font-bold border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-2 text-gray-900 dark:text-white transition-colors">
                            <Play size={18} fill="currentColor" /> View Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Right Side: Mock Kiosk UI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 w-full max-w-lg lg:max-w-xl perspective-1000"
                >
                    <div className="relative bg-white dark:bg-[#0f2e2a] rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl p-6 overflow-hidden transform-gpu transition-colors">
                        {/* Mock Header */}
                        <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-white/5 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-primary/20 flex items-center justify-center transition-colors">
                                    <span className="text-green-700 dark:text-primary-light font-bold">A+</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">ABHA+ OPD</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-none">Registration Kiosk</div>
                                </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-primary/10 border border-green-200 dark:border-primary/20 text-[10px] text-green-700 dark:text-primary-light font-bold transition-colors">
                                EN / HI / TA
                            </div>
                        </div>

                        {/* Mock Visualizer Area */}
                        <div className="aspect-video bg-gray-50 dark:bg-black/40 rounded-2xl mb-8 flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-white/5 transition-colors">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-500 dark:from-primary-dark dark:to-primary flex items-center justify-center shadow-[0_0_40px_rgba(18,184,138,0.2)] dark:shadow-[0_0_40px_rgba(18,184,138,0.3)] mb-4">
                                <Mic size={40} className="text-white" />
                            </div>
                            <div className="space-y-1 text-center">
                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Listening to Patient...</div>
                                <div className="flex gap-1 justify-center h-4 items-center">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-1 bg-green-500 dark:bg-primary-light h-2 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mock Conversation Log */}
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-start">
                                <div className="max-w-[80%] rounded-2xl bg-gray-100 dark:bg-white/5 p-3 text-xs border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 transition-colors">
                                    Namaste! Welcome to ABHA+. Please state your name and reason for visit.
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="max-w-[80%] rounded-2xl bg-green-50 dark:bg-primary/10 p-3 text-xs border border-green-100 dark:border-primary/20 text-green-700 dark:text-primary-light transition-colors">
                                    Mera naam Rajesh hai, mujhe kal se fever hai.
                                </div>
                            </div>
                        </div>

                        {/* Mock UI Polish */}
                        <div className="h-2 bg-gradient-to-r from-transparent via-green-500/10 dark:via-primary/20 to-transparent blur-xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
