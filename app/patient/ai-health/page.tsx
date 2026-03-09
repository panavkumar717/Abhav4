"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/abha/animated-background"
import { AbhaLogo } from "@/components/abha/logo"

const companions = [
  { id: "wellness-coach", name: "Wellness & Lifestyle Coach", desc: "Guided yoga, workouts, breathing exercises, meditation, and stress management for daily wellness.", gradient: "from-[#6C5CE7] to-[#4834D4]", emoji: "person_in_lotus_position", featured: true },
  { id: "nutrition-assistant", name: "Nutrition & Diet Assistant", desc: "Personalized diet plans, nutrition tracking, micronutrients, and diabetes-friendly meal guidance.", gradient: "from-[#00B894] to-[#55E6A5]", emoji: "green_salad", featured: true },
  { id: "mental-health", name: "Mental Health Companion", desc: "Supportive conversations for emotional well-being, mood support, and stress management.", gradient: "from-[#74B9FF] to-[#A29BFE]", emoji: "person_getting_massage" },
  { id: "womens-care", name: "Women's & Pregnancy Care", desc: "Guidance through pregnancy stages, maternal health advice, and postpartum care.", gradient: "from-[#FD79A8] to-[#E84393]", emoji: "breast_feeding" },
  { id: "family-health", name: "Family Health Assistant", desc: "Health support for children and seniors, vaccination reminders, and caregiving guidance.", gradient: "from-[#B8860B] to-[#DAA520]", emoji: "older_person" },
  { id: "medical-support", name: "Medical Support Assistant", desc: "Emergency first aid instructions and recovery guidance after medical procedures.", gradient: "from-[#FF6B6B] to-[#EE5A24]", emoji: "ambulance" }
]

const emojiMap: Record<string, string> = {
  person_in_lotus_position: "WL",
  green_salad: "ND",
  person_getting_massage: "MH",
  breast_feeding: "WP",
  older_person: "FH",
  ambulance: "MS",
}

export default function AIHealthPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden pb-6">
      <AnimatedBackground />

      {/* Topbar */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-6 py-4 glass-card border-b border-[#F8FFFE]/10">
        <div className="flex items-center gap-3">
          <Link href="/patient/dashboard">
            <motion.div whileHover={{ x: -3 }} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={18} />
            </motion.div>
          </Link>
          <AbhaLogo size="sm" />
        </div>
      </div>

      <div className="relative z-10 flex-1 p-4 md:p-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Your AI Health Companions</h1>
          <p className="text-muted-foreground text-sm mt-2">Choose your personal health guide</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {companions.map((companion, i) => (
            <motion.div
              key={companion.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
            >
              <Link href={`/patient/ai-health/${companion.id}`} className="block group">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative glass-card overflow-hidden p-5 flex flex-col gap-4 ${i % 3 === 0 ? "rounded-2xl" : i % 3 === 1 ? "rounded-3xl" : "rounded-xl"
                    }`}
                >
                  {/* Featured ribbon */}
                  {companion.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#F8FFFE]"
                      style={{ background: "linear-gradient(90deg, #12B88A, #1A6EBF)" }}
                    >
                      <Sparkles size={10} /> Most Used
                    </div>
                  )}

                  {/* Avatar */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${companion.gradient} flex items-center justify-center text-lg font-bold text-[#F8FFFE] group-hover:scale-110 transition-transform duration-300`}
                  >
                    {emojiMap[companion.emoji] || companion.name.slice(0, 2).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">{companion.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{companion.desc}</p>
                  </div>

                  <div
                    className={`inline-flex self-start items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#F8FFFE] bg-gradient-to-r ${companion.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    Chat Now
                  </div>

                  {/* Gradient hover effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${companion.gradient}`}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
