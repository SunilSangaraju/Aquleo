import Link from 'next/link'
import { Smartphone, Layout, Briefcase, Rocket, Server, Database } from 'lucide-react'
import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Services — Aquleo Technologies',
  description: 'Mobile apps, web platforms, custom software, and MVP development from Aquleo Technologies.',
}

const Tag = ({ children }: { children: string }) => (
  <span className="inline-block text-[10px] font-montserrat font-medium border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-text bg-white">
    {children}
  </span>
)

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center bg-navy-mid text-navy-lightest border border-navy-light text-xs font-montserrat font-medium px-3 py-1.5 rounded-full mb-5">
            Services
          </span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl">
            Technology services, without the{' '}
            <span className="italic text-gold-bright">complexity</span>
          </h1>
          <p className="font-montserrat text-navy-lightest mt-4 max-w-xl leading-relaxed">
            We work with startups, SMEs, and enterprises to design, build, and ship software that
            actually solves the problem.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Smartphone size={26} className="text-navy" />,
                title: 'Mobile app development',
                desc: 'We build cross-platform Android and iOS apps using React Native and Expo. From fintech to field tools — fast, offline-capable, and production-ready.',
                tags: ['React Native', 'Expo', 'Android', 'iOS'],
              },
              {
                icon: <Layout size={26} className="text-navy" />,
                title: 'Web application development',
                desc: 'Full-stack web platforms built on Next.js, Node.js, and PostgreSQL. Fast, SEO-ready, and built to scale from day one.',
                tags: ['Next.js', 'Node.js', 'PostgreSQL'],
              },
              {
                icon: <Briefcase size={26} className="text-gold-bright" />,
                title: 'Custom business software',
                desc: 'Purpose-built internal tools, dashboards, and workflow automation systems. We map your process and turn it into software.',
                tags: ['Cloud hosted', 'Custom workflows'],
              },
              {
                icon: <Rocket size={26} className="text-gold-bright" />,
                title: 'MVP development',
                desc: 'Got an idea? We scope, design, and ship a real working MVP in 4–8 weeks. Startup-ready and built for fast iteration.',
                tags: ['4–8 weeks', 'Startup-ready'],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 flex flex-col gap-4"
                style={{ border: '0.5px solid #e5e7eb' }}
              >
                {s.icon}
                <p className="font-montserrat font-bold text-navy-dark text-base">{s.title}</p>
                <p className="font-montserrat text-gray-text text-sm leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel light>How a project works</SectionLabel>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mt-3 mb-12">
            Our process
          </h2>
          <div className="grid md:grid-cols-4 gap-0">
            {[
              {
                n: '01',
                title: 'Discovery call',
                body: 'We listen first. No sales pitch. Free, 30–60 min.',
              },
              {
                n: '02',
                title: 'Proposal & scope',
                body: 'Clear doc: what, timeline, cost. Within 48 hours.',
              },
              {
                n: '03',
                title: 'Design & build',
                body: 'Short sprints. You see progress every week.',
              },
              {
                n: '04',
                title: 'Launch & support',
                body: 'Full code handover. 30-day support included.',
              },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`flex flex-col gap-3 py-6 px-5 ${
                  i < 3 ? 'md:border-r border-navy-mid' : ''
                }`}
              >
                <span className="font-montserrat font-bold text-3xl text-navy" style={{ fontSize: 32 }}>
                  {step.n}
                </span>
                <p className="font-montserrat font-bold text-white text-sm">{step.title}</p>
                <p className="font-montserrat text-navy-lightest text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Tech stack</SectionLabel>
          <h2 className="font-montserrat font-bold text-2xl text-navy-dark mt-3 mb-8">
            What we build with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <Smartphone size={22} className="text-navy" />, name: 'React Native' },
              { icon: <Layout size={22} className="text-navy-dark" />, name: 'Next.js' },
              { icon: <Server size={22} className="text-navy" />, name: 'Node.js' },
              { icon: <Database size={22} className="text-gold-bright" />, name: 'PostgreSQL' },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-3 rounded-xl p-4 bg-white"
                style={{ border: '0.5px solid #e5e7eb' }}
              >
                {t.icon}
                <span className="font-montserrat font-semibold text-navy-dark text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gold-bright py-14">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <h2 className="font-montserrat font-bold text-3xl text-gold-dark">
            Ready to start a project?
          </h2>
          <p className="font-montserrat text-gold-darker text-base max-w-md">
            Tell us what you&apos;re building. We&apos;ll respond within 48 hours.
          </p>
          <Link
            href="/contact"
            className="font-montserrat font-bold bg-navy-dark text-white px-8 py-3 rounded-md text-sm transition-opacity hover:opacity-90 mt-2"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  )
}
