"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Calendar, Users, Phone, FileText, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ManualRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        symptoms: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleGenderChange = (value: string) => {
        setFormData((prev) => ({ ...prev, gender: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Manual Registration Submitted:", formData)
        // For now, just logging to console as requested.
    }

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-md mt-6 p-6 glass-card rounded-2xl border border-white/10 shadow-xl overflow-hidden"
        >
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground/80 flex items-center gap-2">
                        <User size={14} className="text-primary-light" /> Full Name
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary-light"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="age" className="text-foreground/80 flex items-center gap-2">
                            <Calendar size={14} className="text-primary-light" /> Age
                        </Label>
                        <Input
                            id="age"
                            name="age"
                            type="number"
                            placeholder="25"
                            value={formData.age}
                            onChange={handleChange}
                            className="rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary-light"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender" className="text-foreground/80 flex items-center gap-2">
                            <Users size={14} className="text-primary-light" /> Gender
                        </Label>
                        <Select onValueChange={handleGenderChange} required>
                            <SelectTrigger id="gender" className="rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary-light">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="glass-card border-white/10">
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-foreground/80 flex items-center gap-2">
                        <Phone size={14} className="text-primary-light" /> Phone Number
                    </Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="9876543210"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary-light"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="symptoms" className="text-foreground/80 flex items-center gap-2">
                        <FileText size={14} className="text-primary-light" /> Symptoms / Reason for Visit
                    </Label>
                    <Textarea
                        id="symptoms"
                        name="symptoms"
                        placeholder="Describe your symptoms..."
                        value={formData.symptoms}
                        onChange={handleChange}
                        className="rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary-light min-h-[100px]"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full rounded-xl py-6 font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                    style={{ background: "linear-gradient(135deg, #0A7764, #12B88A)" }}
                >
                    <Send size={18} className="mr-2" />
                    Submit Registration
                </Button>
            </form>
        </motion.div>
    )
}
