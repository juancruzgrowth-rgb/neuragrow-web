/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Target, 
  CreditCard, 
  Globe, 
  UserSearch, 
  Database, 
  BrainCircuit,
  Linkedin,
  Twitter,
  Sun,
  Moon
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const tools = [
  "OpenAI", "Anthropic", "Google", "n8n", "Zapier", "GoHighLevel", 
  "Supabase", "Notion", "WhatsApp", "VAPI", "Airtable", "PostgreSQL"
];

function InteractiveGrid() {
  return (
    <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,40px)] grid-rows-[repeat(auto-fill,40px)] opacity-40 pointer-events-none sm:pointer-events-auto">
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} className="grid-cell w-10 h-10" />
      ))}
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            Neuragrow
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight">
            <a href="#casos" className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Casos de éxito</a>
            <a href="#nosotros" className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Nosotros</a>
            <a href="#servicios" className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Servicios</a>
            <a href="#resenas" className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Reseñas</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-all">
              Hablemos
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <InteractiveGrid />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-[1.05]"
          >
            El socio definitivo en IA y automatización para empresas B2B que quieren crecer.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Automatizamos procesos, generamos leads y construimos sistemas inteligentes que trabajan mientras vos dormís.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all active:scale-95">
              Reservar llamada gratuita
            </button>
            <button className="w-full sm:w-auto border border-[var(--border)] px-10 py-4 rounded-full font-bold text-lg hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all active:scale-95">
              Ver casos de éxito
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full max-w-5xl mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] font-bold mb-8">Trabajamos con herramientas líderes</p>
            <div className="logo-mask overflow-hidden whitespace-nowrap relative">
              <div className="flex animate-marquee items-center gap-16 py-4">
                {[...tools, ...tools].map((tool, i) => (
                  <span key={i} className="text-[var(--text-muted)] text-lg font-bold tracking-tight opacity-70 hover:opacity-100 transition-opacity">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos" className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span 
            {...fadeInUp}
            className="text-primary font-bold text-xs tracking-[0.2em] mb-4 block"
          >
            CASOS DE ÉXITO
          </motion.span>
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
          >
            Resultados reales para negocios reales.
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "$15k/mes con 2 operadores",
                desc: "Optimización de flujo de ventas mediante IA conversacional y calificación automática de leads."
              },
              {
                title: "+300% en Booking Rate",
                desc: "Implementación de infraestructura de outbound escalable para agencia de software."
              },
              {
                title: "ROI 12x en 90 días",
                desc: "Automatización completa del backend operativo para empresa de logística internacional."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group bg-[var(--background)] border border-[var(--border)] p-10 rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-[var(--text-muted)] mb-8 leading-relaxed">{item.desc}</p>
                <a href="#" className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
                  Ver caso <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">¿Quiénes somos?</h2>
              <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-xl">
                Somos un equipo de ingenieros y estrategas apasionados por el potencial de la Inteligencia Artificial. Nuestra misión es liberar el potencial humano automatizando lo mundano.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { name: "Alex Rivera", role: "Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
                { name: "Elena Moretti", role: "Growth", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
                { name: "Marco Soler", role: "Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" }
              ].map((member, i) => (
                <motion.div key={i} variants={fadeInUp} className="space-y-4">
                  <div className="aspect-[4/5] bg-[var(--surface)] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span {...fadeInUp} className="text-primary font-bold text-xs tracking-[0.2em] mb-4 block">SERVICIOS</motion.span>
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">Todo lo que necesitás para crecer con IA.</motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Target, title: "Generación de Leads", desc: "Sistemas automatizados de prospección y nutrición que llenan tu calendario de reuniones." },
              { icon: CreditCard, title: "Operaciones de Ventas", desc: "Automatización de CRM, seguimiento de deals y scoring de clientes en tiempo real." },
              { icon: Globe, title: "Experiencias Web", desc: "Interfaces inteligentes que personalizan el contenido según el comportamiento." },
              { icon: UserSearch, title: "Sistemas de Contratación", desc: "Filtros de IA para candidatos y flujos de onboarding sin carga administrativa." },
              { icon: Database, title: "Infraestructura Backend", desc: "Conectamos todas tus herramientas para que los datos fluyan automáticamente." },
              { icon: BrainCircuit, title: "Estrategia con IA", desc: "Consultoría de alto nivel para identificar oportunidades de eficiencia masiva." }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-12 border border-[var(--border)] bg-[var(--background)] rounded-2xl hover:bg-[var(--surface)] transition-colors duration-300"
              >
                <service.icon className="w-10 h-10 mb-8 text-primary" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-24 tracking-tight">Cómo trabajamos</motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { num: "01", title: "Auditoría del funnel", desc: "Sesión gratuita de 30 min para detectar cuellos de botella." },
              { num: "02", title: "Propuesta", desc: "Alcance claro, plazo definido y un precio fijo transparente." },
              { num: "03", title: "Proyecto", desc: "Actualizaciones semanales y entrega de producto funcional." },
              { num: "04", title: "Gestión continua", desc: "Retainer opcional para escalar sistemas y soporte." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-left">
                <span className="text-6xl font-bold text-primary/20 block mb-6">{step.num}</span>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter max-w-4xl mx-auto leading-tight"
          >
            Reservá una llamada gratuita de 30 minutos.
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
          >
            Auditamos tu funnel y te mostramos exactamente dónde estás dejando dinero sobre la mesa.
          </motion.p>
          <motion.button 
            {...fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/20"
          >
            Reservar mi llamada
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="space-y-6">
              <span className="text-2xl font-bold tracking-tighter">Neuragrow</span>
              <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
                Impulsando la eficiencia B2B a través de arquitecturas inteligentes y automatización de vanguardia.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="font-bold text-sm">Empresa</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm">Recursos</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li><a href="#" className="hover:text-primary transition-colors">Casos de éxito</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Guías</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm">Redes</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                  <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /> Twitter (X)</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">
            <p>© 2024 Neuragrow. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
