import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CasesGrid, ServicesGrid } from "@/components/ui";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Dentista en Chamberí | Clínica Dental Almagro",
  description: "Clínica dental en Chamberí con ortodoncia invisible, estética dental, diagnóstico digital y una atención cercana.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <>
    <ScrollProgress />
    <section className="story-hero">
      <div className="container story-hero-copy">
        <span className="chip">Odontología amable, moderna y sin dolor en Chamberí</span>
        <h1>Cuidamos tu sonrisa.<br/><span>Con vitalidad.</span></h1>
        <p>Rigor clínico, tecnología digital y una forma profundamente humana de acompañarte.</p>
        <div className="actions story-actions"><Link className="btn" href="/contacto">Pedir primera cita</Link><Link className="btn ghost" href="/servicios">Explorar tratamientos</Link></div>
      </div>
      <div className="hero-cinema container">
        <Image src="/images/consulta-hq.jpg" alt="Paciente atendida por una dentista en Clínica Dental Almagro" priority fill sizes="(max-width: 900px) 100vw, 1200px" quality={100}/>
        <div className="cinema-caption"><strong>Cero dolor.</strong><span>Atención adaptada a ti.</span></div>
      </div>
      <div className="scroll-cue" aria-hidden="true">Desliza para descubrir <span>↓</span></div>
    </section>

    <section className="story-statement mint"><div className="container"><p className="kicker">Especialidades odontológicas</p><h2>No se trata solo de cambiar una sonrisa.</h2><p className="statement-accent">Se trata de cambiar cómo te sientes al sonreír.</p></div></section>
    <section className="section mint services-story"><div className="container"><ServicesGrid limit={3}/></div></section>

    <section className="sticky-story peach"><div className="container sticky-grid">
      <div className="sticky-visual"><div className="sticky-frame"><Image src="/images/equipo-hq.jpg" alt="Dra. Elena Almagro y equipo de la clínica" fill sizes="(max-width: 900px) 100vw, 48vw" quality={100}/><div className="portrait-badge"><strong>Dra. Elena Almagro</strong><br/><small>Dirección médica</small></div></div></div>
      <div className="story-steps">
        <article><span>01</span><h2>Primero, te escuchamos.</h2><p>Sin prisas y sin juicios. Entendemos qué te preocupa antes de hablar de tratamientos.</p></article>
        <article><span>02</span><h2>Después, lo hacemos visible.</h2><p>El diagnóstico digital te ayuda a comprender cada opción con claridad y sin tecnicismos innecesarios.</p></article>
        <article><span>03</span><h2>Y avanzamos contigo.</h2><p>Planificamos cada etapa de forma conservadora, transparente y adaptada a tu ritmo.</p><Link className="btn" href="/sobre-nosotros">Conocer la clínica</Link></article>
      </div>
    </div></section>

    <section className="section gallery-story"><div className="container"><div className="section-head"><span className="chip amber-chip">Transformaciones reales</span><h2 className="title-md">Resultados que se explican por sí solos.</h2><p className="lead">Casos clínicos documentados y planificados de forma individual.</p></div><CasesGrid/></div></section>
    <section className="story-quote yellow"><div className="container"><div className="quote-mark">“</div><h2>Volví a sonreír sin pensar en ello.</h2><p>La calma, las explicaciones y el acompañamiento marcaron la diferencia durante todo el proceso.</p><span>Paciente de ortodoncia · Chamberí</span></div></section>
    <section className="finale"><div className="container"><p className="kicker">Tu primera visita</p><h2>Una conversación puede ser el principio de una gran sonrisa.</h2><p>Cuéntanos qué necesitas. Te ayudaremos a dar el siguiente paso con tranquilidad.</p><Link className="btn finale-btn" href="/contacto">Solicitar una cita</Link></div></section>
  </>;
}
