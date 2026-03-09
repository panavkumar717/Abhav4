"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ExternalLink, ArrowRight, Sun, Moon } from 'lucide-react'
import Link from 'next/link'

const STATS = [
  { value: '30 Cr+', label: 'ABHA Accounts Created', icon: '🏥' },
  { value: '50,000+', label: 'Healthcare Facilities Connected', icon: '🏨' },
  { value: '28', label: 'States & Union Territories Covered', icon: '🗺️' },
  { value: '₹75,000 Cr', label: 'Annual Health Budget', icon: '💚' },
]

const FEATURES = [
  { icon: '🔒', title: 'Secure 14-digit Digital Health ID', desc: 'Get a unique 14-digit ABHA number linked to your health records' },
  { icon: '📱', title: 'Universal access to health records', desc: 'Access your health records anytime, anywhere using your ABHA ID' },
  { icon: '🔐', title: 'Consent-based data sharing', desc: 'You control who sees your health data with explicit, revocable consent' },
  { icon: '🤝', title: 'Nationwide hospital integration', desc: 'Connect with hospitals, clinics, and diagnostic labs nationwide' },
  { icon: '🛡️', title: 'Privacy-first healthcare system', desc: 'Built by the government with industry-leading security and privacy standards' },
]

export default function LandingPage() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 5%',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🏥</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1 }}>ABHA Mission</div>
            <div style={{ fontSize: 10, color: 'var(--color-text4)', letterSpacing: 1 }}>AYUSHMAN BHARAT</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={resolvedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg2)',
              color: 'var(--color-text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-bg3)'
              e.currentTarget.style.borderColor = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-bg2)'
              e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
          >
            <span style={{ display: 'flex', transition: 'transform 0.4s ease', transform: resolvedTheme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)' }}>
              {resolvedTheme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </span>
            <span>{resolvedTheme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          {/* Login Button */}
          <Link href="/prelogin" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-primary)',
                background: 'transparent',
                color: 'var(--color-primary)',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
            >
              Login
            </button>
          </Link>

          {/* Signup Button */}
          <Link href="/prelogin" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: 'var(--color-primary)',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '80px 5% 60px',
        background: resolvedTheme === 'dark'
          ? 'linear-gradient(135deg,rgba(10,15,30,1) 0%,rgba(15,74,40,0.3) 50%,rgba(10,15,30,1) 100%)'
          : 'linear-gradient(135deg,rgba(248,255,254,1) 0%,rgba(220,238,231,0.5) 50%,rgba(248,255,254,1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -80, left: '20%', width: 400, height: 400,
          borderRadius: '50%',
          background: resolvedTheme === 'dark' ? 'rgba(26,107,60,0.08)' : 'rgba(10,119,100,0.06)',
          filter: 'blur(80px)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: -60, right: '15%', width: 300, height: 300,
          borderRadius: '50%',
          background: resolvedTheme === 'dark' ? 'rgba(0,102,204,0.06)' : 'rgba(26,110,191,0.05)',
          filter: 'blur(60px)', pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-primary)' }}>
              🇮🇳 Government of India Digital Health Ecosystem | National Health Authority · ABDM
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px,6vw,64px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
            color: 'var(--color-text)',
          }}>
            Your Digital Health Identity<br />
            <span style={{
              background: 'linear-gradient(135deg,#22c55e,#10b981)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              for India
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(18px,2.5vw,22px)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginBottom: 20,
            letterSpacing: '0.5px',
          }}>
            One ID. One Health Record. Anywhere in India.
          </p>

          <p style={{
            fontSize: 'clamp(15px,2vw,18px)',
            color: 'var(--color-text2)',
            maxWidth: 600,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Create your ABHA ID and securely access your prescriptions, lab reports, and medical history from anywhere in India.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/prelogin" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Create Your ABHA ID <ArrowRight size={18} />
              </button>
            </Link>

            <a href="https://abha.abdm.gov.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 'var(--radius-md)',
                background: 'transparent',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.color = 'var(--color-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
              >
                <ExternalLink size={16} /> Explore Health Services
              </button>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
          gap: 16,
          marginTop: 60,
          position: 'relative',
          zIndex: 1,
          maxWidth: 900,
          margin: '60px auto 0',
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              border: '1px solid var(--color-border)',
              background: resolvedTheme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(10,15,30,0.03)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 28 }}>{s.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--color-primary-light)', marginTop: 6 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text4)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About ABHA */}
      <section style={{ padding: '60px 5%', background: 'var(--color-bg2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              marginBottom: 12,
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-info)' }}>About ABHA</span>
            </div>

            <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, marginBottom: 16, color: 'var(--color-text)' }}>
              What is ABHA?
            </h2>

            <p style={{
              fontSize: 15,
              color: 'var(--color-text2)',
              lineHeight: 1.8,
              maxWidth: 700,
              margin: '0 auto',
            }}>
              <strong>Ayushman Bharat Health Account (ABHA)</strong> is a unique 14-digit health identification number
              provided by the National Health Authority (NHA) under the Ayushman Bharat Digital Mission (ABDM).
              It empowers citizens to create and manage their health records digitally.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{
                padding: 20,
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg)',
                display: 'flex',
                gap: 14,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ fontSize: 28 }}>{f.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: 'var(--color-text)' }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--color-text3)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ABDM Works */}
      <section style={{ padding: '60px 5%', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, textAlign: 'center', color: 'var(--color-text)' }}>
            How ABDM Works
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '01', title: 'Create Your ABHA', desc: 'Register using Aadhaar or mobile number at any ABDM-enabled facility.' },
              { step: '02', title: 'Link Your Health Records', desc: 'Connect your medical histories from hospitals, clinics, and diagnostic labs.' },
              { step: '03', title: 'Secure Consent-Based Sharing', desc: 'Share your health data securely with doctors and hospitals.' },
              { step: '04', title: 'Receive AI Health Insights', desc: 'Get personalized health recommendations based on your unique medical history.' },
            ].map(s => (
              <div key={s.step} style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                padding: 20,
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg2)',
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  flexShrink: 0,
                  background: 'linear-gradient(135deg,var(--color-primary),var(--color-primary-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: '#fff',
                  fontSize: 14,
                }}>
                  {s.step}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: 4, color: 'var(--color-text)' }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--color-text3)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 5%',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg2)',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <a href="https://abdm.gov.in" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-text4)', fontSize: 13, textDecoration: 'none' }}>
            ABDM Official
          </a>
          <a href="https://abha.abdm.gov.in" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-text4)', fontSize: 13, textDecoration: 'none' }}>
            Create ABHA
          </a>
          <a href="https://nha.gov.in" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-text4)', fontSize: 13, textDecoration: 'none' }}>
            National Health Authority
          </a>
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-text4)', lineHeight: 1.5, maxWidth: 600, margin: '0 auto' }}>
          🇮🇳 Government of India · National Health Authority · Ayushman Bharat Digital Mission<br /><br />
          ⚠️ This is a demonstration interface inspired by the Ayushman Bharat Digital Mission (ABDM) and is built for educational purposes. It is not an official government service.
        </p>
      </footer>
    </div>
  )
}
