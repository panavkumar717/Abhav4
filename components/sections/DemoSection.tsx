"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Link from "next/link"

export function DemoSection() {
    return (
        <section className="py-24 bg-white dark:bg-background relative overflow-hidden transition-colors">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#12B88A00_0%,#12B88A44_50%,#12B88A00_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[3rem] p-12 lg:p-20 bg-white dark:bg-[#0f2e2a] border border-gray-200 dark:border-primary/20 text-center shadow-lg dark:shadow-[0_0_80px_rgba(18,184,138,0.1)] transition-all duration-300"
                >
                    <h2 className="text-4xl lg:text-6xl font-black mb-8 text-gray-900 dark:text-white transition-colors">
                        Try the OPD Registration System
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors">
                        Experience the future of hospital registration. See how voice AI simplifies the patient journey.
                    </p>

                    <Link href="/hospital/opd">
                        <Button size="lg" className="rounded-2xl px-12 py-8 text-2xl font-black bg-green-600 hover:bg-green-700 dark:bg-gradient-to-br dark:from-primary-dark dark:to-primary hover:scale-105 transition-all text-white shadow-2xl shadow-green-600/20 dark:shadow-primary/40 border-0">
                            Launch OPD Demo <Rocket className="ml-3" />
                        </Button>
                    </Link>

                    <div className="mt-12 flex justify-center gap-8 opacity-50 transition-all duration-700">
                        <div className="flex items-center gap-2 font-bold text-sm text-gray-900 dark:text-white transition-colors">
                            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-primary animate-pulse" /> Live in 5 Hospitals
                        </div>
                        <div className="flex items-center gap-2 font-bold text-sm text-gray-900 dark:text-white transition-colors">
                            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-primary animate-pulse" /> ABDM Certified
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
