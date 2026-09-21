"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { ScanLine, Sparkles, Smile } from "lucide-react";

const treatments = [
  { number: "01", title: "Ortodoncia invisible", line: "Precisión que apenas se ve.", color: "mint", icon: ScanLine },
  { number: "02", title: "Blanqueamiento dental", line: "Luz, control y naturalidad.", color: "coral", icon: Sparkles },
  { number: "03", title: "Diseño de sonrisa 3D", line: "Primero lo ves. Después lo vives.", color: "amber", icon: Smile },
];

const scenes = [
  { image: "/images/consulta-hq.webp", eyebrow: "Primero", title: "Te escuchamos.", text: "Antes de diagnosticar, entendemos qué te preocupa y qué esperas de tu tratamiento." },
  { image: "/images/equipo-hq.webp", eyebrow: "Después", title: "Lo hacemos visible.", text: "La planificación digital convierte lo complejo en una explicación clara y comprensible." },
  { image: "/images/javier-hq.webp", eyebrow: "Y entonces", title: "Avanzamos contigo.", text: "Cada etapa se adapta a tu ritmo, con seguimiento cercano y decisiones compartidas." },
];

function Scene({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const start = index / 3;
  const middle = start + 0.16;
  const end = (index + 1) / 3;
  const opacity = useTransform(progress, [Math.max(0, start - .04), middle, end - .045, Math.min(1, end + .03)], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1.36, 1.02]);
  const y = useTransform(progress, [start, middle], [80, 0]);
  const scene = scenes[index];
  return <motion.article className="zoom-scene" style={{ opacity }}>
    <motion.div className="zoom-scene-image" style={{ scale }}><Image src={scene.image} alt="Experiencia clínica en Clínica Dental Almagro" fill sizes="100vw" quality={100} priority={index === 0}/></motion.div>
    <div className="zoom-shade" />
    <motion.div className="zoom-copy" style={{ y }}><span>{scene.eyebrow}</span><h2>{scene.title}</h2><p>{scene.text}</p></motion.div>
  </motion.article>;
}

function Treatment({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const start = index / 3;
  const end = (index + 1) / 3;
  const opacity = useTransform(progress, [Math.max(0, start - .03), start + .08, end - .08, Math.min(1, end + .03)], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + .16, end], [.5, 1, 1.18]);
  const rotate = useTransform(progress, [start, start + .16], [index % 2 ? 9 : -9, 0]);
  const product = treatments[index];
  const Icon = product.icon;
  return <motion.article className={`product-reveal ${product.color}`} style={{ opacity, scale, rotate }}>
    <div className="product-orbit"><span>{product.number}</span></div>
    <div className="product-icon"><Icon size={54}/></div>
    <p>Tratamiento</p><h2>{product.title}</h2><strong>{product.line}</strong>
    <Link href="/servicios">Descubrir tratamiento</Link>
  </motion.article>;
}

export function ScrollyHome() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: storyProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const { scrollYProgress: productProgress } = useScroll({ target: productRef, offset: ["start start", "end end"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, reduce ? 1 : 1.58]);
  const heroY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 180]);
  const heroOpacity = useTransform(heroProgress, [0, .42], [1, 0]);
  const storyBar = useTransform(storyProgress, [0, 1], [0, 1]);

  return <>
    <section ref={heroRef} className="mega-hero">
      <div className="mega-hero-sticky">
        <motion.div className="mega-hero-image" style={{ scale: heroScale, y: heroY }}><Image src="/images/consulta-hq.webp" alt="Dentista atendiendo a una paciente en Chamberí" fill sizes="100vw" priority quality={100}/></motion.div>
        <div className="mega-hero-shade" />
        <motion.div className="mega-hero-copy" style={{ opacity: heroOpacity }}><span>Clínica Dental Almagro · Chamberí</span><h1>Tu sonrisa.<br/><em>Más viva que nunca.</em></h1><p>Odontología avanzada, explicada con calma y diseñada alrededor de ti.</p><div className="actions"><Link className="btn" href="/contacto">Pedir primera cita</Link><Link className="btn glass" href="/servicios">Ver tratamientos</Link></div></motion.div>
        <motion.div className="hero-word" style={{ opacity: heroOpacity }}>SONRÍE</motion.div>
      </div>
    </section>

    <section className="impact-line"><div><span>Precisión digital.</span><span>Trato humano.</span><span>Resultados naturales.</span></div></section>

    <section ref={storyRef} className="zoom-story">
      <div className="zoom-story-sticky">{scenes.map((_, index) => <Scene key={index} progress={storyProgress} index={index}/>) }<motion.div className="story-progress" style={{ scaleX: storyBar }}/><div className="story-counter">01&nbsp;&nbsp; 02&nbsp;&nbsp; 03</div></div>
    </section>

    <section className="product-intro"><span>Tratamientos</span><h2>No son servicios.<br/>Son nuevas posibilidades.</h2></section>

    <section ref={productRef} className="product-story"><div className="product-story-sticky">
      <div className="product-giant">PRECISIÓN</div>
      {treatments.map((_, index) => <Treatment key={index} progress={productProgress} index={index}/>) }
      <motion.div className="product-progress" style={{ scaleX: productProgress }}/>
    </div></section>

    <section className="results-film"><div className="results-track">
      <figure><Image src="/images/javier-hq.webp" alt="Resultado de ortodoncia invisible" fill sizes="80vw" quality={100}/><figcaption><span>Ortodoncia invisible</span><strong>Alineación natural.</strong></figcaption></figure>
      <figure><Image src="/images/lucia-hq.webp" alt="Resultado de blanqueamiento dental" fill sizes="80vw" quality={100}/><figcaption><span>Blanqueamiento</span><strong>Luz sin artificios.</strong></figcaption></figure>
      <figure><Image src="/images/carmen-hq.webp" alt="Resultado de estética dental" fill sizes="80vw" quality={100}/><figcaption><span>Estética dental</span><strong>Armonía en cada detalle.</strong></figcaption></figure>
    </div></section>

    <section className="scrolly-finale"><span>El siguiente capítulo</span><h2>Empieza con una conversación.</h2><p>Cuéntanos qué necesitas. Te escuchamos sin prisas.</p><Link className="btn" href="/contacto">Solicitar una cita</Link></section>
  </>;
}
