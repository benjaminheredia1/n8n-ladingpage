'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, GitBranch, Users, Calendar, MessageSquare, Youtube, Github, Globe, MessageCircle } from 'lucide-react';

export default function Home() {
  const teamMembers = [
    {
      name: "Luis Miguel Giraldo González",
      role: "Founder de n8n Seniority 🎩",
      description: "AI-FIRST | Me encanta contribuir a la adopción de AI en empresas y en la comunidad hispanohablante",
      image: "/luis-miguel.jpg",
      linkedin: "https://www.linkedin.com/in/luisgiraldo-ai/",
      featured: true,
    },
        {
      name: "Juan Vela",
      role: "Community Leader",
      description: "Líder comunitario apasionado por conectar desarrolladores hispanohablantes. Facilitador de conocimiento y mentor en automatización con n8n e IA.",
      image: "/juanca.png",
      linkedin: "https://www.linkedin.com/in/pablo-benjamin-heredia-ruiz-843a471b7/",
    },
    {
      name: "Benjamin Heredia",
      role: "Technical community leader",
      description: "Desarrollador Full Stack especializado en automatización e IA. Creador de workflows inteligentes y soluciones de integración avanzadas con n8n.",
      image: "/Benjamin.png",
      linkedin: "https://www.linkedin.com/in/pablo-benjamin-heredia-ruiz-843a471b7/",
    },
    {
      name: "Cristóbal Mujica Rojas ",
      role: "Community Lead",
      description: "Analista BI Senior | Magíster en Liderazgo, Dirección y Comunicación Estratégica",
      linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-mujica-rojas-89720316/",
      image: "/image.png",
    },
    {
      name: "Nicolas Emir Mejia Agreda",
      role: "Data Analyst",
      description: "Data Analyst especializado en BI con dominio completo del stack: SQL, R, Python, Power BI, Tableau y Excel. Experto en automatización con n8n e IA. ",
      linkedin: "https://www.linkedin.com/in/nicolas-mejia-agreda/",
      image: "/nicolas.png",
    },
    {
      name: "Yordis Bayeux",
      role: "Consultor en Inteligencia Artificial y Automatización de Procesos",
      description: "Apasionado, amigable y curioso. Me encanta la inteligencia artificial y la automatización para optimizar procesos y flujos, transformando ideas en sistemas que funcionan solos y te devuelven libertad de tiempo.",
      linkedin: "https://www.linkedin.com/in/jesusdavidpater/",
      image: "/yordis.png",
    },

    {
      name: "Jesus David ",
      role: "Business Transformation Analyst",
      description: "Ayudo a Transformar el Caos en Estrategia, Ideas en Impacto y Tecnología en Oportunidades Reales con Innovación automatica e IA",
      linkedin: "https://www.linkedin.com/in/electox/",
      image: "/jesus.png",
    },
    
    {
      name: "José Escobar",
      role: "Business Transformation ",
      description: "Estratega Digital | Diseñador Web Profesional | Asesor de IA aplicada para Negocios | Experto en Automatización Inteligente.",
      linkedin: "https://www.linkedin.com/in/jos%C3%A9-escobar-3787b1157?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/jose.png",
    },

  ];

  const features = [
    {
      title: "Recursos en Español",
      description: "Tutoriales, documentación y guías completamente en español para facilitar tu aprendizaje",
      icon: BookOpen,
    },
    {
      title: "Workflows Compartidos",
      description: "Accede a una biblioteca de workflows probados y listos para implementar en tu negocio",
      icon: GitBranch,
    },
    {
      title: "Soporte de la Comunidad",
      description: "Resuelve dudas y aprende de la experiencia de otros miembros activos",
      icon: Users,
    },
    {
      title: "Eventos y Workshops",
      description: "Sesiones en vivo, masterclasses y meetups para conectar y aprender juntos",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0918] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="n8n Seniority" width={50} height={50} className="rounded-lg" />
              <span className="text-xl font-bold hidden sm:block">n8n Seniority</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#caracteristicas" className="hover:text-[#FF6D5A] transition-colors">
                Características
              </a>
              <a href="#comunidad" className="hover:text-[#FF6D5A] transition-colors">
                Comunidad
              </a>
              <a href="#miembros" className="hover:text-[#FF6D5A] transition-colors">
                Equipo
              </a>
            </div>
            <a
              href="#comunidad"
              className="bg-[#FF6D5A] hover:bg-[#FF5542] px-6 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Únete
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              alt="n8n Seniority Logo"
              width={330}
              height={330}
              className="mx-auto mb-8"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
          >
            <Globe className="w-4 h-4" />
            Comunidad hispana  de n8n
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Automatiza sin límites
            <br />
            <span className="text-[#FF6D5A]">en español</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Únete a la comunidad hispanohablante de n8n donde compartimos conocimientos,
            workflows y construimos el futuro de la automatización juntos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#comunidad"
              className="px-8 py-4 bg-[#FF6D5A] hover:bg-[#FF5542] rounded-lg font-semibold transition-all hover:scale-105"
            >
              Únete a la Comunidad
            </a>
            <a
              href="#caracteristicas"
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg font-semibold transition-all"
            >
              Explorar Recursos
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1500+', label: 'Miembros activos' },
              { value: '150+', label: 'Workflows compartidos' },
              { value: '50+', label: 'Tutoriales en español' },
              { value: '12', label: 'Países representados' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#FF6D5A] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todo lo que necesitas para dominar n8n
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recursos, soporte y una comunidad activa para impulsar tus proyectos de automatización
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-[#FF6D5A]/50 transition-all"
              >
                <Icon className="w-8 h-8 text-[#FF6D5A] mb-4" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF6D5A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section id="miembros" className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conoce al equipo
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Profesionales apasionados por n8n y dedicados a hacer crecer la comunidad hispana
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/[0.03] border rounded-2xl p-8 hover:border-[#FF6D5A]/50 transition-all text-center ${
                  member.featured
                    ? 'border-[#FF6D5A]/30 md:col-span-3 md:max-w-md md:mx-auto'
                    : 'border-white/10'
                }`}
              >
                {member.image ? (
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FF6D5A]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FF6D5A] to-[#FF5542] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FF6D5A] font-medium mb-4 text-sm">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FF6D5A] hover:text-[#FF5542] transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver perfil en LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Únete a la comunidad
            </h2>
            <p className="text-xl text-gray-400">
              Conecta con cientos de profesionales y entusiastas de n8n en toda Latinoamérica y España
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MessageSquare, title: 'Discord', desc: 'Chat en tiempo real, canales especializados y eventos exclusivos', cta: 'Unirse', href: 'https://discord.gg/mMJBMKdv' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Grupo de WhatsApp para consultas rápidas y networking', cta: 'Unirse', href: '#' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-[#FF6D5A]/50 transition-all block"
                >
                  <Icon className="w-10 h-10 text-[#FF6D5A] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <span className="text-[#FF6D5A] text-sm font-medium">{item.cta} →</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para automatizar?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Únete a cientos de profesionales que ya están transformando sus procesos con n8n
          </p>
          <a
            href="#comunidad"
            className="inline-block px-10 py-4 bg-[#FF6D5A] hover:bg-[#FF5542] rounded-lg font-semibold transition-all hover:scale-105 text-lg"
          >
            Comenzar Ahora
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/logo.png" alt="n8n Seniority" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">n8n Seniority</span>
              </div>
              <p className="text-gray-400 text-sm">
                Comunidad hispana  de n8n
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="https://discord.gg/mMJBMKdv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="https://chat.whatsapp.com/LTxvjqtDw9hF3OIxUXPCQB" className="text-gray-400 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            © 2025 n8n Seniority. Una comunidad independiente para usuarios de n8n.
          </div>
        </div>
      </footer>
    </div>
  );
}
