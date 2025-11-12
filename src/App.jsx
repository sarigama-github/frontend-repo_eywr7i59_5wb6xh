import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Globe, Code2, Rocket, Terminal, Cpu, ChevronRight, ExternalLink } from 'lucide-react'

function Nav() {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
          <span className="font-semibold tracking-tight">Full‑Stack Dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 transition"
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white transition" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo('contact')}} className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">Hire me</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/50 via-white/30 to-white/90" />
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <Rocket size={14} /> Open to full‑time & freelance
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Building delightful web apps from idea to production
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">I’m a full‑stack developer specializing in React, FastAPI, and modern cloud tooling. I craft fast, accessible, and scalable products end‑to‑end.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
              View Projects <ChevronRight size={16} />
            </a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-2 rounded-md bg-white border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechPills() {
  const tech = [
    { icon: <Code2 size={16} />, label: 'React' },
    { icon: <Code2 size={16} />, label: 'TypeScript' },
    { icon: <Terminal size={16} />, label: 'FastAPI' },
    { icon: <Cpu size={16} />, label: 'MongoDB' },
    { icon: <Cpu size={16} />, label: 'Node & Vite' },
    { icon: <Globe size={16} />, label: 'Tailwind CSS' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {tech.map((t, i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg border bg-white/60 backdrop-blur px-3 py-2 text-sm text-gray-700">
          {t.icon}
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I blend solid product thinking with strong engineering fundamentals. I’ve shipped dashboards, real‑time features, and APIs used by thousands. I care about DX, performance, and thoughtful UI.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="rounded-md bg-white p-3 border">Pixel‑perfect frontends</li>
            <li className="rounded-md bg-white p-3 border">Scalable APIs & databases</li>
            <li className="rounded-md bg-white p-3 border">CI/CD & cloud deployments</li>
            <li className="rounded-md bg-white p-3 border">Testing & observability</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100" />
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat label="Projects" value="25+" />
            <Stat label="Years" value="5+" />
            <Stat label="Commits" value="10k+" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border bg-white py-3">
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/projects`)
        if (!res.ok) throw new Error('Failed to load projects')
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [baseUrl])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured projects</h2>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Let’s build yours <ChevronRight size={16} />
          </a>
        </div>

        {loading ? (
          <p className="mt-8 text-gray-600">Loading projects…</p>
        ) : error ? (
          <p className="mt-8 text-red-600">{error}</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <article key={idx} className="group rounded-xl overflow-hidden border bg-white hover:shadow-lg transition">
                <div className="aspect-video w-full bg-gray-100" style={{backgroundImage: p.image ? `url(${p.image})` : undefined, backgroundSize:'cover', backgroundPosition:'center'}} />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags?.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                        Live <ExternalLink size={14} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                        Code <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Contact() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '', budget: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: 'Sending…' })
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ state: 'success', msg: 'Thanks! I will get back to you shortly.' })
      setForm({ name: '', email: '', subject: '', message: '', company: '', budget: '' })
    } catch (e) {
      setStatus({ state: 'error', msg: e.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s work together</h2>
          <p className="mt-4 text-gray-700">Have an idea or project in mind? I can help bring it to life—from MVP to launch.</p>
          <div className="mt-6 flex items-center gap-3 text-gray-700">
            <Mail size={18} /> <a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required />
            <Input type="email" label="Email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} required />
          </div>
          <Input label="Company" value={form.company} onChange={(e)=>setForm({...form, company: e.target.value})} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Subject" value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} required />
            <Input label="Budget" value={form.budget} onChange={(e)=>setForm({...form, budget: e.target.value})} placeholder="$5k - $15k" />
          </div>
          <Textarea label="Message" rows={5} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} required />
          <button type="submit" disabled={status.state==='loading'} className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 disabled:opacity-60">
            {status.state === 'loading' ? 'Sending…' : 'Send message'}
          </button>
          {status.state !== 'idle' && (
            <p className={`${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600'} text-sm`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Input({ label, type = 'text', value, onChange, required, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}{required && ' *'}</span>
      <input type={type} value={value} onChange={onChange} required={required} placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
    </label>
  )
}

function Textarea({ label, rows = 4, value, onChange, required }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}{required && ' *'}</span>
      <textarea rows={rows} value={value} onChange={onChange} required={required}
        className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
    </label>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Full‑Stack Developer. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gray-900"><Github size={16} /> GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gray-900"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <TechPills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
